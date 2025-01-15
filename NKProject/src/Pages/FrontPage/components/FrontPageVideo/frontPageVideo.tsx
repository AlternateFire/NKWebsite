import './frontPageVideo.css'
import { CardMedia } from "@mui/material";

export default function BackgroundVideo() {
    return (
        <CardMedia component={"video"}
        src={"src/Pages/FrontPage/components/FrontPageVideo/Video/frontVideo.mp4"}
        autoPlay
        loop
        muted
        sx={{
            filter: "brightness(10%)",
        }}
        >
        </CardMedia>
    );
}
