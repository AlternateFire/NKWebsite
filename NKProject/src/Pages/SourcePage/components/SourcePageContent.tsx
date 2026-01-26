import {
	Box,
	Typography,
	CssBaseline,
	Divider,
	Stack,
	List,
} from "@mui/material";

import { SourcePageText } from "./SourcePageText";

const itemList = [
	SourcePageText.sources.item_1,
	SourcePageText.sources.item_2,
	SourcePageText.sources.item_3,
	SourcePageText.sources.item_4
]

export default function SourcePageContent() {
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
					{SourcePageText.about.title}
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
					{SourcePageText.about.body}
				</Typography>
				<br />

				<List>
					{itemList.map((item, index) => (
						<List key={index}>
							<Typography
								variant="body1"
								gutterBottom
								sx={{ padding: "10px", margin: 0 }}
							>
								{item}
							</Typography>
						</List>
					))}
				</List>
			</Box>
		</Stack>
	);
}
