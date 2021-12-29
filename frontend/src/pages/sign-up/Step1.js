import React from "react";
import { useFormContext } from "react-hook-form";
import { Button, Form } from "semantic-ui-react";
import useToggle from "../../hooks/useToggle";

const Step1 = () => {
    const [belongToSchool, setBelongToSchool] = useToggle(true);
    const { register, formState } = useFormContext();
    const { errors } = formState;
    console.log(formState);
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
                    name="email"
                    label="Email"
                    type="email"
                    {...register("email")}
                    error={
                        errors?.email?.message
                            ? { content: errors.email.message }
                            : false
                    }
                />
            </Form.Field>
            <Form.Field>
                <Form.Input
                    id="password"
                    label="Mật khẩu"
                    type="password"
                    {...register("password")}
                    error={
                        errors?.password?.message
                            ? { content: errors.password.message }
                            : false
                    }
                />
            </Form.Field>
            <Form.Field>
                <Form.Input
                    id="passwordAgain"
                    name="passwordAgain"
                    label="Nhập lại mật khẩu"
                    type="password"
                    {...register("passwordAgain")}
                    error={
                        errors?.passwordAgain?.message
                            ? { content: errors.passwordAgain.message }
                            : false
                    }
                />
            </Form.Field>
        </>
    );
};

export default Step1;
