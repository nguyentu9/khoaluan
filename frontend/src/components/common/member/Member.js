import React from "react";
import { ChangeCircle, User, XCircle } from "../../../assets/icons";
import Avartar from "../avartar/Avartar";
import "./Member.scss";

const Member = ({
    name = "Unknown",
    role = "Chủ Nhiệm",
    isOwner = false,
    onChange,
    onDelete,
}) => {
    return (
        <div className="member__item">
            <Avartar />
            <div className="member__info">
                <h4 className="member__name">{name}</h4>
                <span className="member__role">
                    {role} {isOwner ? "(Bạn)" : ""}
                </span>
            </div>
            <div className="member__action">
                <img
                    src={ChangeCircle}
                    alt="icon"
                    className="member__action-change"
                    onClick={onChange}
                />
                <img
                    src={XCircle}
                    alt="icon"
                    className="member__action-delete"
                    onClick={onDelete}
                />
            </div>
        </div>
    );
};

export default React.memo(Member);
