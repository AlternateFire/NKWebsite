import {
  Box,
  Typography,
  CssBaseline,
  Divider,
  Button,
  Grid,
} from "@mui/material";

import { cheonma_2_text } from "./cheonma2_text";
import ShareIcon from "@mui/icons-material/Share";

export default function Cheonma2Analysis() {
  return (
    <Box
      sx={{
        height: "100vh",
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
          {cheonma_2_text.home.title} - At least 9 built
        </Typography>

        <Divider
          sx={{
            backgroundColor: "primary.main", // Use global theme's primary color
            margin: "10px 0",
            height: "1px",
          }}
        />
        <Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
          {cheonma_2_text.home.sub_text_title}
        </Typography>

        <Box
          component="img"
          sx={{
            justifyContent: "center",
            textAlign: "center",
            height: 330,
            width: 810,
          }}
          src="src/Pages/FrontPage/components/TextComp/ImagesComp/M2020v1.png"
        />

        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", padding: "10px", margin: 0 }}
        >
          {cheonma_2_text.header.subtext_1}
        </Typography>

        <Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
          {cheonma_2_text.body.text_1}
          <br />
          <br />
          {cheonma_2_text.body.text_2}
        </Typography>

        <Typography variant="h3" sx={{ padding: "10px", margin: 0 }}>
          Overview
        </Typography>

        <Box
          component="img"
          sx={{
            justifyContent: "center",
            textAlign: "center",
            height: 430,
            width: 810,
          }}
          src="src/Pages/FrontPage/components/TextComp/ImagesComp/equipment_overview.jpeg"
        />

        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", padding: "10px", margin: 0 }}
        >
          {cheonma_2_text.header.subtext_3}
        </Typography>

        <Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
            {cheonma_2_text.body.text_3}
            <br />
            <br />
            {cheonma_2_text.body.text_5}
        </Typography>

        <Box
          component="img"
          sx={{
            justifyContent: "center",
            textAlign: "center",
            height: 380,
            width: 810,
          }}
          src="src/Pages/FrontPage/components/TextComp/ImagesComp/thermal_sight.jpeg"
        />
        
        <Typography variant="subtitle1" sx={{ textAlign: "center", padding: "10px", margin: 0 }}>
            {cheonma_2_text.header.subtext_2}
        </Typography>
        
        <Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
          hellooooo
        </Typography>
      </Box>
    </Box>
  );
}
