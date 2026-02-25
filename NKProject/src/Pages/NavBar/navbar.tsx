import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";
import BannerImage from "./image/nkbanner5.png"

const APPBAR_HEIGHT = 81;

export default function NavBar() {
	const navigate = useNavigate();

	return (
		<React.Fragment>
			<AppBar
				sx={{
					backgroundImage:
						"linear-gradient(to right, #040f41 15%, #0e679d 90%)",
					padding: "0 20px",
					position: "fixed",
					height: `${APPBAR_HEIGHT}px`,
					justifyContent: "center",
				}}
			>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between"
					sx={{ minHeight: "70px" }}
				>
					{/* Left: GitHub, About, Sources */}
					<Grid item xs={3} display="flex" justifyContent="flex-start">
						{/* GitHub */}
						<Box>
							<Button
								sx={{
									width: "45px",
									height: "45px",
									color: "white",
									"& .MuiButton-startIcon": { margin: 0 },
									"& .MuiSvgIcon-root": {
										fontSize: "31px !important",
									},
									"&:hover": { color: "#00a0ff" },
								}}
								startIcon={<GitHubIcon />}
								href="https://github.com/AlternateFire"
								target="_blank"
							/>
						</Box>

						{/* About */}
						<Button
							variant="text"
							sx={{
								ml: 2,
								textTransform: "uppercase",
								fontWeight: "bold",
								color: "white",
								"&:hover": { color: "#00a0ff" },
							}}
							onClick={() => navigate("about")}
						>
							<Typography variant="subtitle1" sx={{ fontWeight: "thin" }}>
								About
							</Typography>
						</Button>

						{/* Sources */}
						<Button
							variant="text"
							sx={{
								ml: 2,
								textTransform: "uppercase",
								fontWeight: "bold",
								color: "white",
								"&:hover": { color: "#00a0ff" },
							}}
							onClick={() => navigate("sources")}
						>
							<Typography variant="subtitle1" sx={{ fontWeight: "thin" }}>
								Sources
							</Typography>
						</Button>

						<Button
							variant="text"
							sx={{
								ml: 2,
								textTransform: "uppercase",
								fontWeight: "bold",
								color: "white",
								"&:hover": { color: "#00a0ff" },
							}}
							onClick={() => navigate("contact")}
						>
							<Typography variant="subtitle1" sx={{ fontWeight: "thin" }}>
								Contact
							</Typography>
						</Button>
					</Grid>

					{/* Center: Banner */}
					<Grid item xs={2} display="flex" justifyContent="center">
						<Box
							component="img"
							sx={{
								alignContent: "center",
								height: 165,
								width: 1000,
								m: -5.1,
								p: -1,
								maxHeight: { xs: 300, md: 300 },
								maxWidth: { xs: 3000, md: 3000 },
							}}
							src={BannerImage}
							alt="Banner"
						/>
					</Grid>

					{/* Right: Contact */}
					<Grid item xs={3} display="flex" justifyContent="flex-end">
						{/* <Button
              variant="text"
              sx={{
                ml: 2,
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "white",
                "&:hover": { color: "#00a0ff" },
              }}
              onClick={() => navigate("/contact")}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "thin" }}>
                Contact
              </Typography>
            </Button> */}
						{/* Icon return */}
						<Button
							variant="text"
							sx={{
								ml: 2,
								width: "45px",
								height: "45px",
								color: "white",
								"& .MuiButton-startIcon": { margin: 0 },
								"& .MuiSvgIcon-root": {
									fontSize: "31px !important",
								},
								"&:hover": { color: "#00a0ff" },
							}}
							startIcon={<HomeIcon />}
							onClick={() => navigate("home")}
						></Button>
					</Grid>
				</Grid>
			</AppBar>
		</React.Fragment>
	);
}
