import React, { Fragment, useMemo, useState } from "react";
import styles from "./Issues.module.scss";
import commonStyles from "../projects.module.scss";
import IssuesHeader from "../../../components/projectsComponents/issues/issuesHeader/IssuesHeader";
import IssuesTable from "../../../components/projectsComponents/issues/issuesTable/IssuesTable";
import Pagination from "../../../components/projectsComponents/pagination/Pagination";

import { data } from "../../../resources/data/issuesTableData";
import { ReactComponent as NoIssuesIcon } from "../../../resources/icons/common/no-issues-found.svg";

const Issues = (props) => {
    const pageSize = 50;

    const [currentPage, setCurrentPage] = useState(1);
    const [searchBarFilteredData, setSearchBarFilteredData] = useState(data);

    const totalPageLength = searchBarFilteredData?.length;

    const initialSortType = { isDesc: true, type: "created_at" };
    const [tableSortType, setTableSortType] = useState(initialSortType);

    const filteredData = useMemo(() => {
        let newData = searchBarFilteredData;
        newData = newData?.sort((a, b) =>
            tableSortType?.isDesc ? (a[tableSortType.type] > b[tableSortType.type] ? -1 : 1) : b[tableSortType.type] > a[tableSortType.type] ? -1 : 1
        );
        newData = newData.filter((obj, idx) => Math.floor(idx / pageSize) == currentPage - 1);
        return newData;
    }, [currentPage, tableSortType, searchBarFilteredData]);

    const fromIssueCount = pageSize * (currentPage - 1) + 1;
    const toIssueCount = Math.min(pageSize * currentPage, totalPageLength);

    return (
        <div className={commonStyles["projects-content"]}>
            <IssuesHeader setSearchBarData={setSearchBarFilteredData} rawData={data} />
            <div className={styles["issues-table"]} isEmpty={String(Boolean(!totalPageLength))}>
                {totalPageLength ? (
                    <Fragment>
                        <IssuesTable data={filteredData} resetPagination={() => setCurrentPage(1)} sortType={tableSortType} setSortType={setTableSortType} />
                        <div className={styles["table-footer"]}>
                            <div>&nbsp;</div>
                            <div>{`${fromIssueCount}-${toIssueCount} of ${totalPageLength}`}</div>
                            <div className={styles["pagination-container"]}>
                                <Pagination length={totalPageLength} pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                            </div>
                        </div>
                    </Fragment>
                ) : (
                    <div className={styles["no-data"]}>
                        <NoIssuesIcon width={228} height={210} />
                        <p className={styles["no-data-text"]}>No issues were found matching your search</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Issues;
