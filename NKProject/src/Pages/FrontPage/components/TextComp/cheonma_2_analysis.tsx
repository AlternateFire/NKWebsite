import {
  Box,
  Typography,
  CssBaseline,
  Divider,
  Button,
  Grid,
  Stack,
} from "@mui/material";

import { cheonma_2_text } from "./cheonma2_text";

export default function Cheonma2Analysis() {
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
      <Box
        sx={{
          maxWidth: "810px",
          textAlign: "left",
          paddingLeft: "16px",
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
            height: 460,
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
            {cheonma_2_text.body.text_turret_overview}
            <br />
            <br />
            {cheonma_2_text.body.text_turret_overview_2}
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

        <Grid container spacing={2} justifyContent="center "alignItems="center" sx={{ marginTop: "10px", marginBottom: "10px" }}>
          <Box
            component="img"
            sx={{
              textAlign: "center",
              height: 580,
              width: 350,
            }}
            src="src/Pages/FrontPage/components/TextComp/ImagesComp/m2020_thermal_sight.png"
          />
        </Grid> 

        <Typography variant="subtitle1" sx={{ textAlign: "center", padding: "10px", margin: 0 }}>
          {cheonma_2_text.header.subtext_4}
        </Typography>

        <Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
          {cheonma_2_text.body.text_5}
        </Typography>

        <Box
          component="img"
          sx={{
            justifyContent: "center",
            textAlign: "center",
            height: 500,
            width: 810,
          }}
          src="src/Pages/FrontPage/components/TextComp/ImagesComp/turret_analysis.jpeg"
        />
        
        <Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
          {cheonma_2_text.body.text_5}
        </Typography>

        <Stack direction="row" spacing={2}> 
          <Box
            component="img"
            sx={{
              justifyContent: "center",
              textAlign: "center",
              height: 300,
              width: 410,
            }}
            src="src/Pages/FrontPage/components/TextComp/ImagesComp/m2020_apfsds_1.png"
          />

          <Box
            component="img"
            sx={{
              justifyContent: "center",
              textAlign: "center",
              height: 300,
              width: 410,
            }}
            src="src/Pages/FrontPage/components/TextComp/ImagesComp/m2020_apfsds_top_2.png"
          />
        </Stack>
        
        <Typography variant="subtitle1" sx={{ textAlign: "center", padding: "10px", margin: 0 }}>
          {cheonma_2_text.header.subtext_5}
        </Typography>
      </Box>
    </Box>
  );
}
