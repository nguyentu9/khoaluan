import React, { useEffect, useState } from "react";
import "./SignUp.scss";

const SignUp = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     window.addEventListener("beforeunload", (e) => alertUser(e));
    //     return () => window.removeEventListener("beforeunload", alertUser);
    // }, []);
    // const alertUser = (e) => {
    //     e.preventDefault();
    //     e.returnValue = "";
    // };

    const goToNext = () => {
        const nextIndex = currentIndex + 1;

        if (nextIndex < children.length) {
            setCurrentIndex(nextIndex);
        } else {
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
