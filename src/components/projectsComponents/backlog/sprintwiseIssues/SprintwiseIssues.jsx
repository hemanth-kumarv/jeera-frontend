import React from "react";
import styles from "./SprintwiseIssues.module.scss";
import commonStyles from "../../../../layouts/projectsLayouts/projects.module.scss";
import dayjs from "dayjs";

// Assets
import UnassignedIcon from "../../../../resources/icons/common/unassigned.svg";
import BugIcon from "../../../../resources/icons/common/bug.svg";
import SubtaskIcon from "../../../../resources/icons/common/subtask.svg";
import TaskIcon from "../../../../resources/icons/common/task.svg";
import StoryIcon from "../../../../resources/icons/common/story.svg";
import EpicIcon from "../../../../resources/icons/common/epic.svg";
import HighestPriorityIcon from "../../../../resources/icons/common/highestPriority.svg";
import HighPriorityIcon from "../../../../resources/icons/common/highPriority.svg";
import MediumPriorityIcon from "../../../../resources/icons/common/mediumPriority.svg";
import LowPriorityIcon from "../../../../resources/icons/common/lowPriority.svg";
import LowestPriorityIcon from "../../../../resources/icons/common/lowestPriority.svg";
import ChildIssuesIcon from "../../../../resources/icons/common/childIssues.svg";
import ClockIcon from "../../../../resources/icons/common/clock.svg";

const sprintDateFormatter = (date) => dayjs(date).format("DD MMM");

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

const getPriorityIcon = (priority) => {
    let icon = null;
    switch (priority) {
        case "VERY_HIGH":
            icon = HighestPriorityIcon;
            break;
        case "HIGH":
            icon = HighPriorityIcon;
            break;
        case "MEDIUM":
            icon = MediumPriorityIcon;
            break;
        case "LOW":
            icon = LowPriorityIcon;
            break;
        case "VERY_LOW":
            icon = LowestPriorityIcon;
            break;
        default:
            icon = null;
    }
    return icon;
};

const SprintwiseIssues = (props) => {
    const { sprint } = props;

    return (
        <div className={styles["sprint"]}>
            <div className={styles["sprint-header"]}>
                <div className={`${commonStyles["collapse-icon"]} ${styles["collapse-icon"]}`} arrow={"bottom"} />
                <div className={styles["sprint-name"]}>{sprint?.name}</div>
                <div className={`${styles["sprint-duration"]} ${styles["sprint-subtext"]}`}>
                    {sprintDateFormatter(sprint?.sprintStartsOn)} - {sprintDateFormatter(sprint?.sprintEndsOn)}
                </div>
                <div className={`${styles["sprint-issues-count"]} ${styles["sprint-subtext"]}`}>({sprint?.issues?.length} issues)</div>
                <div style={{ marginLeft: "auto" }} />
                <div className={styles["story-points-totals"]}>
                    <div className={styles["issue-story-points"]} storyType="notStarted">
                        {sprint?.storyPoints?.notStarted}
                    </div>
                    <div className={styles["issue-story-points"]} storyType="inProgress">
                        {sprint?.storyPoints?.inProgress}
                    </div>
                    <div className={styles["issue-story-points"]} storyType="done">
                        {sprint?.storyPoints?.done}
                    </div>
                </div>
                <div className={styles["complete-sprint-button"]}>Complete Sprint</div>
                <div className={styles["more-options"]}>...</div>
            </div>
            <div className={styles["sprint-issues-list"]}>
                {sprint.issues.map((issue, index) => (
                    <div key={index}>
                        <div className={styles["issue-type"]}>
                            <img src={getIssueTypeIcon(issue?.type)} />
                        </div>
                        <div className={styles["issue-key"]}>JEERA-{issue?.key}</div>
                        <div className={styles["issue-summary"]} title={issue?.summary}>
                            {issue?.summary}
                        </div>
                        {Math.round(Math.random()) == 0 && <div className={styles["issue-epic"]}>{"Jeera Epic Test V1.0".toUpperCase()}</div>}
                        <div style={{ marginLeft: "auto" }} />
                        {issue?.due_at && (
                            <div className={styles["issue-due-at"]} isOverdue={issue?.due_at <= new Date() ? "true" : "false"}>
                                <img src={ClockIcon} />
                                {sprintDateFormatter(issue?.due_at).toUpperCase()}
                            </div>
                        )}
                        {issue?.type != "BUG" && (
                            <div className={styles["child-issues-icon"]}>
                                <img src={ChildIssuesIcon} />
                            </div>
                        )}
                        {issue?.story_points != 0 && <div className={styles["issue-story-points"]}>{issue?.story_points}</div>}
                        {issue?.priority && (
                            <div className={styles["issue-priority"]}>
                                <img src={getPriorityIcon(issue?.priority)} />
                            </div>
                        )}
                        <div className={styles["issue-status"]}>{issue?.status}</div>
                        <div className={styles["issue-assigned-to"]}>
                            <img
                                src={
                                    issue?.assignee == "Unassigned"
                                        ? UnassignedIcon
                                        : `https://ui-avatars.com/api?background=random&format=svg&font-size=0.5&name=${issue?.assignee?.split(" ").join("+")}`
                                }
                            />
                        </div>
                        <div className={styles["more-options"]}>...</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SprintwiseIssues;
