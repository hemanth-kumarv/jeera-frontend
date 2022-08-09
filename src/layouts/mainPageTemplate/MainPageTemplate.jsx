import React, { useState } from "react";

// Style
import styles from "./MainPageTemplate.module.scss";

// Components
import HeaderTemplate from "../headerTemplate/HeaderTemplate";

const MainPageTemplate = ({ children }) => {
    return (
        <div className={styles[`HOC-template`]}>
            <HeaderTemplate />
            {children}
        </div>
    );
};

export default MainPageTemplate;
