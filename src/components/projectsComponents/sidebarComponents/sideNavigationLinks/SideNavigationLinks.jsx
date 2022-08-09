import React from "react";
import styles from "./SideNavigationLinks.module.scss";

const SideNavigationLinks = (props) => {
    const { SvgIcon, isActive, label } = props;
    return (
        <div className={`${styles["sidebar-navigation-links"]} ${isActive ? styles["active-nav-link"] : ""}`}>
            <div className={styles["active-tab-indicator"]} />
            <SvgIcon />
            <p className={styles["navigation-link-label"]}>{label}</p>
        </div>
    );
};

export default SideNavigationLinks;
