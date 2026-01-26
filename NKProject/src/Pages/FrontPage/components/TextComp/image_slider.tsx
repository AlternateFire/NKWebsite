import {
	Box,
	Typography,
	Button,
	MobileStepper,
} from "@mui/material";

import * as React from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";

// Image array
const images = [
	{
		imgPath: "/src/Pages/FrontPage/components/TextComp/ImagesComp/M2020v1.png",
		label: "M2020 Image 1",
	},
	{
		imgPath: "/src/Pages/FrontPage/components/TextComp/ImagesComp/M2020v2.png",
		label: "M2020 Image 2",
	},
	{
		imgPath: "/src/Pages/FrontPage/components/TextComp/ImagesComp/M2020v3.png",
		label: "M2020 Image 3",
	},
];

const imageSteps = images.length;

export default function ImageSlider() {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<Box sx={{ margin: "0 auto", p: 4, border: 2, borderRadius: "20px" }}>
			<Box
				component="img"
				sx={{
					display: "block",
					height: "auto",
					maxWidth: 810,
					// aspectRatio: '5 / 4',
					overflow: "hidden",
					width: "100%",
					objectFit: "cover",
				}}
				src={images[activeStep].imgPath}
				alt={images[activeStep].label}
			/>
			<MobileStepper
				variant="dots"
				steps={imageSteps}
				position="static"
				activeStep={activeStep}
				sx={{
					backgroundColor: "transparent",
					alignItem: "center",
					flexGrow: 1,
				}}
				nextButton={
					<Button
						size="small"
						onClick={handleNext}
						disabled={activeStep === imageSteps - 1}
					>
						<Typography variant="body1">Next</Typography>
						{theme.direction === "rtl" ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === "rtl" ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						<Typography variant="body1">Back</Typography>
					</Button>
				}
			/>
		</Box>
	);
}
