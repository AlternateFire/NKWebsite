import React from "react";
import { Box, Typography } from "@mui/material";

export default function ContactPage() {
  return (
    <Box sx={{ paddingTop: "120px", textAlign: "center" }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "800px", margin: "0 auto" }}>
        This is where you describe your project, goals, or team.
      </Typography>
    </Box>
  );
}
