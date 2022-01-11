import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Bell, Key, Logout, MenuAlt2, UseCircle } from "../../assets/icons";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.scss";
import { useLogoutMutation } from "../../services/user";
import { toast } from "react-toastify";
import Avatar from "../../components/common/avatar/Avatar";
function DashboardLayout() {
    const [logout, { isLoading, data, error }] = useLogoutMutation();

    let navigate = useNavigate();

    const [isFold, setIsFold] = useState(false);

    const dropdownToggleEl = useRef();
    const dropdownContentEl = useRef();
    // clickOutsideRef(dropdownContentEl, dropdownToggleEl);

    useEffect(() => {
        const toggleEl = (dropdownToggleEl) => {
            document.addEventListener("click", (e) => {
                if (dropdownToggleEl?.current?.contains(e.target)) {
                    dropdownToggleEl.current.classList.toggle("active");
                } else {
                    dropdownToggleEl.current.classList.remove("active");
                }
            });
        };
        toggleEl(dropdownToggleEl);

        return () => document.removeEventListener("click", null);
    }, []);

    const handleFoldSidebar = useCallback(() => {
        setIsFold((prevState) => !prevState);
    }, []);

    useEffect(() => {
        if (data) {
            toast.success(data?.message);
            navigate("/");
        }
        if (error) {
            toast.error(data?.message);
        }
    }, [data, error]);

    const handleLogout = () => {
        console.log("click");
        logout();
    };
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

                        <div
                            className="avatar active"
                            ref={dropdownToggleEl}
                            // onClick={(e) => e.stopPropagation()}
                        >
                            <Avatar />
                            <div className="avatar__wrapper">
                                <ul className="avatar__menu">
                                    <Link to="/dashboard/my-info">
                                        <li>
                                            <img
                                                src={UseCircle}
                                                alt="icon"
                                                className=""
                                            />
                                            <span>Thông tin cá nhân</span>
                                        </li>
                                    </Link>
                                    <Link to="/dashboard/change-password">
                                        <li>
                                            <img
                                                src={Key}
                                                alt="icon"
                                                className=""
                                            />
                                            <span>Đổi mật khẩu</span>
                                        </li>
                                    </Link>
                                    <li
                                        className="logout"
                                        onClick={handleLogout}
                                    >
                                        <img src={Logout} alt="icon" />
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
// const clickOutsideRef = (contentEl, toggleEl) => {
//     document.addEventListener("mousedown", (e) => {
//         // user click toggle
//         if (toggleEl?.current?.contains(e.target)) {
//             contentEl.current.classList.toggle("active");
//         } else {
//             // user click outside toggle and content
//             if (contentEl.current && !contentEl.current.contains(e.target)) {
//                 contentEl.current.classList.remove("active");
//             }
//         }
//     });
// };
export default DashboardLayout;
