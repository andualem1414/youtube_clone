import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
    const [searchTerm, setsearchTerm] = useState("");

    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setsearchTerm("");
        }
    };

    return (
        <Paper
            component="form"
            background="#0E2237"
            onSubmit={handelSubmit}
            sx={{
                borderRadius: 20,
                boarder: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: "none",
                mr: { sm: 2.6 },
            }}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => {
                    setsearchTerm(e.target.value);
                }}
            />
            <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
