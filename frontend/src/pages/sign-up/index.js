import React from "react";
import { Outlet } from "react-router-dom";
import "./SignUp.scss";

const SignUp = () => {
    return (
        <div className="signup" style={{ width: "100%", height: "100%" }}>
            <Outlet></Outlet>
        </div>
    );
};

export default SignUp;
