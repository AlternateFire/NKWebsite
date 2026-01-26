import { Box } from "@mui/material";
import HomePageText from "./TextComp/title_header_beg";
import Cheonma2Analysis from "./TextComp/cheonma_2_analysis";
import M2018Analysis from "./TextComp/m2018_analysis";
import Hwasong18Analysis from "./TextComp/hwasong_18_analysis";

const FrontPage = () => {
	return (
		<div>
			<Box // going forward: Stop adding fixed positions, use more responsive design logic
				sx={{
					height: "100vh",
					display: "flex",
					flexDirection: "column", // Stack components vertically// Center horizontally
					justifyContent: "flex-start", // Center vertically
					paddingTop: { xs: "100px", sm: "120px", md: "140px" },
					paddingBottom: { xs: "100px", sm: "120px", md: "140px" },
					boxSizing: "border-box",
					position: "relative",
					zIndex: 2,
				}}
			>
				<HomePageText />
				<Cheonma2Analysis />
				<M2018Analysis />
				<Hwasong18Analysis />
			</Box>
		</div>
	);
};

export default FrontPage;
