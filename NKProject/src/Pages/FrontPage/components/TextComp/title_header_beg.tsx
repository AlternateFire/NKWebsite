import { Box, Typography, CssBaseline, Divider, Button, Grid } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import WorldClockWidget from "./world_clock_widget";

const textHeader = `Analyzing North Korea's Mechanized Vehicles from 2020-2024`;
const subTextHeader =
  `This website aims to explore and analyze a selection of the DPRK's mechanized vehicles showcased during their most recent military parades (2020–2024). 
This short article seeks to shed light on their strategic significance and technological advancements.
This project is an experiment with front-end development skills.`;

export default function HomePageText() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignContent: "top",
        justifyContent: "center",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <CssBaseline />

      {/* <Box
        sx={{
          position: "absolute",
          top: 0, // adjust as needed
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2, // higher than the rest of the content
        }}
      >
        <WorldClockWidget />
      </Box> */}

      
      <Box
        sx={{
          maxWidth: "800px",
          textAlign: "left",
          margin: "0 auto",
          color: "primary.main", // Use the global theme's primary color
        }}
      >
        <Typography variant="h1" gutterBottom sx={{padding: "10px", margin: 0 }}>
          {textHeader}
        </Typography>

        <WorldClockWidget />

        <Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
          {subTextHeader}
        </Typography>

        {/* Divider line */}
        <Divider
          sx={{
            backgroundColor: "primary.main", // Use global theme's primary color
            margin: "10px 0",
            height: "1px",
          }}
        />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
              {"All credit: AlternateFire"}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-end">
            <Button
              style={{ maxWidth: "40px", minWidth: "40px" }}
              sx={{
                color: "white",
                "& .MuiButton-startIcon": {
                  margin: 0,
                },
                "& .MuiSvgIcon-root": {
                  fontSize: 30,
                },
                "&:hover": {
                  color: "#00a0ff",
                },
              }}
              startIcon={<ShareIcon />}
              href="https://github.com/" /* Update with actual link */
              target="_blank"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
