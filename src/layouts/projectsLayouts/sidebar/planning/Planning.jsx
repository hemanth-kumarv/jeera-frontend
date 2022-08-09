import React, { useState } from "react";
import styles from "../Sidebar.module.scss";
import { ReactComponent as RoadmapIcon } from "../../../../resources/icons/sideNavigation/roadmap.svg";
import { ReactComponent as BacklogIcon } from "../../../../resources/icons/sideNavigation/backlog.svg";
import { ReactComponent as BoardIcon } from "../../../../resources/icons/sideNavigation/board.svg";
import { ReactComponent as ReportsIcon } from "../../../../resources/icons/sideNavigation/reports.svg";
import { ReactComponent as IssuesIcon } from "../../../../resources/icons/sideNavigation/issues.svg";
import SideNavigationLinks from "../../../../components/projectsComponents/sidebarComponents/sideNavigationLinks/SideNavigationLinks";

const Planning = (props) => {
    const [isCaretShown, toggleCaret] = useState(false);
    const [isNavLinksShown, toggleNavLinks] = useState(true);

    return (
        <div
            className={`${styles["sidebar-group"]} ${styles["planning"]}`}
            onMouseOver={() => toggleCaret(true)}
            onMouseOut={() => toggleCaret(!isNavLinksShown || false)}
        >
            {isCaretShown && (
                <div
                    className={styles["collapse-icon"]}
                    onClick={() => toggleNavLinks((prevState) => !prevState)}
                    arrow={isNavLinksShown ? "bottom" : "right"}
                />
            )}
            <div className={styles["group-title"]}>PLANNING</div>
            {isNavLinksShown && (
                <>
                    <SideNavigationLinks SvgIcon={RoadmapIcon} isActive={true} label={"Roadmap"} />
                    <SideNavigationLinks SvgIcon={BacklogIcon} isActive={false} label={"Backlog"} />
                    <SideNavigationLinks SvgIcon={BoardIcon} isActive={false} label={"Board"} />
                    <SideNavigationLinks SvgIcon={ReportsIcon} isActive={false} label={"Reports"} />
                    <SideNavigationLinks SvgIcon={IssuesIcon} isActive={false} label={"Issues"} />
                </>
            )}
        </div>
    );
};

export default Planning;
