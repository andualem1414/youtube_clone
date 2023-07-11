import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
    const [videoDetail, setvideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        fetchFromAPI(`/videos?part=snipppet,statistics&id=${id}`).then((data) =>
            setvideoDetail(data.items[0])
        );
        fetchFromAPI(
            `/search?part=snipppet&relatedToVideoId=${id}&type=video`
        ).then((data) => setVideos(data.items));
    }, [id]);

    if (!videoDetail) return "Loading...";

    const {
        snippet: { title, channelId, channelTitle },
        statistics: { viewCount, likeCount },
    } = videoDetail;

    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: "column", md: "row" }}>
                <Box flex={1}>
                    <Box
                        sx={{ width: "100%", position: "sticky", top: "86px" }}
                    >
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player"
                            controls
                        />
                        <Typography
                            color="#fff"
                            fontWeight="bold"
                            p={2}
                            varient="h5"
                        >
                            {title}
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ color: "#fff" }}
                            py={1}
                            px={2}
                        >
                            <Link to={`/channel/${channelId}`}>
                                <Typography
                                    variant={{ sm: "subtitle1", md: "h6" }}
                                >
                                    {channelTitle}
                                    <CheckCircle
                                        sx={{
                                            fontSize: "12px",
                                            color: "gray",
                                            ml: "12px",
                                        }}
                                    />
                                </Typography>
                                <Stack
                                    direction="row"
                                    gap="20px"
                                    alignItems="center"
                                >
                                    <Typography
                                        varient="body1"
                                        sx={{ opacity: 0.7 }}
                                    >
                                        {parseInt(viewCount).toLocaleString()}{" "}
                                        views
                                    </Typography>
                                    <Typography
                                        varient="body1"
                                        sx={{ opacity: 0.7 }}
                                    >
                                        {parseInt(likeCount).toLocaleString()}{" "}
                                        likes
                                    </Typography>
                                </Stack>
                            </Link>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    px={2}
                    py={{ md: 1, xs: 5 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetail;
