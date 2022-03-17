import React, { useState } from "react";
import { ChangeCircle, Check, XCircle } from "../../../assets/icons";
import { topicRoles } from "../../../constant";
import Avatar from "../avatar/Avatar";
import "./Member.scss";
const Member = ({
    id,
    name = "Unknown",
    isOwner = false,
    onChange,
    onClick,
    onDelete,
    showDel = false,
    showChange = false,
    desc,
    role,
    currentRole,
}) => {
    const [state, setState] = useState(role);
    const newTopicRoles = { ...topicRoles };
    delete newTopicRoles["chunhiem"];
    const arrRole = Object.keys(newTopicRoles);

    const handleChange = (role) => () => {
        setState(role);
        currentRole({ id, role });
    };

    return (
        <div className={`member__item`} onClick={onClick}>
            <Avatar />
            <div className="member__info">
                <div className="member__name">
                    <p>{name}</p>
                </div>
                <span className="member__role">
                    {newTopicRoles[role]} {desc} {isOwner ? "(Bạn)" : ""}
                </span>
            </div>

            <div className="member__action">
                {showChange && (
                    <div className="member__wrapper-action-change">
                        <div className="member__dd">
                            <img
                                src={ChangeCircle}
                                alt="icon"
                                className="member__action-change"
                                onClick={onChange}
                            />
                            <div className="member__dd-list">
                                {arrRole.map((role, i) => {
                                    // if (role == "chunhiem") return;
                                    return (
                                        <div
                                            key={i}
                                            onClick={handleChange(role)}
                                            className={`member__dd-item ${
                                                role == state ? "active" : ""
                                            }`}
                                        >
                                            <img src={Check} alt="icon" />
                                            <p>{newTopicRoles[role]}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
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
