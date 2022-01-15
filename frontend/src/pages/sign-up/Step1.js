import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import SignUpStep from "../../components/common/SignUpStep/SignUpStep";
import Joi from "joi";
import messagesVN from "../../constant/validationMsg";
import "./SignUp.scss";
import { useCheckInfoStepsMutation } from "../../services/user";

const Step1 = ({ goToNext }) => {
    const [checkInfoSteps, { isLoading, data, error }] =
        useCheckInfoStepsMutation();
    const [isInsider, setInsider] = useState(true);
    const [state, setState] = useState({
        email: "",
        password: "",
        passwordAgain: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (error?.data?.message) {
            setErrors({ ["email"]: error?.data?.message });
        } else if (data) {
            const regex = new RegExp(/^\w+\d+(@tgu.edu.vn)$/);
            const isStudent = regex.test(state.email) ? 1 : 0;
            goToNext({ isStudent, isInsider, ...state });
        }
    }, [data, error]);

    const handleChange = ({ target }) => {
        const value = target.value;
        setState((state) => ({
            ...state,
            [target.name]: value,
        }));
        setErrors({});
    };

    const handleGoToNext = async (e) => {
        const { email, password, passwordAgain } = state;
        const errors = validateUserSignUp({
            isInsider,
            email,
            password,
            passwordAgain,
        });

        if (isInsider === false && email?.includes("@tgu.edu.vn")) {
            setErrors({ ...errors, email: "Email TGU chỉ dùng trong trường!" });
        }
        if (errors) {
            setErrors(errors);
        } else {
            checkInfoSteps({ step: "1", data: email });
        }
    };

    const handleSetInsider = (e) => () => {
        setInsider(e);
        setErrors();
    };

    return (
        <>
            <SignUpStep step={1} style={{ marginTop: "2rem" }} />
            <Form className="signup__grid">
                <h3
                    className="signup__title"
                    style={{ marginTop: "2rem", textAlign: "center" }}
                >
                    TÀI KHOẢN
                </h3>
                <Button.Group className="signup__buttongroup">
                    <Button
                        primary={isInsider}
                        basic={!isInsider}
                        onClick={handleSetInsider(true)}
                    >
                        Trong Trường
                    </Button>
                    <Button
                        primary={!isInsider}
                        basic={isInsider}
                        onClick={handleSetInsider(false)}
                    >
                        Ngoài Trường
                    </Button>
                </Button.Group>
                <Form.Field>
                    <Form.Input
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        value={state.email}
                        onChange={handleChange}
                        error={errors?.email ? errors.email : false}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="password"
                        name="password"
                        label="Mật khẩu"
                        type="password"
                        value={state.password}
                        onChange={handleChange}
                        error={errors?.password ? errors.password : false}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="passwordAgain"
                        name="passwordAgain"
                        label="Nhập lại mật khẩu"
                        type="password"
                        value={state.passwordAgain}
                        onChange={handleChange}
                        error={
                            errors?.passwordAgain ? errors.passwordAgain : false
                        }
                    />
                </Form.Field>

                <div>
                    <Button
                        type="submit"
                        primary
                        fluid
                        loading={isLoading}
                        onClick={handleGoToNext}
                    >
                        Tiếp tục
                    </Button>
                    <div className="redirect__link">
                        <span>Bạn đã có tài khoản? </span>
                        <Link to="/login">Đăng nhập</Link>
                    </div>
                </div>
            </Form>
        </>
    );
};

const validateUserSignUp = (user) => {
    const schema = Joi.object().keys({
        isInsider: Joi.boolean().required().messages(messagesVN),
        email: Joi.alternatives()
            .conditional("isInsider", [
                {
                    is: true,
                    then: Joi.string()
                        .email({ tlds: { allow: false } })
                        .trim()
                        .label("Email")
                        .regex(/^[A-Za-z0-9._%+-]+@tgu.edu.vn$/)
                        .max(40)
                        .required()
                        .messages({
                            ...messagesVN,
                            "string.pattern.base":
                                "Email không hợp lệ. Vui lòng dùng email của TGU",
                        }),
                },
                {
                    is: false,
                    then: Joi.string()
                        .label("Email")
                        .trim()
                        .email({ tlds: { allow: false } })
                        .max(40)
                        .required()
                        .messages(messagesVN),
                },
            ])
            .required()
            .messages(messagesVN),
        password: Joi.string()
            .min(8)
            .max(30)
            .label("Mật khẩu")
            .required()
            .messages(messagesVN),
        passwordAgain: Joi.string()
            .required()
            .label("Mật khẩu nhập lại")
            .valid(Joi.ref("password"))
            .messages({
                ...messagesVN,
                "any.only": "Mật khẩu không khớp",
            }),
    });

    const { error } = schema.validate(user, {
        abortEarly: true,
    });

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
};

export default Step1;
