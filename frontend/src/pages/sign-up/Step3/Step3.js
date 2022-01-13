import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import SignUpStep from "../../../components/common/SignUpStep/SignUpStep";
import "../SignUp.scss";
import Joi from "joi";
import { useGetDegreesQuery } from "../../../services/degree";
import messagesVN from "../../../constant/validationMsg";
import { useGetJobTitlesQuery } from "../../../services/jobTitle";
import { useGetMajorsQuery } from "../../../services/major";

const Step3 = ({ goToPrev, goToNext }) => {
    const {
        data: degreeArr,
        isLoading: degreeLoading,
        error: degreeErr,
    } = useGetDegreesQuery();
    const {
        data: jobTitleArr,
        isLoading: jobTitleLoading,
        error: jobTitleErr,
    } = useGetJobTitlesQuery();

    const {
        data: marjorArr,
        isLoading: marjorLoading,
        error: marjorErr,
    } = useGetMajorsQuery();

    const [state, setState] = useState({
        fullName: "",
        birthday: "",
        phone: "",
        address: "",
    });
    const [errors, setErrors] = useState({});
    const handleChange = ({ target }) => {
        let value = target.value;
        setState((state) => ({
            ...state,
            [target.name]: value,
        }));
        setErrors({});
        console.log(state);
    };

    const handleGoToNext = (e) => {
        e.preventDefault();
        const newState = { ...state };

        const errors = validateUserSignUp(newState);

        if (errors) {
            setErrors(errors);
        } else {
            goToNext(newState);
        }
    };
    const handleGoToPrev = (e) => {
        e.preventDefault();
        const newState = { ...state };
        const errors = validateUserSignUp(newState);
        if (errors) {
            setErrors(errors);
        } else {
            goToPrev(newState);
        }
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

                <Form.Field>
                    <Form.Input
                        id="userNumber"
                        name="userNumber"
                        label="Mã số cán bộ"
                        type="text"
                        error={errors?.userNumber ? errors?.userNumber : false}
                    />
                </Form.Field>

                <Form.Dropdown
                    id="degree"
                    name="degree"
                    label="Học hàm - học vị"
                    loading={degreeLoading}
                    type="text"
                    style={{ height: "41.7969px" }}
                    options={degreeArr?.map(({ id, name }) => ({
                        key: id,
                        text: name,
                        value: id,
                    }))}
                    selection
                    error={errors?.degree ? errors.degree : false}
                />
                <Form.Field>
                    <Form.Input
                        id="scientificTitle"
                        name="scientificTitle"
                        label="Chức danh khoa học"
                        type="text"
                        error={
                            errors?.scientificTitle
                                ? errors?.scientificTitle
                                : false
                        }
                    />
                </Form.Field>
                <Form.Dropdown
                    id="jobTitle"
                    name="jobTitle"
                    label="Chức vụ"
                    loading={jobTitleLoading}
                    type="text"
                    style={{ height: "41.7969px" }}
                    options={jobTitleArr?.map(({ id, name }) => ({
                        key: id,
                        text: name,
                        value: id,
                    }))}
                    selection
                    error={errors?.jobTitle ? errors?.jobTitle : false}
                />
                <Form.Dropdown
                    id="workplace"
                    name="workplace"
                    label="Đơn vị công tác"
                    type="text"
                    style={{ height: "41.7969px" }}
                    options={[
                        { key: 1, text: "Nam", value: 1 },
                        { key: 0, text: "Nữ", value: 0 },
                    ]}
                    selection
                    search
                    error={errors?.workplace ? errors?.workplace : false}
                />
                <Form.Dropdown
                    id="major"
                    name="major"
                    label="Ngành"
                    type="text"
                    loading={marjorLoading}
                    style={{ height: "41.7969px" }}
                    options={marjorArr?.map(({ id, name }) => ({
                        key: id,
                        text: name,
                        value: id,
                    }))}
                    selection
                    search
                    error={errors?.major ? errors?.major : false}
                />
                <div className="field signup__button-submit">
                    <Button type="button" onClick={handleGoToPrev}>
                        Trở lại
                    </Button>
                    <Button
                        type="submit"
                        primary
                        fluid
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
        isInsider: Joi.boolean.required(),
        isStudent: Joi.boolean.required(),
        insiderID: Joi.alternatives().conditional("isInsider", [
            {
                is: true,
                then: Joi.when("isStudent", {
                    is: false,
                    then: Joi.string()
                        .trim()
                        .regex(/^(T52-[0-9]{7})$/)
                        .required()
                        .messages({
                            ...messagesVN,
                            "string.pattern.base": "Mã số cán bộ không hợp lệ",
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
                then: Joi.string().allow(null),
            },
        ]),
        workplace: Joi.string()
            .trim()
            .label("Đơn vị công tác")
            .when("isInsider", {
                is: true,
                then: Joi.string()
                    .trim()
                    .max(36)
                    .guid({ version: "uuidv4" })
                    .required()
                    .messages(messagesVN),
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
            .messages(messagesVN),
        jobTitle: Joi.string()
            .label("Chức vụ")
            .trim()
            .max(36)
            .guid({ version: "uuidv4" })
            .messages(messagesVN),
        workplaceOutside: Joi.string()
            .label("Đơn vị công tác")
            .when("isInsider", {
                is: false,
                then: Joi.string()
                    .trim()
                    .min(5)
                    .max(50)
                    .required()
                    .messages(messagesVN),
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

export default Step3;
