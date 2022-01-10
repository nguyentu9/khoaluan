import React, { useCallback, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Bell, Key, Logout, MenuAlt2, UseCircle } from "../../assets/icons";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.scss";

function DashboardLayout() {
    const [isFold, setIsFold] = useState(false);

    const dropdownToggleEl = useRef();
    const dropdownContentEl = useRef();
    clickOutsideRef(dropdownContentEl, dropdownToggleEl);

    const handleFoldSidebar = useCallback(() => {
        setIsFold((prevState) => !prevState);
    }, []);

    return (
        <div className={`dashboard ${isFold ? "fold" : ""}`}>
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
                            onClick={handleFoldSidebar}
                        />
                        <p className="topnav__title">Dashboard</p>
                    </div>
                    <div className="topnav__right">
                        <img src={Bell} alt="Bell" />
                        <div ref={dropdownToggleEl}>
                            <div className="avatar" ref={dropdownContentEl}>
                                <ul className="avatar__menu">
                                    <li>
                                        <img
                                            src={UseCircle}
                                            alt="icon"
                                            className=""
                                            onClick={() => {}}
                                        />
                                        <span>Thông tin cá nhân</span>
                                    </li>
                                    <li>
                                        <img
                                            src={Key}
                                            alt="icon"
                                            className=""
                                            onClick={() => {}}
                                        />
                                        <span>Đổi mật khẩu</span>
                                    </li>
                                    <li>
                                        <img
                                            src={Logout}
                                            alt="icon"
                                            className=""
                                            onClick={() => {}}
                                        />
                                        <span>Đăng xuất</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
const clickOutsideRef = (contentEl, toggleEl) => {
    document.addEventListener("mousedown", (e) => {
        // user click toggle
        if (toggleEl?.current?.contains(e.target)) {
            contentEl.current.classList.toggle("active");
        } else {
            // user click outside toggle and content
            if (contentEl.current && !contentEl.current.contains(e.target)) {
                contentEl.current.classList.remove("active");
            }
        }
    });
};
export default DashboardLayout;
