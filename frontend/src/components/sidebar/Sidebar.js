import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Bell, DocumentText, Logo, Plus } from "../../assets/icons";
import "./Sidebar.scss";
const Sidebar = () => {
    const isActiveSidebarItem = ({ isActive }) =>
        isActive ? "sidebar__item active" : "sidebar__item";
    return (
        <div className="sidebar__section">
            <Link to="/dashboard" className="logo">
                <img src={Logo} alt="logo" />
            </Link>
            <Link to="/dashboard/topic-register" className="btn__registration">
                <img src={Plus} alt="plus" />
                <p>Đăng ký đề tài</p>
            </Link>
            <div className="line"></div>
            <div className="sidebar__groupitem">
                <NavLink
                    to="/dashboard/my-topic"
                    className={isActiveSidebarItem}
                >
                    <img src={DocumentText} alt="DocumentText" />
                    <p>Đề tài của tôi</p>
                </NavLink>
                {/* <NavLink
                    to="/dashboard/my-topic"
                    className={isActiveSidebarItem}
                >
                    <img src={DocumentText} alt="DocumentText" />
                    <p>Đề tài cấp trường</p>
                </NavLink>
                <NavLink
                    to="/dashboard/my-topic"
                    className={isActiveSidebarItem}
                >
                    <img src={DocumentText} alt="DocumentText" />
                    <p>Đề tài cấp khoa</p>
                </NavLink> */}
                {/* <NavLink to="/" className={isActiveSidebarItem}>
                    <img src={Bell} alt="Bell" />
                    <p>Hội đồng</p>
                </NavLink>
                <NavLink to="/" className={isActiveSidebarItem}>
                    <img src={Bell} alt="Bell" />
                    <p>Thống kê</p>
                </NavLink>
                <NavLink to="/" className={isActiveSidebarItem}>
                    <img src={Bell} alt="Bell" />
                    <p>Tài khoản</p>
                </NavLink>
                <NavLink to="/" className={isActiveSidebarItem}>
                    <img src={Bell} alt="Bell" />
                    <p>Tin tức</p>
                </NavLink>
                <NavLink to="/" className={isActiveSidebarItem}>
                    <img src={Bell} alt="Bell" />
                    <p>Biểu mẩu</p>
                </NavLink>
                <NavLink to="/" className={isActiveSidebarItem}>
                    <img src={Bell} alt="Bell" />
                    <p>Ngành / Khoa</p>
                </NavLink>
                <NavLink to="/" className={isActiveSidebarItem}>
                    <img src={Bell} alt="Bell" />
                    <p>Nhật ký</p>
                </NavLink> */}
            </div>
        </div>
    );
};

export default React.memo(Sidebar);
