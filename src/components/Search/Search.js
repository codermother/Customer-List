import React, { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";

function Search() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="container">
      <div className="d-flex align-items-center search mb-0">
        <SearchIcon className="position-absolute search-icon" />
        <input
          type="search"
          className="bg-transparent search-bar "
          placeholder="SEARCH (Client Name / Policy Number"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <SearchResults searchText={searchText} />
    </div>
  );
}

export default Search;
