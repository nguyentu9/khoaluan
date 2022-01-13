import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import SignUpStep from "../../components/common/SignUpStep/SignUpStep";
import "./SignUp.scss";

const Step4 = ({ goToPrev, goToNext }) => {
    const [errors, setErrors] = useState({});
    const handleGoToNext = () => {
        goToNext({ a: 1 });
    };
    const handleGoToPrev = () => {
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
                        type="text"
                        error={errors?.nationalID ? errors?.nationalID : false}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="issuedDate"
                        name="issuedDate"
                        label="Ngày cấp"
                        type="date"
                        error={errors?.issuedDate ? errors?.issuedDate : false}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="issuedPlace"
                        name="issuedPlace"
                        label="Nơi cấp"
                        type="text"
                        error={
                            errors?.issuedPlace ? errors?.issuedPlace : false
                        }
                    />
                </Form.Field>

                <div
                    className="field"
                    style={{ gridRow: "span 2", maxWidth: "320px" }}
                >
                    <label className="label">Tài khoản ngân hàng</label>
                    <Button
                        basic
                        color="blue"
                        fluid
                        style={{ marginBottom: "1rem", padding: "1.4rem 0" }}
                    >
                        Tôi không có, sẽ cung cấp sau
                    </Button>
                    <Button basic fluid style={{ padding: "1.4rem 0" }}>
                        Tôi có tài khoản
                    </Button>
                </div>

                <Form.Field>
                    <Form.Input
                        id="bankNumber"
                        name="bankNumber"
                        label="Số tài khoản"
                        type="text"
                        error={errors?.bankNumber ? errors?.bankNumber : false}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="bankBranch"
                        name="bankBranch"
                        label="Tại ngân hàng"
                        type="text"
                        error={errors?.bankBranch ? errors?.bankBranch : false}
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
