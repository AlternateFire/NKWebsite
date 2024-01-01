import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import { Button, Grid, ThemeProvider, createTheme } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

// const theme = createTheme({
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: {
//           backgroundColor: "#071332",
//           backgroundImage: `radial-gradient(circle, #00a0ff 0%, #071332 84%)`,
//         },
//       },
//     },
//   }
// })

function scrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {}
      </Box>
    </Fade>
  );
}

const pages = ["About", "Projects", "Contact"];

export default function NavBar(
  value: Partial<DefaultTheme> | ((outerTheme: DefaultTheme) => DefaultTheme)
) {
  return (
    <React.Fragment>
      <ThemeProvider theme={value}>
        {/* <ThemeProvider theme={theme}> */}
        <AppBar sx={{ "background-image": "linear-gradient(to right, #040f41 15%, #0e679d 90%)" }}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "1vh" }}
          >
            <Grid item>
              <Box
                id="727"
                component="img"
                display={"flex"}
                sx={{
                  height: 165,
                  width: 1000,
                  m: -5.1,
                  p: -1,
                  maxHeight: { xs: 300, md: 300 },
                  maxWidth: { xs: 3000, md: 3000 },
                }}
                alt="Nothing"
                src="src/components/NavBar/image/nkbanner5.png"
              ></Box>
            </Grid>
          </Grid>
        </AppBar>
        {/* </ThemeProvider> */}
      </ThemeProvider>
    </React.Fragment>
  );
}


