import React, { useState } from 'react';
import { MainBodyDisplay, RightSection } from "../components/styled/Body.styled"
import Midsection from './Midsection';
import { Button } from '../components/styled/Button.styled';
import Subloader from "../components/universals/Subloader"


const Colorsresults = ({handleClosHome, previewUrl}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchColors = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/api/dominant-colors');
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const renderColors = () => {
    if (loading) {
      return <Subloader warning="Extrating colors, Please wait..." color='green'/>
    }

    if (error) {
      return <p style={{textAlign: 'center', 
      fontSize: "1.5rem", color: "orangered"}}>{error}</p>;
    }

    if (!data) {
      return <Subloader warning='ops!! No color extratcted yet, Please press the "Get Dorminant Colors" Button, to display the extracted colors from thhe image above the green button.' color='orange'/>
    }

    return (
      <>
      <div className='Title'><p>Scheme Percentages & Analysis</p></div>
       <div className='Colorsegmentation'>
      
        {data.dominant_colors.map((color, index) => (
          <div className='Colordiv' key={index} style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}>
            <span className='RGD'>{`RGB: (${color[0]}, ${color[1]}, ${color[2]})`}</span>
            <span className='PER'>{`Percentage: ${Math.round(data.percentages[index] * 100).toFixed(0)}%`}</span>
          </div>
        ))}
        
       </div>
      </>
    )
  }

  return (
    <>
     <Midsection setBack={handleClosHome}/>
     <MainBodyDisplay>
      <RightSection>
        <div className='Title'><p>Color Mapping</p></div>
        <div className='ImagePreview'>
         {previewUrl && <img src={previewUrl} alt="Preview" height="100%" width="100%"/>}
        </div>
        <div>
          <Button onClick={fetchColors} bg='green' clr="white">Get Dominant Colors</Button>
        </div>
      </RightSection>
       
      <RightSection>
       {renderColors()}
      </RightSection>
    </MainBodyDisplay>
   </>
  );
}

export default Colorsresults;
