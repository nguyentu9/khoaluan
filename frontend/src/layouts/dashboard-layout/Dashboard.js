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

    useEffect(() => {
        const toggleEl = (element) => {
            document.addEventListener(
                "mousedown",
                (e) => {
                    if (element?.current?.contains(e.target)) {
                        element?.current?.classList?.toggle("active");
                    } else {
                        element?.current?.classList?.remove("active");
                    }
                    switch (e.target.dataset.type) {
                        case "my-info": {
                            navigate(`/dashboard/my-info`);
                            break;
                        }
                        case "change-password": {
                            navigate(`/dashboard/change-password`);
                            break;
                        }
                        case "logout": {
                            logout();
                            break;
                        }
                        default: {
                        }
                    }
                },
                true
            );
        };
        toggleEl(dropdownToggleEl);
        return () => {
            document.removeEventListener("click", null);
        };
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

                        <div className="avatar" ref={dropdownToggleEl}>
                            <Avatar />
                            <div className="avatar__wrapper">
                                <ul className="avatar__menu">
                                    <li data-type="my-info">
                                        <img
                                            src={UseCircle}
                                            alt="icon"
                                            className=""
                                            data-type="my-info"
                                        />
                                        <span data-type="my-info">
                                            Thông tin cá nhân
                                        </span>
                                    </li>

                                    <li data-type="change-password">
                                        <img
                                            src={Key}
                                            alt="icon"
                                            className=""
                                            data-type="change-password"
                                        />
                                        <span data-type="change-password">
                                            Đổi mật khẩu
                                        </span>
                                    </li>

                                    <li className="logout" data-type="logout">
                                        <img
                                            src={Logout}
                                            alt="icon"
                                            data-type="logout"
                                        />
                                        <span data-type="logout">
                                            Đăng xuất
                                        </span>
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
