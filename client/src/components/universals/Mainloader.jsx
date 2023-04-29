import React, { useEffect, useState } from 'react';
import { MainLoaderGlobal, LoaderSubGlobal } from "../styled/Mainloader.styled"
import { InfinitySpin } from  'react-loader-spinner'

const Mainloader = () => {
  const [text, setText] = useState(true)
  const [succeful, setSuccesful] = useState(false)

   //Dynamic text loader
   useEffect(() => {
    const interval = setInterval(() => {
      setText(false)
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Succesful code return 
  useEffect(() => {
    const interval = setInterval(() => {
      setText(true)
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Succesful code return 
  useEffect(() => {
    const interval = setInterval(() => {
      setSuccesful(true)
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainLoaderGlobal>
     <LoaderSubGlobal>
      <h2>Welcome, DCDM <span>[COLORS]</span></h2>
      <InfinitySpin 
        width='200'
        color="green"
      />
      {text ? <p>Searching colors...</p> : (!succeful && <p>Initializing model...</p>)}
      {succeful && <p>Loaded successful.</p>}
     </LoaderSubGlobal>
    </MainLoaderGlobal>
  );
}

export default Mainloader;
