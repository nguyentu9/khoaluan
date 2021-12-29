import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import SignUpStep from "../../components/common/SignUpStep/SignUpStep";
import useToggle from "../../hooks/useToggle";
import "./SignUp.scss";
import Step1 from "./Step1";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const [step, setStep] = useState(1);
    const [belongToSchool, setBelongToSchool] = useToggle(true);

    return (
        <div
            className="signup"
            onSubmit={handleSubmit((data) => console.log(data))}
        >
            <SignUpStep step={step} style={{ marginTop: "2rem" }} />

            <Form className="signup__grid">
                <Step1 register={register} />

                <div>
                    <Button type="submit" primary fluid>
                        Tiếp tục
                    </Button>

                    {step === 1 && (
                        <div className="redirect__link">
                            <span>Bạn đã có tài khoản? </span>
                            <Link to="/login">Đăng nhập</Link>
                        </div>
                    )}
                </div>
            </Form>
        </div>
    );
};

export default SignUp;
