import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import SignUpStep from "../../components/common/SignUpStep/SignUpStep";
import "./SignUp.scss";
import Joi from "joi";
import messagesVN from "../../constant/validationMsg";
import { useCheckInfoStepsMutation } from "../../services/user";

const Step2 = ({ goToPrev, goToNext }) => {
    const [checkInfoSteps, { isLoading, data, error }] =
        useCheckInfoStepsMutation();
    const [gender, setGender] = useState(1);
    const [state, setState] = useState({
        fullName: "",
        birthday: "",
        phone: "",
        address: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (error?.data?.message) {
            setErrors({ ["phone"]: error?.data?.message });
        } else if (data) {
            goToNext({ gender, ...state });
        }
    }, [data, error]);

    const handleChange = ({ target }) => {
        let value = target.value;
        setState((state) => ({
            ...state,
            [target.name]: value,
        }));
        setErrors({});
    };

    const handleGoToNext = (e) => {
        e.preventDefault();
        const newState = { ...state, gender };
        const errors = validateUserSignUp(newState);

        if (errors) {
            setErrors(errors);
        } else {
            checkInfoSteps({ step: "2", data: state.phone });
        }
    };
    return (
        <>
            <SignUpStep step={2} style={{ marginTop: "2rem" }} />
            <Form className="signup__grid">
                <h3
                    className="signup__title"
                    style={{ marginTop: "2rem", textAlign: "center" }}
                >
                    THÔNG TIN CÁ NHÂN
                </h3>
                <Form.Field>
                    <Form.Input
                        id="fullName"
                        name="fullName"
                        label="Họ tên"
                        type="text"
                        value={state.fullName}
                        onChange={handleChange}
                        error={errors?.fullName ? errors?.fullName : false}
                    />
                </Form.Field>
                <Form.Group widths="equal">
                    <Form.Input
                        id="birthday"
                        name="birthday"
                        label="Ngày sinh"
                        type="date"
                        value={state.birthday}
                        onChange={handleChange}
                        error={errors?.birthday ? errors?.birthday : false}
                    />
                    <Form.Dropdown
                        id="gender"
                        name="gender"
                        label="Giới tính"
                        value={gender}
                        defaultValue={gender}
                        onChange={(e, { value }) => setGender(value)}
                        style={{ height: "41.7969px" }}
                        options={[
                            { key: 1, text: "Nam", value: 1 },
                            { key: 0, text: "Nữ", value: 0 },
                        ]}
                        selection
                        error={errors?.gender ? errors?.gender : false}
                    />
                </Form.Group>

                <Form.Field>
                    <Form.Input
                        id="phone"
                        name="phone"
                        label="Điện thoại"
                        type="text"
                        value={state.phone}
                        onChange={handleChange}
                        error={errors?.phone ? errors?.phone : false}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="address"
                        name="address"
                        label="Địa chỉ liên lạc"
                        type="text"
                        value={state.address}
                        onChange={handleChange}
                        error={errors?.address ? errors?.address : false}
                    />
                </Form.Field>
                <div className="field signup__button-submit">
                    <Button
                        type="submit"
                        primary
                        fluid
                        onClick={handleGoToNext}
                        loading={isLoading}
                    >
                        Tiếp tục
                    </Button>
                </div>
            </Form>
        </>
    );
};

const validateUserSignUp = (user) => {
    const schema = Joi.object().keys({
        fullName: Joi.string()
            .trim()
            .min(5)
            .max(40)
            .label("Họ tên")
            .required()
            .messages(messagesVN),
        birthday: Joi.date()
            .label("Ngày sinh")
            .less(new Date(Date.now() - 568024668))
            .required()
            .messages({
                ...messagesVN,
                "date.less": "Người đăng ký phải đủ 18 tuổi.",
            }),
        gender: Joi.number()
            .label("Giới tính")
            .valid(0, 1)
            .required()
            .messages({
                ...messagesVN,
                "boolean.base": "Giới tính không hợp lệ",
            }),
        phone: Joi.string()
            .label("Số điện thoại")
            .trim()
            .max(10)
            .regex(/((09|03|07|08|05)+([0-9]{8})\b)/)
            .required()
            .messages({
                ...messagesVN,
                "string.pattern.base": "Số điện thoại không hợp lệ",
            }),
        address: Joi.string()
            .trim()
            .max(100)
            .label("Địa chỉ")
            .required()
            .messages(messagesVN),
    });

    const { error } = schema.validate(user, {
        abortEarly: true,
    });

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
};
export default Step2;
