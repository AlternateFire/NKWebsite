import {
	Box,
	Typography,
	CssBaseline,
	Divider,
	Button,
	Grid,
	TextField,
	Stack,
	CircularProgress,
} from "@mui/material";

import { useState, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactPageText } from "./ContactPageText";
import {
	ContactFormData,
	validationSchema,
	sendEmailService,
} from "./ContactService";

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
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [success, setSuccess] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit: SubmitHandler<ContactFormData> = useCallback(
		async (data) => {
			setIsSubmitting(true);
			setSuccess(false);
			try {
				await sendEmailService(data);
				setSuccess(true);
				reset();
				setTimeout(() => setSuccess(false), 5000);
			} catch (error) {
				console.error("Submission failed:", error);
				alert("Failed to send message. Please try again later.");
			} finally {
				setIsSubmitting(false);
			}
		},
		[reset],
	);

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
					onSubmit={handleSubmit(onSubmit)}
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
							// name="name"
							label="Name"
							variant="outlined"
							required
							fullWidth
							error={!!errors.name}
							helperText={errors.name?.message}
							sx={commonStyle}
							{...register("name")}
						/>
						<TextField
							// name="email"
							label="Email"
							variant="outlined"
							required
							fullWidth
							error={!!errors.email}
							helperText={errors.email?.message}
							sx={commonStyle}
							{...register("email")}
						/>
					</Stack>

					<Stack spacing={2} sx={{ width: "100%" }}>
						<TextField
							// name="message"
							label="Message"
							variant="outlined"
							multiline
							rows={6}
							required
							fullWidth
							error={!!errors.message}
							helperText={errors.message?.message}
							sx={commonStyle}
							{...register("message")}
						/>
						<Button
							type="submit"
							variant="contained"
							size="large"
							disabled={isSubmitting}
							sx={{
								backgroundColor: hoverColor,
								color: "white",
								width: "100%",
								"&:hover": {
									backgroundColor: isSubmitting ? hoverColor : "#007acc",
								},
							}}
						>
							{isSubmitting ? (
								<CircularProgress size={24} sx={{ color: "white" }} />
							) : (
								"Send Message"
							)}
						</Button>
					</Stack>
				</Box>
			</Box>
		</Stack>
	);
}
