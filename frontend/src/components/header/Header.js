import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CloseIcon, Logo, MenuIcon } from "../../assets/icons";
import useToggle from "../../hooks/useToggle";
import "./Header.scss";
const Header = () => {
    const [showMenu, toggleMenu] = useToggle(false);

    const isActive = ({ isActive }) => (isActive ? "active" : "");

    return (
        <div className="header">
            <Link to="/" className="header__logo">
                <img src={Logo} alt="Logo" />
                <span>QLĐTKH</span>
            </Link>
            <ul className="header__nav">
                <li className="header__item ">
                    <NavLink to="/" className={isActive}>
                        Trang chủ
                    </NavLink>
                </li>
                <li className="header__item">
                    <NavLink to="/news" className={isActive}>
                        Tin tức
                    </NavLink>
                </li>
                <li className="header__item">
                    <NavLink to="/forms" className={isActive}>
                        Biểu mẫu
                    </NavLink>
                </li>
                <li className="header__item">
                    <NavLink to="/login" className={isActive}>
                        Đăng nhập
                    </NavLink>
                </li>
            </ul>
            <img
                src={MenuIcon}
                alt="icon"
                className="header__menuicon"
                onClick={toggleMenu}
            />
            <div
                className={`overlay ${showMenu ? "show" : ""}`}
                onClick={toggleMenu}
            ></div>
            <div className={`header__sidebar ${showMenu ? "show" : ""}`}>
                <div className="header__nav-mobile-close">
                    <img src={CloseIcon} alt="Đóng" onClick={toggleMenu} />
                </div>
                <ul className="header__nav-mobile">
                    <li className="header__item">
                        <NavLink
                            to="/"
                            className={isActive}
                            onClick={toggleMenu}
                        >
                            Trang chủ
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink
                            to="/news"
                            className={isActive}
                            onClick={toggleMenu}
                        >
                            Tin tức
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink
                            to="/forms"
                            className={isActive}
                            onClick={toggleMenu}
                        >
                            Biểu mẫu
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink
                            to="/login"
                            className={isActive}
                            onClick={toggleMenu}
                        >
                            Đăng nhập
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
