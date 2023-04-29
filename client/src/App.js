import React, { useState, useEffect } from "react"
import Header from "./pages/Header"
// import Midsection from "./pages/Midsection"
import Bodysection from "./pages/Bodysection"
import Colorsresults from "./pages/Colorsresults"
import { ThemeProvider } from "styled-components"
import Globalstyles from "./components/styled/Global/Global.uni"
import Mainloader from "./components/universals/Mainloader"

function App() {

  const[themeset, setNewTheme] = useState(true)
  const[homescreen, setHomescreen] = useState(true)
  const[colorresults, setColorresults] = useState(false)
  const[mainloader, setMainloader] = useState(true)
  const[openPreview, setOpenpreview] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const setNewThemestate = () => {
    setNewTheme(!themeset)
  }

  const handleClosHome = () => {
    setHomescreen(!homescreen)
    setColorresults(!colorresults)
  }

  // Handling file upload
    const handleFileInput = (e) => {
      e.preventDefault();
      setOpenpreview(true)
      setSelectedFile(e.target.files[0]);

      // Set up preview image
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setPreviewUrl(imageUrl);
    };

  const theme = {
    colors: {
      header: "skyblue",
      body: themeset ? 'whitesmoke': "rgb(39, 29, 29)",
      footer: "grey ",
      color: themeset ? "black" : "white"
    },

    responsive: {
      mobilesm: "426px",
      mobilemd: "769px",
      mobilelg: "1025px"
    }
  }

  // Function to set interval when 3sec are over
  useEffect(() => {
    const interval = setInterval(() => {
      setMainloader(false)
    }, 3000);

    return () => clearInterval(interval) 
  });

  return (

    <ThemeProvider theme={theme}>
      <>
       {mainloader && <Mainloader />}
        <Globalstyles />

        <Header handleTheme={setNewThemestate} set={themeset}/>

        {homescreen && <Bodysection handleClosHome={handleClosHome} 
        selectedFile={selectedFile}
        previewUrl={previewUrl}
        handleFileInput={handleFileInput}
        openPreview={openPreview}/>}

        {colorresults && <Colorsresults handleClosHome={handleClosHome} previewUrl={previewUrl}/>}
      </>
    </ThemeProvider>
    
  );
}

export default App;
