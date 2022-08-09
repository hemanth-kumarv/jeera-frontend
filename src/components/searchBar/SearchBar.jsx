import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import { ReactComponent as SearchBarIcon } from "../../resources/icons/common/searchIcon.svg";

const SearchBar = (props) => {
    const [isSearchBarActive, setIsSearchBarActive] = useState(false);
    return (
        <div className={`${styles["search-bar"]} ${isSearchBarActive ? styles["search-bar-active"] : ""}`}>
            <SearchBarIcon className={styles["searchbar-icon"]} />
            <input type="text" placeholder="Search" onFocus={() => setIsSearchBarActive(true)} onBlur={() => setIsSearchBarActive(false)} />
        </div>
    );
};

export default SearchBar;
