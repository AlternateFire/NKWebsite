import {
	Box,
	Typography,
	CssBaseline,
	Divider,
	Button,
	Grid,
	TextField,
	Stack,
} from "@mui/material";

import React, { useState } from "react";
import { ContactPageText } from "./ContactPageText";

const hoverColor = "#00a0ff";
const defaultColor = "#ffffff";

const commonStyle = {
	length: "auto",
	"& .MuiInputLabel-root": {
		color: defaultColor,
	},
	"& .MuiInputLabel-root.Mui-focused": {
		color: hoverColor,
	},
	"& .MuiOutlinedInput-root": {
		color: defaultColor,
		"& fieldset": {
			borderColor: defaultColor,
		},
		"&:hover fieldset": {
			borderColor: hoverColor,
		},
		"&.Mui-focused fieldset": {
			borderColor: hoverColor,
		},
	},
};

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
					{ContactPageText.contact.body}
				</Typography>
				<br />

				<Box
					component="form"
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 2,
						width: "100%",
						mt: 3,
					}}
					noValidate
					autoComplete="off"
				>
					<Stack
						direction={{ xs: "column", sm: "row" }}
						spacing={2}
						sx={{ width: "100%" }}
					>
						<TextField
							name="name"
							label="Name"
							variant="outlined"
							required
							fullWidth
							sx={commonStyle}
						/>
						<TextField
							name="email"
							label="Email"
							variant="outlined"
							required
							fullWidth
							sx={commonStyle}
						/>
					</Stack>

					<Stack spacing={2} sx={{ width: "100%" }}>
						<TextField
							name="message"
							label="Message"
							variant="outlined"
							multiline
							rows={6}
							required
							sx={commonStyle}
						/>
						<Button
							variant="contained"
							size="large"
							sx={{
								mt: 2,
								backgroundColor: hoverColor,
								color: "white",
								marginTop: "10px",
								marginBottom: "10px",
								width: "100%",
								"&:hover": {
									backgroundColor: "#007acc", // Slightly darker blue on button hover
								},
							}}
						>
							Send
						</Button>
					</Stack>
				</Box>
			</Box>
		</Stack>
	);
}
