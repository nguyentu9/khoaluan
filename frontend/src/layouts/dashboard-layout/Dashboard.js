import React from "react";
import { Outlet } from "react-router-dom";
import { Bell, MenuAlt2 } from "../../assets/icons";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.scss";
function DashboardLayout() {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main">
                <div className="main__topnav">
                    <div className="topnav__left">
                        <img
                            src={MenuAlt2}
                            alt="icon"
                            className="topnav__icon"
                        />
                        <p className="topnav__title">Dashboard</p>
                    </div>
                    <div className="topnav__right">
                        <img src={Bell} alt="Bell" />
                        <div className="avatar"></div>
                    </div>
                </div>

                <Outlet />
            </div>
        </div>
    );
}

export default DashboardLayout;
