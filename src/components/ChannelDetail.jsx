import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
    const [channelDetail, setchannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
            setchannelDetail(data?.items[0])
        );
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => setVideos(data?.items)
        );
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(9,120,121,1) 53%, rgba(0,212,255,1) 100%)",
                        zIndex: 10,
                        height: "300px",
                    }}
                />
                {channelDetail && (
                    <ChannelCard
                        channelDetail={channelDetail}
                        marginTop="-120px"
                    />
                )}
            </Box>
            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: "100px" } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    );
};

export default ChannelDetail;
