import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";
import NavBar from "./components/NavBar/navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import BackgroundVideo from "./components/FrontPageVideo/frontPageVideo";
import HomePageText from "./components/TextComp/frontPageText";

function App() {
  return (
    <>
      <Box>
        <NavBar></NavBar>
        <HomePageText></HomePageText>
        <BackgroundVideo></BackgroundVideo>
      </Box>
    </>
  );
}

export default App;
