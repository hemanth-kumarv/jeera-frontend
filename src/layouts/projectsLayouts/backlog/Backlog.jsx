import React, { useMemo } from "react";
import BacklogHeader from "../../../components/projectsComponents/backlog/backlogHeader/BacklogHeader";
import SprintwiseIssues from "../../../components/projectsComponents/backlog/sprintwiseIssues/SprintwiseIssues";
import { data } from "../../../resources/data/issuesTableData";
import commonStyles from "../projects.module.scss";
import styles from "./Backlog.module.scss";

const Backlog = (props) => {
    let assignedUsers = data?.reduce((acc, user, idx, arr) => {
        if (arr.findIndex((ob) => ob.assignee == user?.assignee) == idx) return [...acc, user?.assignee];
        return acc;
    }, []);

    const sprintsCount = 3 + 1;
    const sprints = useMemo(
        () =>
            data
                ?.filter((issue) => issue.type != "EPIC" && issue.type != "SUBTASK")
                ?.reduce((acc, issue, idx, arr) => {
                    let newAcc = [...acc],
                        currentIdx = Math.floor((idx / arr?.length) * sprintsCount);
                    let currentSprintData = newAcc[currentIdx];
                    if (currentSprintData) {
                        let issues = [...(currentSprintData.issues || []), issue];
                        let storyPoints = currentSprintData?.storyPoints;
                        if (issue?.status == "IN_PROGRESS") storyPoints = { ...storyPoints, inProgress: storyPoints?.inProgress + 1 };
                        if (issue?.status == "TODO") storyPoints = { ...storyPoints, notStarted: storyPoints?.notStarted + 1 };
                        if (issue?.status == "DONE") storyPoints = { ...storyPoints, done: storyPoints?.done + 1 };
                        currentSprintData = { ...currentSprintData, issues, storyPoints };
                    } else {
                        let isBacklog = currentIdx == sprintsCount - 1;
                        currentSprintData = {
                            name: isBacklog ? "Backlog" : "Jeera Sprint #" + (currentIdx + 1),
                            issues: [issue],
                            sprintStartsOn: new Date(),
                            sprintEndsOn: new Date().setDate(new Date().getDate() + 14),
                            storyPoints: { notStarted: 0, inProgress: 0, done: 0 },
                            isBacklog
                        };
                    }

                    newAcc.splice(currentIdx, 1, currentSprintData);
                    return newAcc;
                }, []),
        [data]
    );

    return (
        <div className={commonStyles["projects-content"]}>
            <BacklogHeader users={assignedUsers} />
            <div className={styles["sprints-list"]}>
                {sprints.map((sprint, idx) => (
                    <SprintwiseIssues sprint={sprint} key={idx} />
                ))}
            </div>
        </div>
    );
};

export default Backlog;
