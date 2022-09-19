import React, { useCallback, useState } from "react";
import styles from "./SearchBar.module.scss";
import { ReactComponent as SearchBarIcon } from "../../resources/icons/common/searchIcon.svg";
import { debounce } from "lodash";

const SearchBar = (props) => {
    const { searchParam, setFilteredData, rawData, placeholder } = props;
    const [isSearchBarActive, setIsSearchBarActive] = useState(false);
    const [searchBarData, setSearchBarData] = useState("");

    const applyFilter = (data, value) =>
        data?.filter((obj) =>
            searchParam
                ?.split(",") // Comma separated list of keys to filter data on
                .reduce(
                    (acc, searchParam) => (String(obj[searchParam]) || "").toLowerCase().includes(value.toLowerCase()) || acc, // Any condition true, return true
                    false
                )
        );

    const debouncer = useCallback(
        debounce((value, list) => {
            setFilteredData?.(applyFilter(list, value)); // Apply filter to update props' state data
        }, 500), // Update filtered data from props after 500ms
        []
    );

    return (
        <div className={`${styles["search-bar"]} ${isSearchBarActive ? styles["search-bar-active"] : ""}`}>
            <SearchBarIcon className={styles["searchbar-icon"]} />
            <input
                type="text"
                placeholder={placeholder || "Search"}
                onFocus={() => setIsSearchBarActive(true)}
                onBlur={() => setIsSearchBarActive(false)}
                value={searchBarData}
                onChange={(e) => {
                    let { value } = e?.target || {};
                    setSearchBarData(value);
                    debouncer(value, rawData);
                }}
            />
        </div>
    );
};

export default SearchBar;
