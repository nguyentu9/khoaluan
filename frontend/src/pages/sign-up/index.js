import { joiResolver } from "@hookform/resolvers/joi";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import SignUpStep from "../../components/common/SignUpStep/SignUpStep";
import useToggle from "../../hooks/useToggle";
import "./SignUp.scss";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import messageVN from "../../constant/validationMsg";
import Joi from "joi";

// TODO: Viết schema cho 4 step
const defaultValues = {
    // Step1
    email: "",
    password: "",
    passwordAgain: "",

    //Step2
    fullName: "",
};

const SignUp = () => {
    const [activeStep, setActiveStep] = useState(1); // default: 1
    const [belongToSchool, setBelongToSchool] = useToggle(true);

    const validationSchema = [
        // TODO: Validation for Step1
        Joi.object().keys({
            email: Joi.string()
                .email({ tlds: { allow: false } })
                .max(30)
                .label("Email")
                .required()
                .messages(messageVN),
            password: Joi.string()
                .min(8)
                .max(50)
                .label("Mật khẩu")
                .required()
                .messages(messageVN),
            passwordAgain: Joi.valid(Joi.ref("password")).required().messages({
                "any.only": "Mật khẩu không khớp",
            }),
        }),
        // TODO: Validation for Step2
        Joi.object().keys({}),
        // TODO: Validation for Step3
        // TODO: Validation for Step4
    ];
    const methods = useForm({
        shouldUnregister: false,
        defaultValues,
        resolver: joiResolver(validationSchema[activeStep - 1]),
        mode: "onChange",
    });
    const { handleSubmit, trigger } = methods;

    const handleNext = async () => {
        // TODO: Kiểm tra form có valid qua hàm trigger
        const isStepValid = await trigger();
        console.log(isStepValid);
        if (isStepValid) setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };
    const onSubmit = (data) => console.log(data);

    return (
        <div className="signup">
            <SignUpStep step={activeStep} style={{ marginTop: "2rem" }} />

            <FormProvider {...methods}>
                <Form
                    className="signup__grid"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {
                        [<Step1 />, <Step2 />, <Step3 />, <Step4 />][
                            activeStep - 1
                        ]
                    }
                    <div>
                        {activeStep === 1 && (
                            <>
                                <Button
                                    type="submit"
                                    primary
                                    fluid
                                    onClick={handleNext}
                                >
                                    Tiếp tục
                                </Button>
                                <div className="redirect__link">
                                    <span>Bạn đã có tài khoản? </span>
                                    <Link to="/login">Đăng nhập</Link>
                                </div>
                            </>
                        )}
                        {activeStep > 1 && (
                            <>
                                <Button type="button" onClick={handleBack}>
                                    Trở lại
                                </Button>
                                <Button
                                    type="submit"
                                    primary
                                    onClick={handleNext}
                                >
                                    Tiếp tục
                                </Button>
                            </>
                        )}
                    </div>
                </Form>
            </FormProvider>
        </div>
    );
};

export default SignUp;
