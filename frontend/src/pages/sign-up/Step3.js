import React from "react";
import { Button, Form } from "semantic-ui-react";
import SignUpStep from "../../components/common/SignUpStep/SignUpStep";
import "./SignUp.scss";

const Step3 = () => {
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
                {/* 
                TODO: Kiểm tra mã số cán bộ: T52-(7 ký tự)
                TODO: Kiểm tra mã sinh viên: 9 chữ số
                */}
                <Form.Field>
                    <Form.Input
                        id="userNumber"
                        name="userNumber"
                        label="Mã số cán bộ"
                        type="text"
                        // {...register("userNumber")}
                        // error={
                        //     errors?.userNumber?.message
                        //         ? { content: errors.userNumber.message }
                        //         : false
                        // }
                    />
                </Form.Field>

                <Form.Dropdown
                    id="degree"
                    name="degree"
                    label="Học hàm - học vị"
                    type="text"
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
                <Form.Field>
                    <Form.Input
                        id="scientificTitle"
                        name="scientificTitle"
                        label="Chức danh khoa học"
                        type="text"
                        // {...register("scientificTitle")}
                        // error={
                        //     errors?.scientificTitle?.message
                        //         ? { content: errors.scientificTitle.message }
                        //         : false
                        // }
                    />
                </Form.Field>
                <Form.Dropdown
                    id="position"
                    name="position"
                    label="Chức vụ"
                    type="text"
                    style={{ height: "41.7969px" }}
                    options={[
                        { key: 1, text: "Nam", value: 1 },
                        { key: 0, text: "Nữ", value: 0 },
                    ]}
                    selection
                    // {...register("position")}
                    // error={
                    //     errors?.position?.message
                    //         ? { content: errors.position.message }
                    //         : false
                    // }
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
                    // {...register("workplace")}
                    // error={
                    //     errors?.workplace?.message
                    //         ? { content: errors.workplace.message }
                    //         : false
                    // }
                />
                <Form.Dropdown
                    id="major"
                    name="major"
                    label="Ngành"
                    type="text"
                    style={{ height: "41.7969px" }}
                    options={[
                        { key: 1, text: "Nam", value: 1 },
                        { key: 0, text: "Nữ", value: 0 },
                    ]}
                    selection
                    search
                    // {...register("major")}
                    // error={
                    //     errors?.major?.message
                    //         ? { content: errors.major.message }
                    //         : false
                    // }
                />
                <div className="field signup__button-submit">
                    <Button type="button">Trở lại</Button>
                    <Button type="submit" primary>
                        Tiếp tục
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default Step3;
