import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="app">
            <div className="app__bg"></div>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default AppLayout;
