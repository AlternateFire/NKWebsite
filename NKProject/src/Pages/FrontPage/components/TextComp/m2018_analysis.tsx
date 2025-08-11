import {
  Box,
  Typography,
  CssBaseline,
  Divider,
  Button,
  Grid,
} from "@mui/material";

import { m2018_text } from "./m2018_text";

export default function M2018Analysis() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "top",
                justifyContent: "center",
                boxSizing: "border-box",
                marginTop: "150px",
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
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ padding: "10px", margin: 0 }}
                >
                  {m2018_text.home.title} 
                </Typography>
                <Divider
                    sx={{
                    backgroundColor: "primary.main", // Use global theme's primary color
                    margin: "10px 0",
                    height: "1px",
                }}
                />
            </Box>    
        </Box>
    ); 
}