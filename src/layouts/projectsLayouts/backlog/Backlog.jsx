import React from "react";
import BacklogHeader from "../../../components/projectsComponents/backlog/backlogHeader/BacklogHeader";
import { data } from "../../../resources/data/issuesTableData";
import commonStyles from "../projects.module.scss";

const Backlog = (props) => {
    let assignedUsers = data?.reduce((acc, user, idx, arr) => {
        if (arr.findIndex((ob) => ob.assignee == user?.assignee) == idx) return [...acc, user?.assignee];
        return acc;
    }, []);

    return (
        <div className={commonStyles["projects-content"]}>
            <BacklogHeader users={assignedUsers} />
            <div></div>
        </div>
    );
};

export default Backlog;
