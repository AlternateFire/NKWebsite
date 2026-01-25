// src/Pages/AboutPage/components/AboutPage.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import AboutPageContent from "./AboutPageContent";

const AboutPage = () => {
	return (
		<div>
			<Box // going forward: Stop adding fixed positions, use more responsive design logic
				sx={{
					height: "100vh",
					display: "flex",
					flexDirection: "column", // Stack components vertically// Center horizontally
					justifyContent: "flex-start", // Center vertically
					paddingBottom: { xs: "100px", sm: "120px", md: "140px" },
					boxSizing: "border-box",
					position: "relative",
					zIndex: 2,
				}}
			>
				<AboutPageContent />
			</Box>
		</div>
	);
};

export default AboutPage;
