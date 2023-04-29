import React from 'react';
import { HeaderStyled } from "../components/styled/Header.styled"

const Header = ({handleTheme, set}) => {
  return (
    <HeaderStyled>
      <div className='Logo'><p>Logo</p></div>
      <div className='Title'>
       <p>DOMINANT COLOR DECTOR IN IMAGES</p>
       <p>DCDM</p>
      </div>
      <div className='Theme' onClick={handleTheme}>
       <p>{set ? "Theme: Dark" : "Theme: Light"}</p>
      </div>
    </HeaderStyled>
  );
}

export default Header;
