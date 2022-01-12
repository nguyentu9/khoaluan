import React from "react";
import { Button, Form } from "semantic-ui-react";
import { CloseIcon } from "../../../assets/icons";
import "./SidebarFilter.scss";

const SidebarFilter = ({ isVisible = true, onHandleClick, children }) => {
    return (
        <div
            className={`ui sidebar overlay right menu animating ${
                isVisible ? "visible" : ""
            } `}
        >
            <div style={{ display: "block", width: "100%", padding: "0 8px" }}>
                <div className="filter__header">
                    <h3>Bộ lọc</h3>
                    <div className="filter__close" onClick={onHandleClick}>
                        <img src={CloseIcon} alt="close" />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default SidebarFilter;
