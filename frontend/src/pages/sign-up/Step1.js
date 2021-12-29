import React from "react";
import { Button, Form } from "semantic-ui-react";
import useToggle from "../../hooks/useToggle";

const Step1 = ({ register }) => {
    const [belongToSchool, setBelongToSchool] = useToggle(true);
    return (
        <>
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
                    label="Email"
                    type="email"
                    {...register("email")}
                />
            </Form.Field>
            <Form.Field>
                <Form.Input id="password" label="Mật khẩu" type="password" />
            </Form.Field>
            <Form.Field>
                <Form.Input
                    id="passwordAgain"
                    label="Nhập lại mật khẩu"
                    type="password"
                />
            </Form.Field>
        </>
    );
};

export default Step1;
