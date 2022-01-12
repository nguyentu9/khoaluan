import React from "react";
import { ChangeCircle, XCircle } from "../../../assets/icons";
import Avatar from "../avatar/Avatar";
import "./Member.scss";

const Member = ({
    name = "Unknown",
    isOwner = false,
    showAction = true,
    onChange,
    onDelete,
    desc,
}) => {
    return (
        <div className="member__item">
            <Avatar />
            <div className="member__info">
                <h4 className="member__name">{name}</h4>
                <span className="member__role">
                    {desc} {isOwner ? "(Bạn)" : ""}
                </span>
            </div>
            {showAction && (
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
            )}
        </div>
    );
};

export default React.memo(Member);
