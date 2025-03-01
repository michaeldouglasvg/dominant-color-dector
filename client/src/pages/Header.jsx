import React from 'react';
import { FaPalette, FaMoon, FaSun } from 'react-icons/fa';
import { HeaderStyled } from "../components/styled/Header.styled";

const Header = ({ handleTheme, set }) => {
  return (
    <HeaderStyled>
      <div className='Logo'>
        <FaPalette size={24} />
      </div>
      <div className='Title'>
        <p>DOMINANT COLOR DETECTOR IN IMAGES</p>
        <p>DCDM</p>
      </div>
      <div className='Theme' onClick={handleTheme}>
        {set ? <FaMoon size={24} /> : <FaSun size={24} />}
      </div>
    </HeaderStyled>
  );
};

export default Header;

