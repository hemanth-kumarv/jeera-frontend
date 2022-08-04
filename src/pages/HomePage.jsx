import React, { useState } from "react";
import "./HomePage.scss";

const HomePage = () => {
    const [theme, setTheme] = useState("dark");

    return (
        <div className={`page ${theme}`}>
            <h1 style={{ fontSize: "4em" }}>Hello world!</h1>
            <button onClick={() => setTheme((prevTheme) => (prevTheme == "dark" ? "light" : "dark"))}>Change Theme</button>
        </div>
    );
};

export default HomePage;
