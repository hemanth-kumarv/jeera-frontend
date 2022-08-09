import React, { useState } from "react";
import "./Development.scss";
import { ReactComponent as CodeIcon } from "../../../../resources/icons/sideNavigation/code.svg";
import { ReactComponent as ReleasesIcon } from "../../../../resources/icons/sideNavigation/releases.svg";
import SideNavigationLinks from "../../../../components/projectsComponents/sidebarComponents/sideNavigationLinks/SideNavigationLinks";

const Development = (props) => {
    const [isCaretShown, toggleCaret] = useState(false);
    const [isNavLinksShown, toggleNavLinks] = useState(true);

    return (
        <div className={`sidebar-group development`} onMouseOver={() => toggleCaret(true)} onMouseOut={() => toggleCaret(!isNavLinksShown || false)}>
            {isCaretShown && (
                <div className="collapse-icon" onClick={() => toggleNavLinks((prevState) => !prevState)} arrow={isNavLinksShown ? "bottom" : "right"} />
            )}
            <div className="group-title">DEVELOPMENT</div>
            {isNavLinksShown && (
                <>
                    <SideNavigationLinks SvgIcon={CodeIcon} isActive={false} label={"Code"} />
                    <SideNavigationLinks SvgIcon={ReleasesIcon} isActive={false} label={"Releases"} />
                </>
            )}
        </div>
    );
};

export default Development;
