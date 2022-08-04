import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ROUTES } from "./resources/routes-constants";
// import './styles/main.sass'

const RootComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default RootComponent;
