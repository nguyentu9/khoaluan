import React, { useEffect, useState } from "react";
import "./SignUp.scss";
import { toast } from "react-toastify";

import { useAccountRegisterMutation } from "../../services/user";

const SignUp = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [accountRegister, { isLoading, data, error }] =
        useAccountRegisterMutation();
    const [onBoardingState, setOnBoardingState] = useState({});
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
            toast.success(data?.message);
            setCurrentIndex((prev) => prev + 1);
        }
    }, [data, error]);

    const goToNext = (newState) => {
        const nextIndex = currentIndex + 1;
        const updatedState = {
            ...onBoardingState,
            ...newState,
        };
        console.log(
            "🚀 ~ file: index.js ~ line 31 ~ goToNext ~ updatedState",
            updatedState
        );

        setOnBoardingState(updatedState);
        if (nextIndex === 4) {
            accountRegister(updatedState);
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
                ? React.cloneElement(currentChild, {
                      goToPrev,
                      goToNext,
                      onBoardingState,
                      error,
                  })
                : currentChild}
        </div>
    );
};

export default SignUp;
