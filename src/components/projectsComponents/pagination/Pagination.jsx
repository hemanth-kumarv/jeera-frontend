import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = (props) => {
    const { length, pageSize, currentPage, setCurrentPage } = props;
    const numbers = Array.from(new Array(Math.ceil(length / pageSize)));

    const previousPageClick = () => {
        if (currentPage != 1) setCurrentPage(currentPage - 1);
    };
    const nextPageClick = () => {
        if (currentPage != numbers.length) setCurrentPage(currentPage + 1);
    };

    return (
        <div className={styles["pagination"]}>
            <div onClick={previousPageClick}>&#60;</div>
            {numbers.map((_, idx) => (
                <div key={idx} onClick={() => setCurrentPage(idx + 1)} isActivePage={String(currentPage == idx + 1)}>
                    {idx + 1}
                </div>
            ))}
            <div onClick={nextPageClick}>&#62;</div>
        </div>
    );
};

export default Pagination;
