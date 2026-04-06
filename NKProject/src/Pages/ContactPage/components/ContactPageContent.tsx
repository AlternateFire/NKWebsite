import {
	Box,
	Typography,
	CssBaseline,
	Divider,
	Button,
	Stack,
} from "@mui/material";

import { ContactPageText } from "./ContactPageText";

const hoverColor = "#00a0ff";

export default function ContactPageContent() {
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
					gap: 3,
					borderRadius: 2,
				}}
			>
				<Typography
					variant="h3"
					gutterBottom
					sx={{ padding: "10px", margin: 0 }}
				>
					{ContactPageText.contact.title}
				</Typography>

				<Divider
					sx={{
						backgroundColor: "primary.main",
						margin: "10px 0",
						height: "1px",
					}}
				/>

				<Typography
					variant="body1"
					gutterBottom
					sx={{ padding: "10px", margin: 0 }}
				>
					{ContactPageText.contact.body}
				</Typography>
				<br />

				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						mt: 0,
					}}
				>
					<Button
						variant="contained"
						size="large"
						component="a"
						href="mailto:yseunghan34@gmail.com?subject=Contact from website"
						sx={{
							backgroundColor: hoverColor,
							color: "white",
							"&:hover": {
								backgroundColor: "#007acc",
							},
						}}
					>
						Email me
					</Button>
				</Box>
			</Box>
		</Stack>
	);
}
