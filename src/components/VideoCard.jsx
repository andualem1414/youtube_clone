import { Typography, Card, CardContent, CardMedia } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";

import {
    demoThumbnailUrl,
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
    demoChannelTitle,
} from "../utils/constants";

import { Link } from "react-router-dom";

const VideoCard = ({
    video: {
        id: { videoId },
        snippet,
    },
}) => {
    return (
        <Card
            sx={{
                width: { md: "320px", xs: "100%" },
                boxShadow: "none",
                borderRadius: "20px",
                border: "none",
            }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: 358, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: "#072440", height: "106px" }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography
                        variant="subtitile1"
                        fontWeight="bold"
                        color="#fff"
                    >
                        {snippet?.title.slice(0, 60) || demoVideoTitle}
                    </Typography>
                </Link>
                <br />
                <Link
                    to={
                        snippet?.channelId
                            ? `/channel/${snippet?.channelId}`
                            : demoChannelUrl
                    }
                >
                    <Typography
                        variant="subtitile1"
                        fontWeight="bold"
                        color="gray"
                    >
                        {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
                        <CheckCircle
                            sx={{ fontsize: 12, color: "gray", ml: "5px" }}
                        />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
