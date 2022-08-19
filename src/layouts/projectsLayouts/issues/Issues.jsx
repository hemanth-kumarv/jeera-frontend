import React from "react";
import styles from "./Issues.module.scss";
import commonStyles from "../projects.module.scss";
import IssuesHeader from "../../../components/projectsComponents/issues/issuesHeader/IssuesHeader";
import IssuesTable from "../../../components/projectsComponents/issues/issuesTable/IssuesTable";

const Issues = (props) => {
    return (
        <div className={commonStyles["projects-content"]}>
            <IssuesHeader />
            <IssuesTable />
        </div>
    );
};

export default Issues;
