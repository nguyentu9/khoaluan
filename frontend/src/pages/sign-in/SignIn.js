import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Grid, Message } from "semantic-ui-react";
import { ImageSignIn } from "../../assets/icons";
import { useLoginMutation } from "../../services/user";
import Joi from "joi";
import "./SignIn.scss";
import messageVN from "../../constant/validationMsg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateInfo } from "../../redux/userSlice";

export const SignIn = () => {
    const [login, { isLoading, data, error }] = useLoginMutation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            dispatch(updateInfo(data));
            navigate(`/dashboard`);
        }

        if (error?.data) {
            console.log(error);
            setPassword("");
        }
    }, [data, error, dispatch, navigate]);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const validateSubmit = () => {
        const { error } = schema.validate({ email, password });
        if (!error) return null;
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateSubmit();
        if (errors) return;
        login({ email, password });
    };

    return (
        <Grid container className="signin signin__container">
            <Grid.Row columns={2} stretched>
                <Grid.Column
                    mobile={16}
                    tablet={8}
                    computer={10}
                    className="signin__left"
                >
                    <div className="signin__img">
                        <img src={ImageSignIn} alt="" />
                    </div>
                </Grid.Column>
                <Grid.Column
                    mobile={16}
                    tablet={8}
                    computer={6}
                    stretched
                    verticalAlign={"middle"}
                    className="signin__right"
                >
                    <Form onSubmit={handleSubmit}>
                        <h4 className="signin__form-title">ĐĂNG NHẬP</h4>

                        {error ? (
                            <Message negative>
                                <Message.Header>
                                    {error?.data?.message
                                        ? error?.data?.message
                                        : "Kết nối thất bại."}
                                </Message.Header>
                            </Message>
                        ) : (
                            <></>
                        )}
                        <Form.Field>
                            <Form.Input
                                id="email"
                                label="Email"
                                type="email"
                                value={email}
                                onChange={handleChangeEmail}
                            ></Form.Input>
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                label="Mật khẩu"
                                type="password"
                                onChange={handleChangePassword}
                            ></Form.Input>
                        </Form.Field>
                        <Link to="/forgot-password" className="forgot-password">
                            Quên mật khẩu
                        </Link>
                        <Button
                            primary
                            type="submit"
                            className="btn__submit"
                            disabled={validateSubmit()}
                            loading={isLoading}
                        >
                            Đăng nhập
                        </Button>

                        <div className="redirect__link">
                            <span>Bạn chưa có tài khoản? </span>
                            <Link to="/sign-up">Đăng ký</Link>
                        </div>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};
const schema = Joi.object({
    email: Joi.string()
        .label("Email")
        .trim()
        .min(8)
        .max(40)
        .email({ tlds: { allow: false } })
        .required()
        .messages(messageVN),
    password: Joi.string()
        .label("Mật khẩu")
        .trim()
        .min(6)
        .max(40)
        .required()
        .messages(messageVN),
});
