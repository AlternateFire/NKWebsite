import "./frontPageVideo.css";
import { CardMedia } from "@mui/material";
import video from "./Video/frontVideo.mp4";

export default function BackgroundVideo() {
	return (
		<CardMedia
			component={"video"}
			src={video}
			autoPlay
			loop
			muted
			sx={{
				position: "fixed",
				width: "100%",
				height: "100%",
				filter: "brightness(15%)",
				zIndex: 0,
			}}
		></CardMedia>
	);
}
