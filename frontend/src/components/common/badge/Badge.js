import React from "react";
import "./Badge.scss";
const Badge = ({ title = "", status = "normal" }) => {
    return <div className={`badge ${status}`}>{title}</div>;
};

export default Badge;
