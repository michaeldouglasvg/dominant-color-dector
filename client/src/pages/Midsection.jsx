import React from 'react';
import { MiddleStyled } from "../components/styled/Middle.styled"
import { Button } from '../components/styled/Button.styled';

const Midsection = ({setBack}) => {
  return (
    <MiddleStyled>
     <Button bg="orangered" clr="white" onClick={setBack}>Add Image</Button>
    </MiddleStyled>
  );
}

export default Midsection;
