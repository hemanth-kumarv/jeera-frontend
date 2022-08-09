import React, { useState } from "react";
import "./SearchBar.scss";
import { ReactComponent as SearchBarIcon } from "../../resources/icons/common/searchIcon.svg";

const SearchBar = (props) => {
    const [isSearchBarActive, setIsSearchBarActive] = useState(false);
    return (
        <div className={`search-bar ${isSearchBarActive ? "search-bar-active" : ""}`}>
            <SearchBarIcon className="searchbar-icon" />
            <input type="text" placeholder="Search" onFocus={() => setIsSearchBarActive(true)} onBlur={() => setIsSearchBarActive(false)} />
        </div>
    );
};

export default SearchBar;
