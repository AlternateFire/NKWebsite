import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from "@mui/material";

const APPBAR_HEIGHT = 81;

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
                  ml: 2,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#00a0ff",
                  },
                }}
                onClick={() => alert("Navigate to About")} // Replace with navigation logic
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  About
                </Typography>
              </Button>
              {/* Sources*/}
              <Button
                variant="text"
                sx={{
                  ml: 2,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#00a0ff",
                  },
                }}
                onClick={() => alert("Navigate to Sources")} // Replace with navigation logic
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Sources
                </Typography>
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
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#00a0ff",
                  },
                }}
                onClick={() => alert("Navigate to Contact")} // Replace with navigation logic
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Contact
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </AppBar>
    </React.Fragment>
  );
}

