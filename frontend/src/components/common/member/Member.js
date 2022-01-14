import React from "react";
import { ChangeCircle, XCircle } from "../../../assets/icons";
import Avatar from "../avatar/Avatar";
import "./Member.scss";

const Member = ({
    name = "Unknown",
    isOwner = false,
    showAction = true,
    onChange,
    onClick,
    onDelete,
    showDel = false,
    showChange = false,
    desc,
}) => {
    return (
        <div className={`member__item`} onClick={onClick}>
            <Avatar />
            <div className="member__info">
                <div className="member__name">
                    <p>{name}</p>
                </div>
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

            <div className="member__action">
                {showChange && (
                    <img
                        src={ChangeCircle}
                        alt="icon"
                        className="member__action-change"
                        onClick={onChange}
                    />
                )}
                {showDel && (
                    <img
                        src={XCircle}
                        alt="icon"
                        className="member__action-delete"
                        onClick={onDelete}
                    />
                )}
            </div>
        </div>
    );
};

export default React.memo(Member);
