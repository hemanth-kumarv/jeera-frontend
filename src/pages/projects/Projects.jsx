import React from "react";
import Sidebar from "../../layouts/projectsLayouts/sidebar/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import { PROJECTS_ROUTES } from "../../resources/routes-constants";
import styles from "../pageStyles.module.scss";
import Issues from "../../layouts/projectsLayouts/issues/Issues";
import Backlog from "../../layouts/projectsLayouts/backlog/Backlog";

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
                <Route path={PROJECTS_ROUTES.BACKLOG_ROUTE} element={<Backlog />} />
                <Route path="/*" element={<Navigate replace to={PROJECTS_ROUTES.ISSUES_ROUTE} />} />
            </Routes>
        </ProjectsDOM>
    );
};

export default Projects;
