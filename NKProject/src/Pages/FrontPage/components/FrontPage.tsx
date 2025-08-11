import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import BackgroundVideo from "./FrontPageVideo/frontPageVideo";
import HomePageText from "./TextComp/title_header_beg";
import WorldClockWidget from "./TextComp/world_clock_widget";
import Cheonma2Analysis from "./TextComp/cheonma_2_analysis";
import M2018Analysis from "./TextComp/m2018_analysis";


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
          <HomePageText />
          <Cheonma2Analysis />
          <M2018Analysis />
        </Box>
      </div>
  );
};

export default FrontPage;
