import React, { useEffect, useState } from "react";
import "./SignUp.scss";

import { useAccountRegisterMutation } from "../../services/user";
import { useSelector } from "react-redux";

const SignUp = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [accountRegister, { isLoading, data, error }] =
        useAccountRegisterMutation();
    const state = useSelector((state) => state.userSignup);
    // const [onBoardingState, setOnBoardingState] = useState();
    // useEffect(() => {
    //     window.addEventListener("beforeunload", (e) => alertUser(e));
    //     return () => window.removeEventListener("beforeunload", alertUser);
    // }, []);
    // const alertUser = (e) => {
    //     e.preventDefault();
    //     e.returnValue = "";
    // };
    useEffect(() => {
        if (data) {
            goToNext();
        }
    }, [data, error]);

    const goToNext = () => {
        const nextIndex = currentIndex + 1;

        if (nextIndex === 4) {
            accountRegister(state);
        } else if (nextIndex < children.length) {
            setCurrentIndex(nextIndex);
        }
    };

    const goToPrev = () => {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            setCurrentIndex(prevIndex);
        }
    };
    const currentChild = React.Children.toArray(children)[currentIndex];
    return (
        <div className="signup" style={{ width: "100%", height: "100%" }}>
            {React.isValidElement(currentChild)
                ? React.cloneElement(currentChild, { goToPrev, goToNext })
                : currentChild}
        </div>
    );
};

export default SignUp;
