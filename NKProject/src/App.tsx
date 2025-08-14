import NavBar from "./Pages/NavBar/navbar";
import FrontPage from "./Pages/FrontPage/components/FrontPage";
import BackgroundVideo from "./Pages/FrontPage/components/FrontPageVideo/frontPageVideo";
import { createTheme, ThemeProvider } from "@mui/material";

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
    <div>
      <ThemeProvider theme={colorTheme}>
        <NavBar />
        <BackgroundVideo />
        <FrontPage />
      </ThemeProvider>
    </div>
  );
}; 

export default App;
