import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import SignUpStep from "../../components/common/SignUpStep/SignUpStep";
import "./SignUp.scss";
import Joi from "joi";
import messagesVN from "../../constant/validationMsg";
import { updateInfoRegister } from "../../redux/userSignUpSlice";
import { useCheckInfoStepsMutation } from "../../services/user";
import { useDispatch } from "react-redux";

const Step4 = ({ goToPrev, goToNext }) => {
    const dispatch = useDispatch();
    const [checkInfoSteps, { isLoading, data, error }] =
        useCheckInfoStepsMutation();
    const [state, setState] = useState({
        nationalID: "",
        issuedDate: "",
        issuedPlace: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (error?.data?.message) {
            setErrors({ ["nationalID"]: error?.data?.message });
        } else if (data) {
            dispatch(updateInfoRegister({ ...state }));
            goToNext();
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

        const errors = validateUserSignUp(state);
        if (errors) {
            setErrors(errors);
        } else {
            checkInfoSteps({ step: "4", data: state.nationalID });
        }
    };
    const handleGoToPrev = (e) => {
        e.preventDefault();
        goToPrev();
    };

    return (
        <>
            <SignUpStep step={4} style={{ marginTop: "2rem" }} />
            <Form className="signup__grid">
                <h3
                    className="signup__title"
                    style={{ marginTop: "2rem", textAlign: "center" }}
                >
                    THÔNG TIN CÁ NHÂN
                </h3>
                <Form.Field>
                    <Form.Input
                        id="nationalID"
                        name="nationalID"
                        label="CMND/CCCD"
                        type="number"
                        onChange={handleChange}
                        error={errors?.nationalID ? errors?.nationalID : false}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="issuedDate"
                        name="issuedDate"
                        label="Ngày cấp"
                        type="date"
                        onChange={handleChange}
                        error={errors?.issuedDate ? errors?.issuedDate : false}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="issuedPlace"
                        name="issuedPlace"
                        label="Nơi cấp"
                        type="text"
                        onChange={handleChange}
                        error={
                            errors?.issuedPlace ? errors?.issuedPlace : false
                        }
                    />
                </Form.Field>
                <div className="field signup__button-submit">
                    <Button type="button" onClick={handleGoToPrev}>
                        Trở lại
                    </Button>
                    <Button
                        type="submit"
                        primary
                        fluid
                        loading={isLoading}
                        onClick={handleGoToNext}
                    >
                        Tiếp tục
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default Step4;

const validateUserSignUp = (user) => {
    const schema = Joi.object().keys({
        nationalID: Joi.string()
            .label("CMND")
            .trim()
            .min(9)
            .max(12)
            .regex(/^(\b(\d{9})\b|\b(\d{12})\b)$/)
            .required()
            .messages({
                ...messagesVN,
                "string.pattern.base": "CMND/CCCD phải 9 hoặc 12 ký tự số",
            }),
        issuedDate: Joi.date()
            .label("Ngày cấp")
            .less(Date.now())
            .required()
            .messages({
                ...messagesVN,
                "date.less": "Ngày cấp phải thời gian hiện tại",
            }),
        issuedPlace: Joi.string()
            .label("Nơi cấp")
            .trim()
            .min(5)
            .max(30)
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
