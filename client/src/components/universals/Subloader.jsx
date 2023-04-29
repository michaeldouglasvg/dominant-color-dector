import React from 'react';
import { SubLoaderGlobal } from "../styled/Subloader.styled"
import {CirclesWithBar } from  'react-loader-spinner'

const Subloader = ({warning = "", color=""}) => {
  return (
    <SubLoaderGlobal>
    
        <CirclesWithBar
          height="100"
          width="100"
          color={color}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel='circles-with-bar-loading'
        />
        <p style={{textAlign: "center", lineHeight: 1.5}}>{warning}</p>
     
    </SubLoaderGlobal>
  );
}

export default Subloader;
