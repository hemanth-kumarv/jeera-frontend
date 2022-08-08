import React from "react";
import "./SearchBar.scss";
import { ReactComponent as SearchBarIcon } from "../../resources/icons/common/searchIcon.svg";

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <SearchBarIcon className="searchbar-icon" />
            <input type="text" placeholder="Search" />
        </div>
    );
};

export default SearchBar;
