import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";

const colorTheme = createTheme({
  palette: {
    primary: { main: "#fff" },
    secondary: { main: "#000" },
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
      fontWeight: 100,
      fontFamily: "sans-serif",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
      fontFamily: "sans-serif",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      fontFamily: "sans-serif",
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 500,
      fontFamily: "sans-serif",
    },
  },
});

const textHeader = "NORTH KOREAN" + "\n" + "MILITARY ANALYSIS ";
const subTextHeader = "This website hopes to uncover and analyze the DPRK's newly released weaponary, vehicles, within the perspetive of the DPRK, since their most recent parades from 2020, onward. This is a passion project designed to test frontend development.";

export default function HomePageText() {
  return (
    <Box
      sx={{
        height: "40%",
        width: "40%",
        display: "flex",
        overflow: "break-word",
        padding: 20,
        marginTop: 5,
      }}
    >
      <div>
        <ThemeProvider theme={colorTheme}>
          <Typography
            variant="h1"
            align="left"
            color="primary"
            sx={{ wordWrap: "break-word" }}
          >
            {textHeader}
          </Typography>

          <Typography variant="subtitle1" align="left" color="primary">
            {subTextHeader}
          </Typography>
        </ThemeProvider>
      </div>
    </Box>
  );
}
