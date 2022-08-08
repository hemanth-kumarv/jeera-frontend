import React, { useState } from "react";

// Style
import "./MainPageTemplate.scss";

// Components
import HeaderTemplate from "../headerTemplate/HeaderTemplate";

const MainPageTemplate = ({ children }) => {
    return (
        <div className={`HOC-template`}>
            <HeaderTemplate />
            {children}
        </div>
    );
};

export default MainPageTemplate;
