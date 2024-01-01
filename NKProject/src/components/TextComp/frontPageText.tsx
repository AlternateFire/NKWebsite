import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";


const colorTheme = createTheme({
  palette: {
    primary: { main: "#fff"},
    secondary: { main: "#000"},
  },
    typography: {
        h1: {
          fontSize: "4.5rem",
          fontWeight: 100,
          fontFamily: "sans-serif"
        },
        h2: {
          fontSize: "1.75rem",
          fontWeight: 600,
        },
        h3: {
          fontSize: "1.5rem",
          fontWeight: 500,
        },
        h6: {
          fontSize: "1.5rem",
          fontWeight: 500,
          fontFamily: "sans-serif",
        },
      },
});

const textHeader = "NORTH KOREAN SHIT" + '\n' + "Hello"
const subTextHeader = "This website hopes to uncover and analyze\n" + 
"Some of the "

export default function HomePageText() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        padding: 20,
      }}
    >
      <ThemeProvider theme={colorTheme}>
        <Typography variant="h1" align="left" color="primary" sx={{wordWrap: "break-word"}}>
          {textHeader}
        </Typography>

        <Typography variant="h1" align="left" color="primary">
      
        </Typography>

        <Typography variant="subtitle1" align="left" color="primary">
          {subTextHeader}
        </Typography>
      </ThemeProvider>
    </Box>
  );
}
