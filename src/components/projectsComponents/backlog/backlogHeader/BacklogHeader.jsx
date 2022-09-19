import React from "react";
import SearchBar from "../../../searchBar/SearchBar";
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import Dropdown from "../../dropdown/Dropdown";
import styles from "./BacklogHeader.module.scss";

const BacklogHeader = (props) => {
    const { users } = props;
    console.log("users :>> ", users);
    return (
        <div className={styles["backlog-header"]}>
            <Breadcrumbs mainRoute={{ link: "/", title: "Projects" }} subRoute={{ link: "/", title: "Jeera" }} />
            <div>
                <div className={`${styles["subroute-title"]}`}>Backlog</div>
            </div>
            <div>
                <div className={styles["search-bar"]}>
                    <SearchBar placeholder=" " />
                </div>
                <div className={styles["assignees"]}>
                    {users.map((user) => (
                        <img key={user} src={`https://ui-avatars.com/api?background=random&format=svg&font-size=0.5&name=${user?.split(" ").join("+")}`} />
                    ))}
                    <img src={null} alt="+10" />
                </div>
                <div className={styles["dropdowns"]}>
                    <Dropdown title="Epic">Epic</Dropdown>
                    <Dropdown title="Versions">Versions</Dropdown>
                    <Dropdown title="Type">Type</Dropdown>
                </div>
            </div>
        </div>
    );
};

export default BacklogHeader;
