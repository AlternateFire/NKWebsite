import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import BackgroundVideo from "./FrontPageVideo/frontPageVideo";
import HomePageText from "./TextComp/frontPageText";
import WorldClockWidget from "./TextComp/worldClockWidget"
import Cheonma2Analysis from "./TextComp/cheonma2Analysis";

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
    h3: {
      fontSize: "2.5rem",
      fontWeight: 500,
      fontFamily: "Open Sans, sans-serif",
      textTransform: "uppercase",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      fontFamily: "Open Sans, sans-serif",
      lineHeight: 1.75,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      fontFamily: "Open Sans, sans-serif",
    },
  },
});

const FrontPage = () => {
  return (
    <ThemeProvider theme={colorTheme}>
      <CssBaseline />
      <div>
        <Box // going forward: Stop adding fixed positions, use more responsive design logic
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column", // Stack components vertically
            alignItems: "center", // Center horizontally
            justifyContent: "flex-start", // Center vertically
            paddingTop: { xs: "100px", sm: "120px", md: "140px" }, 
            boxSizing: "border-box",
          }}
        >
          {/* <Box  
            sx={{
              position: "absolute",
              top: 0, // Stick to the top
              left: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center", // Center horizontally
            }}
          >
            <WorldClockWidget />
          </Box> */}
          
          <HomePageText />
          <Cheonma2Analysis />
        </Box>
      </div>
    </ThemeProvider>

  );
};

export default FrontPage;
