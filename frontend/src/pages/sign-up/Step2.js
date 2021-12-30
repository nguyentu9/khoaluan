import React from "react";
import { Button, Form } from "semantic-ui-react";
import SignUpStep from "../../components/common/SignUpStep/SignUpStep";
import "./SignUp.scss";

const Step2 = () => {
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
                        // {...register("fullName")}
                        // error={
                        //     errors?.fullName?.message
                        //         ? { content: errors.fullName.message }
                        //         : false
                        // }
                    />
                </Form.Field>
                <Form.Group widths="equal">
                    <Form.Input
                        id="birthDay"
                        name="birthDay"
                        label="Ngày sinh"
                        type="date"
                        // {...register("birthDay")}
                        // error={
                        //     errors?.birthDay?.message
                        //         ? { content: errors.birthDay.message }
                        //         : false
                        // }
                    />
                    <Form.Dropdown
                        id="gender"
                        name="gender"
                        label="Giới tính"
                        style={{ height: "41.7969px" }}
                        options={[
                            { key: 1, text: "Nam", value: 1 },
                            { key: 0, text: "Nữ", value: 0 },
                        ]}
                        selection

                        // {...register("gender")}
                        // error={
                        //     errors?.gender?.message
                        //         ? { content: errors.gender.message }
                        //         : false
                        // }
                    />
                </Form.Group>

                <Form.Field>
                    <Form.Input
                        id="phone"
                        name="phone"
                        label="Điện thoại"
                        type="text"
                        // {...register("phone")}
                        // error={
                        //     errors?.phone?.message
                        //         ? { content: errors.phone.message }
                        //         : false
                        // }
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="address"
                        name="addres"
                        label="Địa chỉ liên lạc"
                        type="text"
                        // {...register("address")}
                        // error={
                        //     errors?.address?.message
                        //         ? { content: errors.address.message }
                        //         : false
                        // }
                    />
                </Form.Field>
                <div>
                    <Button type="button">Trở lại</Button>
                    <Button type="submit" primary>
                        Tiếp tục
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default Step2;
