import React from "react";
import styles from "./ProjectDetails.module.scss";
import { ReactComponent as LogoSmall } from "../../../../resources/icons/common/logo-sm.svg";

const ProjectDetails = (props) => {
    return (
        <div className={styles[`sidebar-project-details`]}>
            <div className={styles["project-logo"]}>
                <LogoSmall />
            </div>
            <div className={styles["project-labels"]}>
                <p className={styles["title"]}>Jeera</p>
                <p className={styles["description"]}>Software Project</p>
            </div>
        </div>
    );
};

export default ProjectDetails;
