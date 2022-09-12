import React from "react";
import styles from "./IssuesHeader.module.scss";

import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import SearchBar from "../../../searchBar/SearchBar";
import Dropdown from "../../dropdown/Dropdown";

const IssuesHeader = (props) => {
    const { rawData, setSearchBarData } = props;
    return (
        <div className={styles["issues-header"]}>
            <Breadcrumbs mainRoute={{ link: "/", title: "Projects" }} subRoute={{ link: "/", title: "Jeera" }} />
            <div>
                <div className={`${styles["subroute-title"]}`}>Issues</div>
                <div className={styles["title-options"]}>
                    <Dropdown title="Share">Share</Dropdown>
                    <Dropdown title="Export Issues">Export Issues</Dropdown>
                </div>
            </div>
            <div>
                <SearchBar searchParam="key,summary" setFilteredData={setSearchBarData} rawData={rawData} />
                <Dropdown title="Project">Project</Dropdown>
                <Dropdown title="Type">Type</Dropdown>
                <Dropdown title="Status">Status</Dropdown>
                <Dropdown title="Assignee">Assignee</Dropdown>
            </div>
        </div>
    );
};

export default IssuesHeader;
