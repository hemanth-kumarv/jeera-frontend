import React from "react";
import Sidebar from "../../layouts/projectsLayouts/sidebar/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import { PROJECTS_ROUTES } from "../../resources/routes-constants";
import Issues from "../../layouts/projectsLayouts/issues/Issues";
import styles from "../pageStyles.module.scss";

const ProjectsDOM = ({ children }) => (
    <div className={`page`}>
        <Sidebar />
        <div className={`${styles["page-content"]} `}>{children}</div>
    </div>
);

const Projects = (props) => {
    return (
        <ProjectsDOM>
            <Routes>
                {/* <Route path={PROJECTS_ROUTES.ROADMAP_ROUTE} /> */}
                <Route path={PROJECTS_ROUTES.ISSUES_ROUTE} element={<Issues />} />
                <Route path="/" element={<Navigate replace to={PROJECTS_ROUTES.ISSUES_ROUTE} />} />
            </Routes>
        </ProjectsDOM>
    );
};

export default Projects;
