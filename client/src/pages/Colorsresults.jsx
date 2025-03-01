import React, { useState } from 'react';
import { MainBodyDisplay, RightSection } from "../components/styled/Body.styled";
import Midsection from './Midsection';
import { Button } from '../components/styled/Button.styled';
import Subloader from "../components/universals/Subloader";
import { FaImage, FaPalette } from "react-icons/fa";
import styled from 'styled-components';

const Colorsresults = ({ handleClosHome, previewUrl }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchColors = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dominant-color-dector.onrender.com/api/dominant-colors');
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderColors = () => {
    if (loading) {
      return <Subloader warning="Extracting colors, please wait..." color='green' />;
    }
    if (error) {
      return <p style={{ textAlign: 'center', fontSize: "1.5rem", color: "orangered" }}>{error}</p>;
    }
    if (!data) {
      return <Subloader warning='No colors extracted yet! Press "Get Dominant Colors" to analyze the image.' color='orange' />;
    }
    return (
      <>
        <div className='Title'><p>Scheme Percentages & Analysis</p></div>
        <ColorGrid>
          {data.dominant_colors.map((color, index) => (
            <ColorBox key={index} style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}>
              <span className='RGD'>RGB: ({color[0]}, {color[1]}, {color[2]})</span>
              <span className='PER'>Percentage: {Math.round(data.percentages[index] * 100)}%</span>
            </ColorBox>
          ))}
        </ColorGrid>
      </>
    );
  };

  return (
    <>
      <Midsection setBack={handleClosHome} />
      <MainBodyDisplay>
        <RightSection>
          <div className='Title'><p>Color Mapping</p></div>
          <ImageContainer>
            {previewUrl ? <img src={previewUrl} alt="Preview" /> : <FaImage size={50} color="grey" />}
          </ImageContainer>
          <div style={{borderTop: "1px solid black", marginTop: "1rem"}}>
            <Button onClick={fetchColors} bg='blue' clr="white" style={{margin: "1rem 0rem 1rem 0rem"}}><FaPalette /> Get Dominant Colors</Button>
          </div>
        </RightSection>
        <RightSection>
          {renderColors()}
        </RightSection>
      </MainBodyDisplay>
    </>
  );
};

export default Colorsresults;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.body};
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  padding: 10px;
`;

const ColorBox = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-weight: bold;
  .RGD, .PER {
    font-size: 0.9rem;
    background: rgba(0, 0, 0, 0.5);
    padding: 4px 6px;
    border-radius: 3px;
  }
`;
