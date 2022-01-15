import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import SignUpStep from "../../../components/common/SignUpStep/SignUpStep";
import "../SignUp.scss";
import Joi from "joi";
import messagesVN from "../../../constant/validationMsg";
import Officer from "./Officer";
import Student from "./Student";
import Outsider from "./Outsider";
import { useSelector } from "react-redux";
import { updateInfoRegister } from "../../../redux/userSignUpSlice";
import { useCheckInfoStepsMutation } from "../../../services/user";
import { useDispatch } from "react-redux";

const Step3 = ({ goToPrev, goToNext }) => {
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const isInsider = useSelector(({ userSignup }) => userSignup.isInsider);
    const isStudent = useSelector(({ userSignup }) => userSignup.isStudent);
    const [checkInfoSteps, { isLoading, data, error }] =
        useCheckInfoStepsMutation();

    const [state, setState] = useState({
        scientificTitle: "",
        workplaceOutside: "",
        insiderID: "",
        degree: "",
        jobTitle: "",
        workplace: "",
        major: "",
    });

    useEffect(() => {
        if (error?.data?.message) {
            setErrors({ ["insiderID"]: error?.data?.message });
        } else if (data) {
            dispatch(updateInfoRegister(state));
            goToNext();
        }
    }, [data, error]);

    const handleChange = (event, result) => {
        const { name, value } = result || event.target;
        setState({ ...state, [name]: value });
        setErrors({});
    };

    const handleGoToNext = (e) => {
        e.preventDefault();
        const newState = { ...state, isInsider, isStudent };
        const errors = validateUserSignUp(newState);
        console.log(
            "🚀 ~ file: index.js ~ line 64 ~ handleGoToNext ~ errors",
            errors
        );
        if (errors) {
            setErrors(errors);
        } else if (isInsider) {
            checkInfoSteps({ step: "3", data: state.insiderID });
        } else {
            dispatch(updateInfoRegister(state));
            goToNext();
        }
    };
    // const handleGoToPrev = (e) => {
    //     e.preventDefault();
    //     goToPrev();
    // };

    const renderByRole = () => {
        if (!isInsider)
            return <Outsider errors={errors} handleChange={handleChange} />;
        else if (isInsider & !isStudent)
            return <Officer errors={errors} handleChange={handleChange} />;
        else if (isInsider & isStudent)
            return (
                <Student
                    errors={errors}
                    handleChange={handleChange}
                    currentWorkplace={state.workplace}
                />
            );
    };

    return (
        <>
            <SignUpStep step={3} style={{ marginTop: "2rem" }} />
            <Form className="signup__grid">
                <h3
                    className="signup__title"
                    style={{ marginTop: "2rem", textAlign: "center" }}
                >
                    THÔNG TIN CÁ NHÂN
                </h3>
                {renderByRole()}

                <div className="field signup__button-submit">
                    {/* <Button type="button" onClick={handleGoToPrev}>
                        Trở lại
                    </Button> */}
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
const validateUserSignUp = (user) => {
    const schema = Joi.object().keys({
        isInsider: Joi.boolean().required(),
        isStudent: Joi.number().required(),
        insiderID: Joi.alternatives()
            .conditional("isInsider", [
                {
                    is: true,
                    then: Joi.when("isStudent", {
                        is: 0,
                        then: Joi.string()
                            .trim()
                            .regex(/^(T52-[0-9]{7})$/)
                            .required()
                            .messages({
                                ...messagesVN,
                                "string.pattern.base":
                                    "Mã số cán bộ không hợp lệ",
                            }),
                        otherwise: Joi.string()
                            .trim()
                            .regex(/^0[0-9]{8}$/)
                            .required()
                            .messages({
                                ...messagesVN,
                                "string.pattern.base":
                                    "Mã số sinh viên không hợp lệ",
                            }),
                    }),
                },
                {
                    is: false,
                    then: Joi.allow(null),
                },
            ])
            .label("Mã số")
            .messages(messagesVN),
        workplace: Joi.string()
            .label("Đơn vị công tác")
            .allow("")
            .trim()
            .when("isInsider", {
                is: true,
                then: Joi.string()
                    .required()
                    .trim()
                    .max(36)
                    .guid({ version: "uuidv4" }),
            })
            .messages(messagesVN),
        major: Joi.string()
            .label("Chuyên ngành")
            .required()
            .trim()
            .max(36)
            .guid({ version: "uuidv4" })
            .messages(messagesVN),
        degree: Joi.string()
            .label("Học hàm - Học vị")
            .allow("")
            .when("isStudent", {
                is: false,
                then: Joi.string()
                    .trim()
                    .max(36)
                    .guid({ version: "uuidv4" })
                    .required()
                    .messages(messagesVN),
            }),
        scientificTitle: Joi.string()
            .label("Chức danh khoa học")
            .max(50)
            .allow("")
            .messages(messagesVN),
        jobTitle: Joi.string()
            .label("Chức vụ")
            .trim()
            .allow("")
            .messages(messagesVN),
        workplaceOutside: Joi.string()
            .label("Đơn vị công tác")
            .allow(null)
            .trim()
            .min(5)
            .max(50)
            .required()
            .when("isInsider", {
                is: true,
                then: Joi.allow("").messages(messagesVN),
            })
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

export default Step3;
