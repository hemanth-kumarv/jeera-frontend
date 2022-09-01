import React, { useState } from "react";
import styles from "./IssuesTable.module.scss";
import { data } from "./issuesTableData";

// Assets
import UpArrowIcon from "../../../../resources/icons/common/up-arrow-icon.svg";
import UnassignedIcon from "../../../../resources/icons/common/unassigned.svg";
import BugIcon from "../../../../resources/icons/common/bug.svg";
import SubtaskIcon from "../../../../resources/icons/common/subtask.svg";
import TaskIcon from "../../../../resources/icons/common/task.svg";
import StoryIcon from "../../../../resources/icons/common/story.svg";
import EpicIcon from "../../../../resources/icons/common/epic.svg";
import MediumPriorityIcon from "../../../../resources/icons/common/mediumPriority.svg";
import dayjs from "dayjs";
import { useMemo } from "react";

const getIssueTypeIcon = (type) => {
    let icon = null;
    switch (type) {
        case "EPIC":
            icon = EpicIcon;
            break;
        case "STORY":
            icon = StoryIcon;
            break;
        case "TASK":
            icon = TaskIcon;
            break;
        case "SUBTASK":
            icon = SubtaskIcon;
            break;
        case "BUG":
            icon = BugIcon;
            break;
        default:
            icon = null;
    }
    return icon;
};

const IssuesTable = (props) => {
    const [activeIssue, setActiveIssue] = useState(0);

    const formatDateTime = (date) => dayjs(date).format("MMM DD, YYYY");

    const [sortType, setSortType] = useState({ isDesc: true, type: "created_at" });

    const sortedData = useMemo(() => {
        return data?.sort((a, b) => (sortType?.isDesc ? (a[sortType.type] > b[sortType.type] ? -1 : 1) : b[sortType.type] > a[sortType.type] ? -1 : 1));
    }, [sortType]);

    const changeSortType = (type) => {
        setSortType((prevState) => {
            if (prevState.type == type) return { type, isDesc: !prevState.isDesc };
            return { type, isDesc: false };
        });
    };

    return (
        <div className={styles["issues-table"]}>
            <div className={`${styles["table-row"]} ${styles["table-header"]}`}>
                <div
                    className={`${styles["type"]} 
                        ${sortType.type == "type" ? styles["active-filter"] : ""} 
                        ${sortType.isDesc && sortType.type == "type" ? styles["descending-order"] : ""}`}
                    onClick={() => changeSortType("type")}
                >
                    <div className={styles["label"]}>
                        Type <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div
                    className={`${styles["key"]} 
                        ${sortType.type == "key" ? styles["active-filter"] : ""} 
                        ${sortType.isDesc && sortType.type == "key" ? styles["descending-order"] : ""}`}
                    onClick={() => changeSortType("key")}
                >
                    <div className={styles["label"]}>
                        Key <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div
                    className={`${styles["summary"]} 
                        ${sortType.type == "summary" ? styles["active-filter"] : ""} 
                        ${sortType.isDesc && sortType.type == "summary" ? styles["descending-order"] : ""}`}
                    onClick={() => changeSortType("summary")}
                >
                    <div className={styles["label"]}>
                        Summary <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div
                    className={`${styles["assignee"]} 
                            ${sortType.type == "assignee" ? styles["active-filter"] : ""} 
                            ${sortType.isDesc && sortType.type == "assignee" ? styles["descending-order"] : ""}`}
                    onClick={() => changeSortType("assignee")}
                >
                    <div className={styles["label"]}>
                        Assignee <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div
                    className={`${styles["reporter"]} 
                            ${sortType.type == "reporter" ? styles["active-filter"] : ""} 
                            ${sortType.isDesc && sortType.type == "reporter" ? styles["descending-order"] : ""}`}
                    onClick={() => changeSortType("reporter")}
                >
                    <div className={styles["label"]}>
                        Reporter <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div
                    className={`${styles["priority"]} 
                            ${sortType.type == "priority" ? styles["active-filter"] : ""} 
                            ${sortType.isDesc && sortType.type == "priority" ? styles["descending-order"] : ""}`}
                    onClick={() => changeSortType("priority")}
                >
                    <div className={styles["label"]}>
                        P <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div
                    className={`${styles["status"]} 
                        ${sortType.type == "status" ? styles["active-filter"] : ""} 
                        ${sortType.isDesc && sortType.type == "status" ? styles["descending-order"] : ""}`}
                    onClick={() => changeSortType("status")}
                >
                    <div className={styles["label"]}>
                        Status <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div
                    className={`${styles["resolution"]} 
                            ${sortType.type == "resolution" ? styles["active-filter"] : ""} 
                            ${sortType.isDesc && sortType.type == "resolution" ? styles["descending-order"] : ""}`}
                    onClick={() => changeSortType("resolution")}
                >
                    <div className={styles["label"]}>
                        Resolution <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div
                    className={`${styles["created-on"]} 
                            ${sortType.type == "created_at" ? styles["active-filter"] : ""} 
                            ${sortType.isDesc && sortType.type == "created_at" ? styles["descending-order"] : ""}`}
                    onClick={() => changeSortType("created_at")}
                >
                    <div className={styles["label"]}>
                        Created <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div
                    className={`${styles["updated-on"]} 
                            ${sortType.type == "updated_at" ? styles["active-filter"] : ""} 
                            ${sortType.isDesc && sortType.type == "updated_at" ? styles["descending-order"] : ""}`}
                    onClick={() => changeSortType("updated_at")}
                >
                    <div className={styles["label"]}>
                        Updated <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div
                    className={`${styles["due-on"]} 
                        ${sortType.type == "due_at" ? styles["active-filter"] : ""} 
                        ${sortType.isDesc && sortType.type == "due_at" ? styles["descending-order"] : ""}`}
                    onClick={() => changeSortType("due_at")}
                >
                    <div className={styles["label"]}>
                        Due <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div className={styles["options"]}></div>
            </div>
            <div className={styles["table-data"]}>
                {sortedData.map((issue, idx) => (
                    <div
                        className={`${styles["table-row"]} ${styles[activeIssue == idx ? "active-row" : ""]}`}
                        key={issue.key}
                        onClick={() => setActiveIssue(idx)}
                    >
                        <div className={styles["type"]}>
                            <div className={styles["label"]}>{<img src={getIssueTypeIcon(issue?.type)} />}</div>
                        </div>
                        <div className={styles["key"]}>
                            <div className={styles["label"]}>JEERA-{issue?.key}</div>
                        </div>
                        <div className={styles["summary"]}>
                            <a href="#" className={styles["label"]}>
                                {issue?.summary}
                            </a>
                        </div>
                        <div className={styles["assignee"]}>
                            <div className={styles["username-icon"]}>
                                <img
                                    src={
                                        issue?.assignee == "Unassigned"
                                            ? UnassignedIcon
                                            : `https://ui-avatars.com/api?background=random&format=svg&font-size=0.5&name=${issue?.assignee
                                                  ?.split(" ")
                                                  .join("+")}`
                                    }
                                />
                            </div>
                            <div className={styles["label"]}>{issue?.assignee}</div>
                        </div>
                        <div className={styles["reporter"]}>
                            <div className={styles["username-icon"]}>
                                <img
                                    src={
                                        issue?.reporter == "Unassigned"
                                            ? UnassignedIcon
                                            : `https://ui-avatars.com/api?background=random&format=svg&font-size=0.5&name=${issue?.reporter
                                                  ?.split(" ")
                                                  .join("+")}`
                                    }
                                />
                            </div>
                            <div className={styles["label"]}>{issue?.reporter}</div>
                        </div>
                        <div className={styles["priority"]}>
                            <img src={MediumPriorityIcon} />
                        </div>
                        <div className={styles["status"]}>
                            <div className={styles["label"]}>{issue?.status}</div>
                        </div>
                        <div className={styles["resolution"]}>
                            <div className={styles["label"]}>{issue?.resolution}</div>
                        </div>
                        <div className={styles["created-on"]}>
                            <div>{issue?.created_at ? formatDateTime(issue?.created_at) : ""}</div>
                        </div>
                        <div className={styles["updated-on"]}>
                            <div>{issue?.updated_at ? formatDateTime(issue?.updated_at) : ""}</div>
                        </div>
                        <div className={styles["due-on"]}>
                            <div>{issue?.due_at ? formatDateTime(issue?.due_at) : ""}</div>
                        </div>
                        <div className={styles["options"]}>
                            <h2>...</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IssuesTable;
