import {
	Box,
	Typography,
	CssBaseline,
	Divider,
	Stack,
} from "@mui/material";

import { AboutPageText } from "./AboutPageText";
import KimSimle from "/images/kimjongun_smile.webp";

export default function AboutPageContent() {
	return (
		<Stack
			spacing={2}
			direction="column"
			alignItems="center"
			sx={{
				display: "flex",
				alignContent: "top",
				boxSizing: "border-box",
				marginTop: "150px",
				color: "primary.main",
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
					{AboutPageText.about.title}
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
					{AboutPageText.about.body}
				</Typography>
				<br />
			</Box>

			<Typography variant="h4" gutterBottom sx={{ padding: "10px", margin: 0 }}>
				{AboutPageText.closing.title}
			</Typography>
			{/* margin: "0 auto", p: 3, border: 2, borderRadius: '15px' */}
			<Box
				component="img"
				sx={{
					justifyContent: "center",
					margin: "0 auto",
					border: 2,
					borderRadius: "20px",
					textAlign: "center",
					height: "auto",
					width: 810,
				}}
				src={KimSimle}
				alt="Kim Jong-un smiling"
			/>
		</Stack>
	);
}
