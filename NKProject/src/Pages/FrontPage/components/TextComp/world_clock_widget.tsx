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
        display: "flex",
        alignContent: "top",
        justifyContent: "left",
        padding: "10px",
        boxSizing: "border-box",
      }}>
      <CssBaseline />
      <Typography variant="body1" sx={{ color: "primary.main" }}>
        {time.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour12: true,
        })}
        {" - New York Time"}
      </Typography>
    </Box>
  )
}