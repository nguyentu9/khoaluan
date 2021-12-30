import React from "react";
import { Button, Form } from "semantic-ui-react";
import SignUpStep from "../../components/common/SignUpStep/SignUpStep";
import "./SignUp.scss";

const Step4 = () => {
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
                        id="IDCard"
                        name="IDCard"
                        label="CMND/CCCD"
                        type="text"
                        // {...register("IDCard")}
                        // error={
                        //     errors?.IDCard?.message
                        //         ? { content: errors.IDCard.message }
                        //         : false
                        // }
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="issuedDate"
                        name="issuedDate"
                        label="Ngày cấp"
                        type="date"
                        // {...register("issuedDate")}
                        // error={
                        //     errors?.issuedDate?.message
                        //         ? { content: errors.issuedDate.message }
                        //         : false
                        // }
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="issuedPlace"
                        name="issuedPlace"
                        label="Nơi cấp"
                        type="text"
                        // {...register("issuedPlace")}
                        // error={
                        //     errors?.issuedPlace?.message
                        //         ? { content: errors.issuedPlace.message }
                        //         : false
                        // }
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
                        id="accountNumber"
                        name="accountNumber"
                        label="Số tài khoản"
                        type="text"
                        // {...register("accountNumber")}
                        // error={
                        //     errors?.accountNumber?.message
                        //         ? { content: errors.accountNumber.message }
                        //         : false
                        // }
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="bankAffiliate"
                        name="bankAffiliate"
                        label="Tại ngân hàng"
                        type="text"
                        // {...register("bankAffiliate")}
                        // error={
                        //     errors?.bankAffiliate?.message
                        //         ? { content: errors.bankAffiliate.message }
                        //         : false
                        // }
                    />
                </Form.Field>
                <div className="field signup__button-submit">
                    <Button type="button">Trở lại</Button>
                    <Button type="submit" primary>
                        Hoàn thành
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default Step4;
