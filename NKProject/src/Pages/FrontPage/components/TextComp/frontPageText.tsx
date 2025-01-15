import { Box, Typography, CssBaseline, Divider, Button, Grid } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';

const textHeader = `Analyzing North Korea's Mechanized Forces (2020-2024)`;
const subTextHeader =
  `This website aims to explore and analyze a selection of the DPRK's mechanized vehicles showcased during their most recent military parades (2020–2024). 
The site seeks to shed light on their strategic significance and technological advancements.
This project is an experiment with front-end development skills.`;

export default function HomePageText() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        margin: "150px",
        alignItems: "top",
        justifyContent: "center",
        padding: "10px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <CssBaseline />

      <Box
        sx={{
          maxWidth: "800px",
          textAlign: "left",
          margin: "0 auto",
          color: "primary.main", // Use the global theme's primary color
        }}
      >
        <Typography variant="h1" gutterBottom sx={{ padding: "10px", margin: 0 }}>
          {textHeader}
        </Typography>

        <Typography variant="subtitle1" sx={{ padding: "10px", margin: 0 }}>
          {subTextHeader}
        </Typography>

        {/* Divider line */}
        <Divider
          sx={{
            backgroundColor: "primary.main", // Use global theme's primary color
            margin: "15px 0",
            height: "1px",
          }}
        />

        <Grid item xs={2} display="flex" justifyContent="left">
          <Typography variant="subtitle1" sx={{ padding: "10px", margin: 0 }}>
            {"All credit: AlternateFire"}
          </Typography>

          <Button
            style={{ maxWidth: "40px", minWidth: "40px" }}
            sx={{
              color: "white",

              "& .MuiButton-startIcon": {
                margin: 0, // Ensures the Share icon is centered
              },
              "& .MuiSvgIcon-root": {
                fontSize: 30, // Adjust the size of the Share icon
              },
              "&:hover": {
                color: "#00a0ff",
              }
            }}
            startIcon={<ShareIcon />}
            href="https://github.com/" /* TODO: Temporary, change later */
            target="_blank"
          />
        </Grid>
      </Box>
    </Box>
  );
}
