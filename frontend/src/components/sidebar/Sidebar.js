import React from "react";
import { Link } from "react-router-dom";
import { Bell, DocumentText, Logo, Plus } from "../../assets/icons";
import "./Sidebar.scss";
const Sidebar = () => {
    return (
        <div className="sidebar__section">
            <Link to="/dashboard" className="logo">
                <img src={Logo} alt="logo" />
            </Link>
            <Link to="./topic-register" className="btn__registration">
                <img src={Plus} alt="plus" />
                <p>Đăng ký đề tài</p>
            </Link>
            <div className="line"></div>
            <div className="sidebar__groupitem">
                <div className="sidebar__item active">
                    <img src={DocumentText} alt="DocumentText" />
                    <p>Đề tài của tôi</p>
                </div>
                <div className="sidebar__item">
                    <img src={Bell} alt="Bell" />
                    <p>Thông báo</p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Sidebar);
