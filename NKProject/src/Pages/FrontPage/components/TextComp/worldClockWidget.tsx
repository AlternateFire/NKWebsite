import { useState, useEffect } from "react";
import { Box, CssBaseline, Typography } from "@mui/material";

export default function WorldClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "top",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      
      <CssBaseline />
      <Box
        sx={{
          maxWidth: "800px",
          textAlign: "left",
          margin: "0 auto",
          color: "primary.main",
        }}
      >       
      <Typography variant="body1" sx={{ color: "primary.main", marginRight: "10px" }}>
        Current time in:
      </Typography>

      {/* "New York" */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          color: "primary.main", // Use primary color from global theme
          marginRight: "10px",
        }}
      >
        New York
      </Typography>

      {/* Time in New York */}
      <Typography variant="body1"
        sx={{ color: "primary.main" }}
      >
        {time.toLocaleString("en-US", {
          timeZone: "America/New_York",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </Typography>
      </Box>  
    </Box>
  );
}
