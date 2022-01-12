import React, { forwardRef } from "react";
import { UserAdd } from "../../../assets/icons";
import "./AddUser.scss";
const AddUser = ({ onHandleClick }, ref) => {
    return (
        <div onClick={onHandleClick} className="adduser__wrapper" ref={ref}>
            <img src={UserAdd} alt="add" className="adduser__img" />
            <p className="adduser__text">Thêm thành viên</p>
        </div>
    );
};

export default forwardRef(AddUser);
