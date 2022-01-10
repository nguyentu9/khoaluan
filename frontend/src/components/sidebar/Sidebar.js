import React from "react";
import { Bell, DocumentText, Logo, Plus } from "../../assets/icons";
import "./Sidebar.scss";
const Sidebar = () => {
    return (
        <div className="sidebar__section">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <button className="btn__registration">
                <img src={Plus} alt="plus" />
                <p>Đăng ký đề tài</p>
            </button>
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

export default Sidebar;
