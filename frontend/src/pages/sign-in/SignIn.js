import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid } from "semantic-ui-react";
import { ImageSignIn } from "../../assets/icons";
import "./SignIn.scss";

export const SignIn = () => {
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
                    <Form>
                        <h4 className="signin__form-title">ĐĂNG NHẬP</h4>
                        <Form.Field>
                            <Form.Input
                                id="email"
                                label="Email"
                                type="email"
                            ></Form.Input>
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                label="Mật khẩu"
                                type="password"
                                // error={{ content: "asdfasdf" }}
                            ></Form.Input>
                        </Form.Field>
                        <Link to="/forgot-password" className="forgot-password">
                            Quên mật khẩu
                        </Link>
                        <Button primary type="submit" className="btn__submit">
                            Đăng nhập
                        </Button>

                        <div className="signup">
                            <span>Bạn chưa có tài khoản? </span>
                            <Link to="/sign-up">Đăng ký</Link>
                        </div>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};
