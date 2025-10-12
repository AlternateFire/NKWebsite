import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import NavBar from "./Pages/NavBar/navbar";
import BackgroundVideo from "./Pages/FrontPage/components/FrontPageVideo/frontPageVideo";
import FrontPage from "./Pages/FrontPage/components/FrontPage";
import AboutPage from "./Pages/AboutPage/components/AboutPage";
import ContactPage from "./Pages/ContactPage/components/ContactPage";

const colorTheme = createTheme({
  palette: {
    primary: { main: "#ffffff" }, 
  },
  typography: {
    h1: {
      fontSize: "3.5rem",
      fontWeight: 500,
      fontFamily: "Open Sans, sans-serif",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 500,
      fontFamily: "Open Sans, sans-serif",
      textTransform: "uppercase",
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 500,
      fontFamily: "Open Sans, sans-serif",
      textTransform: "uppercase",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
      fontFamily: "Open Sans, sans-serif",
      textTransform: "uppercase",
    }, 
    body1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      fontFamily: "Open Sans, sans-serif",
      lineHeight: 1.75,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      fontFamily: "Open Sans, sans-serif",
    },
  },
});


const App = () => {
  return (
      <ThemeProvider theme={colorTheme}>
        <Router>
          <NavBar />
          <BackgroundVideo /> 
            <Routes>
              <Route path="/home" element={<FrontPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
          </Routes>
    </Router>
      </ThemeProvider>
  );
}; 

export default App;
