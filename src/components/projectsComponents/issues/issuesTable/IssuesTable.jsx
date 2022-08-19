import React from "react";
import styles from "./IssuesTable.module.scss";
import UpArrowIcon from "../../../../resources/icons/common/up-arrow-icon.svg";

const IssuesTable = (props) => {
    return (
        <div className={styles["issues-table"]}>
            <div className={`${styles["table-row"]} ${styles["table-header"]}`}>
                <div className={styles["type"]}>
                    <div className={styles["label"]}>
                        Type <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div className={styles["key"]}>
                    <div className={styles["label"]}>
                        Key <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div className={styles["summary"]}>
                    <div className={styles["label"]}>
                        Summary <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div className={styles["assignee"]}>
                    <div className={styles["label"]}>
                        Assignee <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div className={styles["reporter"]}>
                    <div className={styles["label"]}>
                        Reporter <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div className={styles["priority"]}>
                    <div className={styles["label"]}>
                        P <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div className={styles["status"]}>
                    <div className={styles["label"]}>
                        Status <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div className={styles["resolution"]}>
                    <div className={styles["label"]}>
                        Resolution <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div className={styles["created-on"]}>
                    <div className={styles["label"]}>
                        Created <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div className={styles["updated-on"]}>
                    <div className={styles["label"]}>
                        Updated <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div className={styles["due-on"]}>
                    <div className={styles["label"]}>
                        Due <img src={UpArrowIcon} alt="&#x2191;" />
                    </div>
                </div>
                <div className={styles["options"]}></div>
            </div>
        </div>
    );
};

export default IssuesTable;
