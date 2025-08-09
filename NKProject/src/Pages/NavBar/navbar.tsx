import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import { createTheme } from "@mui/material";

const APPBAR_HEIGHT = 81;

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
    body1: {
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

export default function NavBar() {
  return (
    <React.Fragment>
        <AppBar
          sx={{
            backgroundImage: "linear-gradient(to right, #040f41 15%, #0e679d 90%)",
            padding: "0 20px",
            position: "fixed",
            height: `${APPBAR_HEIGHT}px`, 
            justifyContent: "center",
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{ minHeight: "70px" }}
          >
            {/* Left: GitHub, About */}
            <Grid item xs={3} display="flex" justifyContent="flex-start">
              {/* GitHub */}
              <Box>
                <Button
                  sx={{
                    width: "45px",
                    height: "45px",
                    color: "white",
                    "& .MuiButton-startIcon": {
                      margin: 0, // Ensures the GitHub icon is centered
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: "31px !important", // Adjust the size of the GitHub icon
                    },
                    "&:hover": {
                      color: "#00a0ff",
                    },
                  }}
                  startIcon={<GitHubIcon />}
                  href="https://github.com/AlternateFire"
                  target="_blank"
                />

              </Box>
              {/* About */}
              <Button
                variant="text"
                sx={{
                  color: "white",
                  ml: 2,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#00a0ff",
                  },
                }}
                onClick={() => alert("Navigate to About")} // Replace with navigation logic
              >
                About
              </Button>
              {/* Sources*/}
              <Button
                variant="text"
                sx={{
                  color: "white",
                  ml: 2,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#00a0ff",
                  },
                }}
                onClick={() => alert("Navigate to Sources")} // Replace with navigation logic
              >
                Sources
              </Button>
            </Grid>

            {/* Center: Banner */}
            <Grid item xs={2} display="flex" justifyContent="center">
              <Box
                id="727"
                component="img"
                display={"flex"}
                sx={{
                  alignContent: "center",
                  height: 165,
                  width: 1000,
                  m: -5.1,
                  p: -1,
                  maxHeight: { xs: 300, md: 300 },
                  maxWidth: { xs: 3000, md: 3000 },
                }}
                src="src/Pages/NavBar/image/nkbanner5.png"
              ></Box>
            </Grid>

            {/* Right: Buttons */}
            <Grid item xs={3} display="flex" justifyContent="flex-end">
              <Button
                variant="text"
                sx={{
                  color: "white",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#00a0ff",
                  },
                }}
                onClick={() => alert("Navigate to Contact")} // Replace with navigation logic
              >
                Contact
              </Button>
            </Grid>
          </Grid>
        </AppBar>
    </React.Fragment>
  );
}

