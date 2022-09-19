import React from "react";
import styles from "./SideNavigationLinks.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const SideNavigationLinks = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { SvgIcon, link, label } = props;

    const isActiveTab = location.pathname?.includes(link);

    return (
        <div className={`${styles["sidebar-navigation-links"]} ${isActiveTab ? styles["active-nav-link"] : ""}`} onClick={() => link && navigate(link)}>
            <div className={styles["active-tab-indicator"]} />
            <SvgIcon />
            <p className={styles["navigation-link-label"]}>{label}</p>
        </div>
    );
};

export default SideNavigationLinks;
