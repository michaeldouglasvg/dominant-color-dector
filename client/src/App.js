import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./pages/Header";
import Bodysection from "./pages/Bodysection";
import Colorsresults from "./pages/Colorsresults";
import Globalstyles from "./components/styled/Global/Global.uni";
import Mainloader from "./components/universals/Mainloader";
import styled from "styled-components";

const App = () => {
  const [themeset, setNewTheme] = useState(true);
  const [homescreen, setHomescreen] = useState(true);
  const [colorresults, setColorresults] = useState(false);
  const [mainloader, setMainloader] = useState(true);
  const [openPreview, setOpenpreview] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const setNewThemestate = () => setNewTheme(!themeset);

  const handleClosHome = () => {
    setHomescreen(!homescreen);
    setColorresults(!colorresults);
  };

  const handleFileInput = (e) => {
    e.preventDefault();
    setOpenpreview(true);
    setSelectedFile(e.target.files[0]);

    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setPreviewUrl(imageUrl);
  };

  const theme = {
    colors: {
      header: "skyblue",
      body: themeset ? "whitesmoke" : "rgb(39, 29, 29)",
      footer: "grey",
      color: themeset ? "black" : "white",
    },
    responsive: {
      mobilesm: "426px",
      mobilemd: "769px",
      mobilelg: "1025px",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMainloader(false);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        {mainloader && <Mainloader />}
        <Globalstyles />
        <Header handleTheme={setNewThemestate} set={themeset} />
       
        {homescreen && (
          <Bodysection
            handleClosHome={handleClosHome}
            selectedFile={selectedFile}
            previewUrl={previewUrl}
            handleFileInput={handleFileInput}
            openPreview={openPreview}
          />
        )}

        {colorresults && <Colorsresults handleClosHome={handleClosHome} previewUrl={previewUrl} />}
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.color};
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
`;
