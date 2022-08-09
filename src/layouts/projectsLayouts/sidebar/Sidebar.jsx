import styles from "./Sidebar.module.scss";
import React from "react";
import ProjectDetails from "../../../components/projectsComponents/sidebarComponents/projectDetails/ProjectDetails";
import Planning from "./planning/Planning";
import Development from "./development/Development";
import Operations from "./operations/Operations";

const Sidebar = (props) => {
    return (
        <div className={styles[`projects-sidebar`]}>
            <ProjectDetails />
            <Planning />
            <Development />
            <Operations />
        </div>
    );
};

export default Sidebar;
