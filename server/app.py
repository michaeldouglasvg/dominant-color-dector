from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import imutils
from sklearn.cluster import KMeans

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# Initialize global variable
dominant_colors_data = {}

@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    file = request.files['image']
    image_data = file.read()

    # Process image
    clusters = 6
    img = cv2.imdecode(np.frombuffer(image_data, np.uint8), cv2.IMREAD_COLOR)
    img = imutils.resize(img, height=200)

    flat_img = np.reshape(img, (-1, 3))

    # KMeans clustering
    kmeans = KMeans(n_clusters=clusters, random_state=0, n_init='auto')
    kmeans.fit(flat_img)
    
    dominant_colors = np.array(kmeans.cluster_centers_, dtype='uint8')
    percentages = (np.unique(kmeans.labels_, return_counts=True)[1]) / flat_img.shape[0]

    # Sort colors by percentage
    p_and_c = sorted(zip(percentages, dominant_colors), key=lambda x: x[0], reverse=True)

    # Store results globally
    global dominant_colors_data
    dominant_colors_data = {
        'dominant_colors': [color.tolist() for _, color in p_and_c],
        'percentages': [p for p, _ in p_and_c],
    }

    return jsonify({'message': 'Image uploaded successfully'})

@app.route('/api/dominant-colors', methods=['GET'])
def get_dominant_colors():
    global dominant_colors_data
    if not dominant_colors_data:
        return jsonify({'error': 'No data available'}), 404
    return jsonify(dominant_colors_data)

if __name__ == '__main__':
    app.run()
