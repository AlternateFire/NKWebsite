import { Box } from "@mui/material";
import SourcePageContent from "./SourcePageContent";

const SourcePage = () => {
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
				<SourcePageContent />
			</Box>
		</div>
	);
};

export default SourcePage;
