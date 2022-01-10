import React from "react";

const UserCountLabel = ({ currentNum = 0, ...props }) => {
    return (
        <div
            {...props}
            style={{
                fontWeight: "500",
            }}
        >
            <span>Thành viên</span>: <span>{currentNum} / 5</span>
        </div>
    );
};

export default UserCountLabel;
