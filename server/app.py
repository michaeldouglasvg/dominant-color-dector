from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
import imutils

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    file = request.files['image']
    image_data = file.read()

    # Your existing code to get dominant colors and percentages
    clusters = 6
    img = cv2.imdecode(np.frombuffer(image_data, np.uint8), cv2.IMREAD_COLOR)
    org_img = img.copy()

    img = imutils.resize(img,height=200)

    flat_img = np.reshape(img,(-1,3))

    kmeans = KMeans(n_clusters=clusters,random_state=0)
    kmeans.fit(flat_img)
    dominant_colors = np.array(kmeans.cluster_centers_,dtype='uint')
    percentages = (np.unique(kmeans.labels_,return_counts=True)[1])/flat_img.shape[0]
    p_and_c = zip(percentages,dominant_colors)
    p_and_c = sorted(p_and_c,reverse=True)

    # Store the dominant colors and percentages in a global variable
    global dominant_colors_data
    dominant_colors_data = {
        'dominant_colors': dominant_colors.tolist(),
        'percentages': percentages.tolist(),
    }
    
    # Return a success response
    return jsonify({'message': 'Image uploaded successfully'})

@app.route('/api/dominant-colors', methods=['GET'])
def get_dominant_colors():
    # Check if the dominant colors and percentages data is available
    global dominant_colors_data
    if dominant_colors_data is None:
        # Return an error response if the data is not available
        return jsonify({'error': 'No data available'}), 404
    
    # Return the data as JSON
    return jsonify(dominant_colors_data)

if __name__ == '__main__':
    app.run()