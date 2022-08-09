import "./Sidebar.scss";
import React from "react";
import ProjectDetails from "../../../components/projectsComponents/sidebarComponents/projectDetails/ProjectDetails";
import Planning from "./planning/Planning";
import Development from "./development/Development";

const Sidebar = (props) => {
    return (
        <div className={`projects-sidebar`}>
            <ProjectDetails />
            <Planning />
            <Development />
        </div>
    );
};

export default Sidebar;
