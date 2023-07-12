import { Box, Typography, CardContent, CardMedia } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import {
    demoProfilePicture,
    demoChannelUrl,
    demoChannelTitle,
} from "../utils/constants";

const ChannelCard = ({ channelDetail: { snippet, statistics }, marginTop }) => {
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "356px", md: "320px" },
                height: "356px",
                marginTop: marginTop,
            }}
        >
            <Link
                to={
                    snippet?.channelId
                        ? `/channel/${snippet?.channelId}`
                        : demoChannelUrl
                }
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        color: "#fff",
                    }}
                >
                    <CardMedia
                        image={
                            snippet?.thumbnails?.high?.url || demoProfilePicture
                        }
                        alt={snippet?.title}
                        sx={{
                            borderRadius: "50%",
                            width: "180px",
                            height: "180px",
                        }}
                    />
                    <Link
                        to={
                            snippet?.channelId
                                ? `/channel/${snippet?.channelId}`
                                : demoChannelUrl
                        }
                    >
                        <Typography variant="h6" fontWeight="bold" color="gray">
                            {snippet?.channelTitle?.slice(0, 60) ||
                                demoChannelTitle}
                            <CheckCircle
                                sx={{ fontsize: 11, color: "gray", ml: "5px" }}
                            />
                        </Typography>
                        {statistics?.subscriberCount && (
                            <Typography
                                variant="subtitle"
                                fontWeight="bold"
                                color="white"
                            >
                                {parseInt(
                                    statistics?.subscriberCount
                                ).toLocaleString()}{" "}
                                Subscribers
                            </Typography>
                        )}
                    </Link>
                </CardContent>
            </Link>
        </Box>
    );
};

export default ChannelCard;
