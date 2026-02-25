import { Box, Typography, Divider, Grid, Stack } from "@mui/material";

import { cheonma_2_text } from "./cheonma2_text";
import ImageSlider from "./image_slider";

import M2020RearView from "/images/m2020_rearview_firing.jpeg";
import M2020Equipment from "/images/equipment_overview.jpeg";
import M2020ThermalSight from "/images/thermal_sight.jpeg";
import M2020ThermalSightV2 from "/images/m2020_thermal_sight.png";
import TurretAnalysis from "/images/turret_analysis.jpeg";
import M2020APFSDS1 from "/images/m2020_apfsds_1.png";
import M2020APFSDS2 from "/images/m2020_apfsds_top_2.png";
import M2020APS from "/images/M2020_APS.gif";
import M2020Chonma216 from "/images/m2020_chonma216_example_LWS.jpeg";
import M2020AGSLauncher from "/images/M2020_ags_launcher.jpeg";

export default function Cheonma2Analysis() {
	return (
		<Box
			sx={{
				display: "flex",
				alignContent: "top",
				justifyContent: "center",
				padding: "10px",
				boxSizing: "border-box",
				marginTop: "200px",
			}}
		>
			<Box
				sx={{
					maxWidth: "810px",
					textAlign: "left",
					margin: "0 auto",
					color: "primary.main",
				}}
			>
				<Typography
					variant="h2"
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

				<ImageSlider />
				{/* <Box */}
				{/* component="img" */}
				{/* sx={{ */}
				{/* justifyContent: "center", */}
				{/* textAlign: "center", */}
				{/* height: 330, */}
				{/* width: 810, */}
				{/* }} */}
				{/* src="src/Pages/FrontPage/components/TextComp/ImagesComp/M2020v1.png" */}
				{/* /> */}

				<Typography
					variant="subtitle1"
					sx={{ textAlign: "center", padding: "10px", margin: 0 }}
				>
					{cheonma_2_text.header.subtext_1}
				</Typography>
				<br />
				<Box
					component="img"
					sx={{
						justifyContent: "center",
						margin: "0 auto",
						border: 2,
						borderRadius: "20px",
						textAlign: "center",
						height: 550,
						width: 810,
					}}
					src={M2020RearView}
					alt="M2020 Rear View"
				/>

				<Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
					{cheonma_2_text.body.text_1}
					<br />
					<br />
					{cheonma_2_text.body.text_2}
				</Typography>

				<Typography variant="h2" sx={{ padding: "10px", margin: 0 }}>
					Overview
				</Typography>

				<Box
					component="img"
					sx={{
						justifyContent: "center",
						textAlign: "center",
						margin: "0 auto",
						border: 2,
						borderRadius: "20px",
						height: 450,
						width: 810,
					}}
					src={M2020Equipment}
					alt="M2020 Equipment"
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

				<Typography variant="h3" sx={{ padding: "10px", margin: 0 }}>
					Thermal Sights
				</Typography>

				<Box // Thermal Sights Section
					component="img"
					sx={{
						justifyContent: "center",
						textAlign: "center",
						border: 2,
						borderRadius: "20px",
						margin: "0 auto",
						height: "auto",
						width: 810,
					}}
					src={M2020ThermalSight}
					alt="Thermal Sights"
				/>

				<Typography
					variant="subtitle1"
					sx={{ textAlign: "center", padding: "10px", margin: 0 }}
				>
					{cheonma_2_text.header.subtext_2}
				</Typography>

				<Grid
					container
					spacing={2}
					justifyContent="center "
					alignItems="center"
					sx={{ marginTop: "10px", marginBottom: "10px" }}
				>
					<Box
						component="img"
						sx={{
							textAlign: "center",
							border: 2,
							borderRadius: "20px",
							margin: "0 auto",
							height: "auto",
							width: 350,
						}}
						src={M2020ThermalSightV2}
						alt="Thermal sight 2"
					/>
				</Grid>

				<Typography
					variant="subtitle1"
					sx={{ textAlign: "center", padding: "10px", margin: 0 }}
				>
					{cheonma_2_text.header.subtext_4}
				</Typography>

				<Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
					{cheonma_2_text.body.text_5}
				</Typography>

				<Typography variant="h3" sx={{ padding: "10px", margin: 0 }}>
					Turret
				</Typography>

				<Box // Turret Analysis
					component="img"
					sx={{
						justifyContent: "center",
						textAlign: "center",
						border: 2,
						borderRadius: "20px",
						margin: "0 auto",
						height: "auto",
						width: 810,
					}}
					src={TurretAnalysis}
					alt="M2020 Turret Analysis"
				/>

				<Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
					{cheonma_2_text.body.text_5}
				</Typography>

				<Stack direction="row" spacing={2} padding="10px">
					<Box
						component="img"
						sx={{
							justifyContent: "center",
							textAlign: "center",
							border: 2,
							borderRadius: "20px",
							margin: "0 auto",
							height: "auto",
							width: 410,
						}}
						src={M2020APFSDS1}
						alt="M2020 APFSDS Rounds"
					/>

					<Box
						component="img"
						sx={{
							justifyContent: "center",
							textAlign: "center",
							border: 2,
							borderRadius: "20px",
							margin: "0 auto",
							height: "auto",
							width: 410,
						}}
						src={M2020APFSDS2}
						alt="M2020 APFSDS Top View"
					/>
				</Stack>

				<Typography
					variant="subtitle1"
					sx={{ textAlign: "center", padding: "10px", margin: 0 }}
				>
					{cheonma_2_text.header.subtext_5}
				</Typography>

				<Stack
					direction="column"
					spacing={2}
					alignItems="center"
					padding="10px"
				>
					<Box
						component="img"
						sx={{
							justifyContent: "center",
							textAlign: "center",
							border: 2,
							borderRadius: "20px",
							margin: "0 auto",
							height: "auto",
							width: 700,
						}}
						src={M2020APS}
						alt="M2020 Active Protection System"
					/>
				</Stack>

				<Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
					{cheonma_2_text.body.text_7}
				</Typography>

				<Box
					component="img"
					sx={{
						justifyContent: "center",
						textAlign: "center",
						border: 2,
						borderRadius: "20px",
						margin: "0 auto",
						height: "auto",
						width: 810,
					}}
					src={M2020Chonma216}
					alt="M2020 Chonma-216 Example"
				/>

				<Typography
					variant="subtitle1"
					sx={{ textAlign: "center", padding: "10px", margin: 0 }}
				>
					{cheonma_2_text.header.subtext_7}
				</Typography>

				<Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
					{cheonma_2_text.body.text_8}
				</Typography>

				<Typography variant="h4" sx={{ padding: "10px", margin: 0 }}>
					Hull, Engine, And Running Gear
				</Typography>

				<Box
					component="img"
					sx={{
						justifyContent: "center",
						textAlign: "center",
						border: 2,
						borderRadius: "20px",
						margin: "0 auto",
						height: "auto",
						width: 810,
					}}
					src={M2020AGSLauncher}
					alt="M2020 AGS Launcher"
				/>

				<Typography
					variant="subtitle1"
					sx={{ textAlign: "center", padding: "10px", margin: 0 }}
				>
					{cheonma_2_text.header.subtext_6}
				</Typography>

				<Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
					{cheonma_2_text.body.text_9}
				</Typography>

				<Typography variant="body1" sx={{ padding: "10px", margin: 0 }}>
					{cheonma_2_text.body.text_10}
				</Typography>
			</Box>
		</Box>
	);
}
