import {
	Box,
	Typography,
	CssBaseline,
	Divider,
	Button,
	Grid,
} from "@mui/material";

import { hwasong_18_text } from "./hwasong_18_text";
import { Css } from "@mui/icons-material";

export default function Hwasong18Analysis() {
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
					{hwasong_18_text.home.title}
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
					{hwasong_18_text.home.sub_text_title}
				</Typography>

				<Box
					component="img"
					sx={{
						justifyContent: "center",
						textAlign: "center",
						border: 2,
						borderRadius: "20px",
						height: 550,
						width: 810,
					}}
					src="src/Pages/FrontPage/components/TextComp/ImagesComp/hwasong18.jpg"
				/>

				<Typography
					variant="body1"
					gutterBottom
					sx={{ padding: "10px", margin: 0 }}
				>
					{hwasong_18_text.home.sub_text_1}
					<br />
					<br />
					{hwasong_18_text.home.sub_text_2}
				</Typography>
			</Box>
		</Box>
	);
}
