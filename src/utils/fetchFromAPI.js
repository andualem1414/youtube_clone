import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    url: BASE_URL,
    params: {
        maxResults: "49",
    },
    headers: {
        "X-RapidAPI-Key": "d99e122a2cmshe9b24bfffd1ab27p1636a0jsn18e0e4b143c6",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};
