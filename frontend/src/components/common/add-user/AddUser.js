import React from "react";
import { UserAdd } from "../../../assets/icons";
import "./AddUser.scss";
const AddUser = ({ onHandleClick }) => {
    return (
        <div onClick={onHandleClick} className="adduser__wrapper">
            <img src={UserAdd} alt="add" className="adduser__img" />
            <p className="adduser__text">Thêm thành viên</p>
        </div>
    );
};

export default AddUser;
