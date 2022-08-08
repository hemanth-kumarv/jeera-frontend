import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPageTemplate from "./layouts/mainPageTemplate/MainPageTemplate";
import HomePage from "./pages/HomePage";
import { ROUTES } from "./resources/routes-constants";
// import './styles/main.sass'

const AuthRoutes = () => (
    <MainPageTemplate>
        <Routes>
            <Route path="/test" element={<HomePage />} />
        </Routes>
    </MainPageTemplate>
);

const RootComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<AuthRoutes />} />
                {/* <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} /> */}
            </Routes>
        </Router>
    );
};

export default RootComponent;
