import React, { useMemo, useState } from "react";
import styles from "./Issues.module.scss";
import commonStyles from "../projects.module.scss";
import IssuesHeader from "../../../components/projectsComponents/issues/issuesHeader/IssuesHeader";
import IssuesTable from "../../../components/projectsComponents/issues/issuesTable/IssuesTable";
import Pagination from "../../../components/projectsComponents/pagination/Pagination";

import { data } from "../../../resources/data/issuesTableData";

const Issues = (props) => {
    const pageSize = 50;

    const [currentPage, setCurrentPage] = useState(1);

    const initialSortType = { isDesc: true, type: "created_at" };
    const [tableSortType, setTableSortType] = useState(initialSortType);

    console.log("currentPage :>> ", currentPage);
    const filteredData = useMemo(() => {
        let newData = data;
        newData = newData?.sort((a, b) =>
            tableSortType?.isDesc ? (a[tableSortType.type] > b[tableSortType.type] ? -1 : 1) : b[tableSortType.type] > a[tableSortType.type] ? -1 : 1
        );
        newData = newData.filter((obj, idx) => Math.floor(idx / pageSize) == currentPage - 1);
        return newData;
    }, [currentPage, tableSortType]);

    const fromIssueCount = pageSize * (currentPage - 1) + 1;
    const toIssueCount = Math.min(pageSize * currentPage, data.length);

    return (
        <div className={commonStyles["projects-content"]}>
            <IssuesHeader />
            <div className={styles["issues-table"]}>
                <IssuesTable data={filteredData} resetPagination={() => setCurrentPage(1)} sortType={tableSortType} setSortType={setTableSortType} />
                <div className={styles["table-footer"]}>
                    <div>&nbsp;</div>
                    <div>{`${fromIssueCount}-${toIssueCount} of ${data.length}`}</div>
                    <div className={styles["pagination-container"]}>
                        <Pagination length={data?.length} pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Issues;
