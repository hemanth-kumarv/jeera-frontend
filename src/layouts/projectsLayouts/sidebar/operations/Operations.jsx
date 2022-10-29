import React, { useState } from "react";
import styles from "../Sidebar.module.scss";
import commonStyles from "../../projects.module.scss";
import { ReactComponent as DeploymentsIcon } from "../../../../resources/icons/sideNavigation/deployments.svg";
import { ReactComponent as OnCallIcon } from "../../../../resources/icons/sideNavigation/onCall.svg";
import SideNavigationLinks from "../../../../components/projectsComponents/sidebarComponents/sideNavigationLinks/SideNavigationLinks";
import { PROJECTS_ROUTES } from "../../../../resources/routes-constants";

const Operations = (props) => {
    const [isCaretShown, toggleCaret] = useState(false);
    const [isNavLinksShown, toggleNavLinks] = useState(true);

    return (
        <div
            className={`${styles["sidebar-group"]} ${styles["Operations"]}`}
            onMouseOver={() => toggleCaret(true)}
            onMouseOut={() => toggleCaret(!isNavLinksShown || false)}
        >
            {isCaretShown && (
                <div
                    className={commonStyles["collapse-icon"]}
                    onClick={() => toggleNavLinks((prevState) => !prevState)}
                    arrow={isNavLinksShown ? "bottom" : "right"}
                />
            )}
            <div className={styles["group-title"]}>OPERATIONS</div>
            {isNavLinksShown && (
                <>
                    <SideNavigationLinks SvgIcon={DeploymentsIcon} link={PROJECTS_ROUTES.DEPLOYMENTS_ROUTE} label={"Deployments"} />
                    <SideNavigationLinks SvgIcon={OnCallIcon} link={PROJECTS_ROUTES.ON_CALL_ROUTE} label={"On-Call"} />
                </>
            )}
        </div>
    );
};

export default Operations;
