import './frontPageVideo.css'
import { CardMedia, createTheme, makeStyles} from "@mui/material";

export default function BackgroundVideo() {
    return (
        <CardMedia component={"video"}
        src={"src/components/FrontPageVideo/Video/frontVideo.mp4"}
        autoPlay
        loop
        muted
        sx={{
            filter: "brightness(50%)",
        }}
        >
        </CardMedia>
    );
}