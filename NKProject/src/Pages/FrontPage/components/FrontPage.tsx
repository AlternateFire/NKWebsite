import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import BackgroundVideo from "./FrontPageVideo/frontPageVideo";
import HomePageText from "./TextComp/frontPageText";
import WorldClockWidget from "./TextComp/worldClockWidget"
import Cheonma2Analysis from "./TextComp/cheonma2Analysis";


const FrontPage = () => {
  return (
      <div>
        <Box // going forward: Stop adding fixed positions, use more responsive design logic
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column", // Stack components vertically
            alignItems: "center", // Center horizontally
            justifyContent: "flex-start", // Center vertically
            paddingTop: { xs: "100px", sm: "120px", md: "140px" }, 
            paddingBottom: { xs: "100px", sm: "120px", md: "140px" }, 
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

  );
};

export default FrontPage;
