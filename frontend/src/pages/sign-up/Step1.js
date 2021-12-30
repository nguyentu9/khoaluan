import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import SignUpStep from "../../components/common/SignUpStep/SignUpStep";
import useToggle from "../../hooks/useToggle";
import "./SignUp.scss";

const Step1 = () => {
    const [belongToSchool, setBelongToSchool] = useToggle(true);
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
                        primary={belongToSchool}
                        basic={!belongToSchool}
                        onClick={setBelongToSchool}
                    >
                        Trong Trường
                    </Button>
                    <Button
                        primary={!belongToSchool}
                        basic={belongToSchool}
                        onClick={setBelongToSchool}
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
                        // {...register("email")}
                        // error={
                        //     errors?.email?.message
                        //         ? { content: errors.email.message }
                        //         : false
                        // }
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="password"
                        label="Mật khẩu"
                        type="password"
                        // {...register("password")}
                        // error={
                        //     errors?.password?.message
                        //         ? { content: errors.password.message }
                        //         : false
                        // }
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="passwordAgain"
                        name="passwordAgain"
                        label="Nhập lại mật khẩu"
                        type="password"
                        // {...register("passwordAgain")}
                        // error={
                        //     errors?.passwordAgain?.message
                        //         ? { content: errors.passwordAgain.message }
                        //         : false
                        // }
                    />
                </Form.Field>

                <div>
                    <Button type="submit" primary fluid>
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

export default Step1;
