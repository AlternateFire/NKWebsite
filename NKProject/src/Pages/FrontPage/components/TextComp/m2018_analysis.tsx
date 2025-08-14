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
        alignContent: "top",
        justifyContent: "center",
        boxSizing: "border-box",
        marginTop: "200px",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          maxWidth: "810px",
          textAlign: "left",
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

        <Typography
          variant="body1"
          gutterBottom
          sx={{ padding: "10px", margin: 0 }}
        >
          {m2018_text.home.sub_text_title}
        </Typography>

        <Box
          component="img"
          sx={{
            justifyContent: "center",
            textAlign: "center",
            height: 550,
            width: 810,
          }}
          src="src/Pages/FrontPage/components/TextComp/ImagesComp/m2018_parade.jpg"
        />
      </Box>
    </Box>
  );
}
