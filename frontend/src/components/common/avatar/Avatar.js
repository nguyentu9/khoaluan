import React, { forwardRef } from "react";
import { User } from "../../../assets/icons";
import "./Avatar.scss";
const Avatar = ({ srcImg = User }, ref) => {
    return (
        <div className="member__avatar" ref={ref}>
            <img src={srcImg} alt="icon" />
        </div>
    );
};

export default forwardRef(Avatar);
