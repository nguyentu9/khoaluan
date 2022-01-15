import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";
import { RegisterConfirmedIcon } from "../../assets/icons";
import SignUpStep from "../../components/common/SignUpStep/SignUpStep";
import "./SignUp.scss";
import { useNavigate } from "react-router-dom";
const StepFinal = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login");
    };

    useEffect(() => {
        const timer = setTimeout(() => navigate("/login"), 3000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <>
            <SignUpStep step={5} style={{ marginTop: "2rem" }} />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="stepfinal__wrapper">
                            <img src={RegisterConfirmedIcon} alt="img" />
                            <div className="stepfinal__message">
                                <h3>Đăng ký thành công</h3>
                                <p>
                                    Tự chuyển hướng về trang Đăng nhập sau 3
                                    giây...
                                </p>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    primary
                                    fluid
                                    onClick={handleClick}
                                >
                                    Đăng nhập ngay
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepFinal;
