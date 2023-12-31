import { Typography, Card, CardContent, CardMedia } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";

import {
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
                width: { xs: "100%", sm: "338px", md: "300px" },
                boxShadow: "none",
                borderRadius: "20px",
                border: "none",
            }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{
                        width: { xs: "100%", sm: "358px", md: "320px" },
                        height: 180,
                    }}
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
                            sx={{
                                fontSize: 11,
                                color: "gray",
                                mt: "20px",
                                ml: "5px",
                            }}
                        />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
