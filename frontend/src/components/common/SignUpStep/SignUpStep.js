import React, { memo } from "react";
import { CheckCircle } from "../../../assets/icons";
import "./SignUpStep.scss";

const stepArr = [1, 2, 3, 4];
const SignUpStep = ({ step = 1, ...props }) => {
    return (
        <div {...props} className="step-wrapper">
            {stepArr.map((value, index) => (
                <StepItem key={index} value={value} success={value <= step - 1}>
                    {stepArr.length - 1 !== index ? (
                        <div className="step-items-divider"></div>
                    ) : (
                        <></>
                    )}
                </StepItem>
            ))}
        </div>
    );
};

const StepItem = ({ value, success = false, children }) => {
    return (
        <>
            {success ? (
                <div className="step-items success">
                    <div className="step-items-icon">
                        <img src={CheckCircle} alt="check" />
                    </div>
                </div>
            ) : (
                <div className="step-items">
                    <p>{value}</p>
                </div>
            )}
            {children}
        </>
    );
};

export default memo(SignUpStep);
