import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./IssueStatusDropdown.module.scss";
import commonStyles from "../../layouts/projectsLayouts/projects.module.scss";
import { status } from "../../resources/data/issuesTableData";

const getLabel = (type) => {
    let label = "";
    switch (type) {
        case "TODO":
            label = "TO DO";
            break;

        case "IN_PROGRESS":
            label = "IN PROGRESS";
            break;

        case "DONE":
            label = "DONE";
            break;

        default:
            break;
    }
    return label;
};

const IssueStatusDropdown = (props) => {
    const { issueType, parentTableRef } = props;
    const remainingStatusTypes = useMemo(() => status?.filter((type) => type != issueType), [status, issueType]);
    const [isDropdownOpen, toggleDropdownOpen] = useState(false);
    const [scrollTop, setScrollTop] = useState(null);
    const [selectedType, setSelectedType] = useState(null);

    const popupRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        setSelectedType(remainingStatusTypes?.[0]);
    }, [issueType]);

    useEffect(() => {
        // scrollTop null by default. Done to not add new event listeners
        if (parentTableRef && scrollTop == null) {
            parentTableRef?.current?.addEventListener("scroll", (e) => {
                setScrollTop(e?.target?.scrollTop); // ScrollTop value set to state variable
            }); //
        }
    }, [parentTableRef?.current]);

    useEffect(() => {
        if (popupRef?.current && parentTableRef) {
            let { offsetTop, offsetLeft, offsetWidth: buttonWidth } = buttonRef?.current || {};

            // Set position of dropdown
            // X-position is leftOffset - 220px (width of dropdown) + button width -> Done to right align dropdown
            // Y-position is topOffset + 30px (not immediately below the button) - scrollTop value -> useEffect dependent variable, so that dropdown moves when scrolled
            popupRef.current.style.transform = `translate(${offsetLeft - 220 + buttonWidth}px, ${offsetTop + 30 - scrollTop}px)`;

            let { top, bottom } = parentTableRef?.current?.getBoundingClientRect() || {};
            let { y } = popupRef?.current?.getBoundingClientRect() || {};
            if (isDropdownOpen && (y <= top || y >= bottom)) toggleDropdownOpen(false); // If button scrolled beyond viewport, toggle it hidden
        }
    }, [popupRef?.current, isDropdownOpen, scrollTop]);

    return (
        <div className={styles["issue-status-dropdown"]}>
            <div
                className={`${styles["dropdown-label"]} ${styles[issueType]} ${styles["issue-type"]} ${isDropdownOpen ? styles["dropdown-open"] : ""}`}
                onClick={() => toggleDropdownOpen((isOpen) => !isOpen)}
                ref={buttonRef}
                onBlur={() => toggleDropdownOpen(false)}
                tabIndex={1}
                isActive={String(isDropdownOpen)}
            >
                {getLabel(issueType)}
                <div className={commonStyles["collapse-icon"]} arrow={"bottom"} />
            </div>
            {isDropdownOpen && (
                <div className={styles["dropdown"]} ref={popupRef}>
                    {remainingStatusTypes?.map((type) => (
                        <div
                            key={type}
                            className={`${styles["dropdown-types"]} ${selectedType == type ? styles["active-type"] : ""}`}
                            onMouseOver={() => setSelectedType(type)}
                        >
                            <div className={`${styles[type]} ${styles["issue-type"]}`}>{getLabel(type)}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default IssueStatusDropdown;
