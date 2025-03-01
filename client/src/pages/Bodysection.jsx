import React from 'react';
import { MainBodyDisplay, LeftSection, RightSection } from "../components/styled/Body.styled"
import { Button } from '../components/styled/Button.styled';


const Bodysection = ({handleClosHome, selectedFile, previewUrl, handleFileInput, openPreview}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!selectedFile){
      alert("Please chose an image to render")
    }else{
      handleClosHome();
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    fetch('https://dominant-color-dector.onrender.com/api/upload-image', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.error(error);
    });
  };

 return (
   <MainBodyDisplay>
     <LeftSection>
      <div className='Title'><p>Upload Image</p></div>
      <div className='Formcontainer'>
       <form>
        <input type="file" name='image' onChange={handleFileInput}/>
        <Button bg="whitesmoke" clr="grey" type='submit' onClick={handleSubmit}
        >Upload an Image from folder</Button>
       </form>
      </div>
      <div className='Copyright'>
       <p>Copyright&copy;2023calebosire.com</p>
      </div>
     </LeftSection>
     {openPreview && <RightSection>
      <div className='Title'><p>Image preview</p></div>
      <div className='ImagePreview'>
      {previewUrl && <img src={previewUrl} alt="Preview" height="100%" width="100%"/>}
      </div>
      <Button bg="orangered" clr="white" type='submit' onClick={handleSubmit}>Process Image</Button>
     </RightSection> }
   </MainBodyDisplay>
 );
}

export default Bodysection;
