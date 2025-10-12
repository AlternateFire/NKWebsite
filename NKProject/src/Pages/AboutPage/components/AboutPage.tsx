// src/Pages/AboutPage/components/AboutPage.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ display: "flex",
        alignContent: "top",
        justifyContent: "center",
        boxSizing: "border-box",
        }}>

      <Typography variant="h3" sx={{ mb: 2 }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "800px", margin: "0 auto" }}>
        This is where you describe your project, goals, or team.
      </Typography>
    </Box>
  );
}
