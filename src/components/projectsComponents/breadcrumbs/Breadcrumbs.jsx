import React from "react";
import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = (props) => {
    const { mainRoute, subRoute } = props;
    return (
        <div className={`${styles["breadcrumbs"]}`}>
            <a href={mainRoute?.link}>{mainRoute?.title}</a>
            <span className={styles["breadcrumbs-delimiter"]}>/</span>
            <a href={subRoute?.link}>{subRoute?.title}</a>
        </div>
    );
};

export default Breadcrumbs;
