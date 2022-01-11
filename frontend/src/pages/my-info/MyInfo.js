import React from "react";
import { Breadcrumb, Button, Form } from "semantic-ui-react";
import "./MyInfo.scss";
const MyInfo = () => {
    const isStudent = true;
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Section link>Dashboard</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>
                    Thông tin cá nhân
                </Breadcrumb.Section>
            </Breadcrumb>
            <Form>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-sm-12">
                            <div className="info__wrapper">
                                <h3 className="info__header">
                                    Thông tin chung
                                </h3>
                                <div className="info__grid">
                                    <Form.Field>
                                        <Form.Input
                                            id="ID"
                                            label="ID"
                                            type="text"
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="insiderID"
                                            label="Mã số"
                                            type="text"
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="fullName"
                                            label="Họ tên"
                                            type="text"
                                        ></Form.Input>
                                    </Form.Field>
                                    <div className="info__birthday-gender">
                                        <Form.Field>
                                            <Form.Input
                                                id="birthday"
                                                label="Ngày sinh"
                                                type="date"
                                            ></Form.Input>
                                        </Form.Field>

                                        <Form.Dropdown
                                            id="gender"
                                            name="gender"
                                            label="Giới tính"
                                            options={[
                                                {
                                                    key: 1,
                                                    text: "Nam",
                                                    value: 1,
                                                },
                                                {
                                                    key: 0,
                                                    text: "Nữ",
                                                    value: 0,
                                                },
                                            ]}
                                            selection
                                        />
                                    </div>
                                    <Form.Field>
                                        <Form.Input
                                            id="phone"
                                            label="Điện thoại"
                                            type="text"
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="address"
                                            label="Địa chỉ liên lạc"
                                            type="text"
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="nationalID"
                                            label="CMND/CCCD"
                                            type="text"
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="issuedDate"
                                            label="Ngày cấp"
                                            type="date"
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="issuedPlace"
                                            label="Nơi cấp"
                                            type="text"
                                        ></Form.Input>
                                    </Form.Field>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-sm-12">
                            <div className="info__wrapper">
                                <h3 className="info__header">
                                    Thông tin bổ sung
                                </h3>
                                <div className="info__isstudent">
                                    <Button.Group className="signup__buttongroup">
                                        <Button
                                            primary={!isStudent}
                                            basic={isStudent}
                                        >
                                            Cán Bộ
                                        </Button>
                                        <Button
                                            primary={isStudent}
                                            basic={!isStudent}
                                        >
                                            Sinh Viên
                                        </Button>
                                    </Button.Group>
                                </div>
                                <div className="info__grid">
                                    <Form.Dropdown
                                        id="degree"
                                        name="degree"
                                        label="Học hàm - học vị"
                                        options={[
                                            {
                                                key: 1,
                                                text: "Nam",
                                                value: 1,
                                            },
                                            {
                                                key: 0,
                                                text: "Nữ",
                                                value: 0,
                                            },
                                        ]}
                                        selection
                                    />
                                    <Form.Field>
                                        <Form.Input
                                            id="scientificTitle"
                                            label="Chức danh khoa học"
                                            type="text"
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Dropdown
                                        id="jobTitle"
                                        name="jobTitle"
                                        label="Chức vụ"
                                        options={[
                                            {
                                                key: 1,
                                                text: "Nam",
                                                value: 1,
                                            },
                                            {
                                                key: 0,
                                                text: "Nữ",
                                                value: 0,
                                            },
                                        ]}
                                        selection
                                    />
                                    <Form.Dropdown
                                        id="workplace"
                                        name="workplace"
                                        label="Đơn vị công tác"
                                        options={[
                                            {
                                                key: 1,
                                                text: "Nam",
                                                value: 1,
                                            },
                                            {
                                                key: 0,
                                                text: "Nữ",
                                                value: 0,
                                            },
                                        ]}
                                        selection
                                    />
                                    <Form.Dropdown
                                        id="major"
                                        name="major"
                                        label="Chuyên ngành"
                                        options={[
                                            {
                                                key: 1,
                                                text: "Nam",
                                                value: 1,
                                            },
                                            {
                                                key: 0,
                                                text: "Nữ",
                                                value: 0,
                                            },
                                        ]}
                                        selection
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-sm-12">
                            <div className="info__wrapper">
                                <h3 className="info__header">
                                    Thông tin ngân hàng
                                </h3>
                                <div className="info__grid">
                                    <Form.Field>
                                        <Form.Input
                                            id="bankNumber"
                                            label="Số tài khoản"
                                            type="text"
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="bankBranch"
                                            label="Chi nhánh ngân hàng"
                                            type="text"
                                        ></Form.Input>
                                    </Form.Field>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-sm-12">
                            <div className="info__wrapper">
                                <h3 className="info__header">
                                    Phân quyền hệ thống
                                </h3>
                                <Form.Dropdown
                                    id="role"
                                    name="role"
                                    label="Vai trò"
                                    options={[
                                        {
                                            key: 1,
                                            text: "Nam",
                                            value: 1,
                                        },
                                        {
                                            key: 0,
                                            text: "Nữ",
                                            value: 0,
                                        },
                                    ]}
                                    selection
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default MyInfo;
