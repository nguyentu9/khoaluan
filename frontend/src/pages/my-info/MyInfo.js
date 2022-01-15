import React from "react";
import { Breadcrumb, Button, Form } from "semantic-ui-react";
import { useGetMyProfileQuery } from "../../services/user";
import "./MyInfo.scss";

const userGenders = [
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
];

const MyInfo = () => {
    const {
        data: userInfo,
        isLoading: userLoading,
        error,
    } = useGetMyProfileQuery();
    const {
        id,
        fullName,
        birthday,
        gender,
        phone,
        isInsider,
        insiderID,
        sientificTitle,
        address,
        nationalID,
        issuedDate,
        issuedPlace,
        Degree,
        Major,
        Userrole,
        bankNumber,
        bankBranch,
        isStudent,
        JobTitle,
    } = userInfo || {};
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
                                            value={id}
                                            readOnly
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="insiderID"
                                            label={`Mã số ${
                                                isStudent
                                                    ? "sinh viên"
                                                    : "cán bộ"
                                            }`}
                                            type="text"
                                            value={
                                                insiderID ? insiderID : "Không"
                                            }
                                            readOnly
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="fullName"
                                            label="Họ tên"
                                            type="text"
                                            value={fullName}
                                            readOnly
                                        ></Form.Input>
                                    </Form.Field>
                                    <div className="info__birthday-gender">
                                        <Form.Field>
                                            <Form.Input
                                                id="birthday"
                                                label="Ngày sinh"
                                                type="date"
                                                value={
                                                    birthday
                                                        ? birthday.substring(
                                                              0,
                                                              10
                                                          )
                                                        : ""
                                                }
                                                readOnly
                                            ></Form.Input>
                                        </Form.Field>

                                        <Form.Field>
                                            <Form.Input
                                                id="gender"
                                                name="gender"
                                                label="Giới tính"
                                                value={gender ? "Nam" : "Nữ"}
                                                readOnly
                                            ></Form.Input>
                                        </Form.Field>
                                    </div>
                                    <Form.Field>
                                        <Form.Input
                                            id="phone"
                                            label="Điện thoại"
                                            type="text"
                                            value={phone}
                                            readOnly
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="address"
                                            label="Địa chỉ liên lạc"
                                            type="text"
                                            value={address}
                                            readOnly
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="nationalID"
                                            label="CMND/CCCD"
                                            type="text"
                                            value={nationalID}
                                            readOnly
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="issuedDate"
                                            label="Ngày cấp"
                                            type="date"
                                            value={
                                                issuedDate
                                                    ? issuedDate.substring(
                                                          0,
                                                          10
                                                      )
                                                    : ""
                                            }
                                            readOnly
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="issuedPlace"
                                            label="Nơi cấp"
                                            type="text"
                                            value={issuedPlace}
                                            readOnly
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
                                    <Form.Field>
                                        <Form.Input
                                            id="degree"
                                            name="degree"
                                            label="Học hàm - học vị"
                                            value={
                                                Degree?.name
                                                    ? Degree?.name
                                                    : "Đại học"
                                            }
                                            readOnly
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="scientificTitle"
                                            label="Chức danh khoa học"
                                            type="text"
                                            value={
                                                sientificTitle
                                                    ? sientificTitle
                                                    : "Không"
                                            }
                                            readOnly
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="jobTitle"
                                            name="jobTitle"
                                            label="Chức vụ"
                                            value={
                                                JobTitle?.name
                                                    ? JobTitle?.name
                                                    : "Không"
                                            }
                                            readOnly
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="workplace"
                                            name="workplace"
                                            label="Đơn vị công tác"
                                            value={
                                                Major?.Facdept?.name
                                                    ? Major?.Facdept?.name
                                                    : "Không"
                                            }
                                            readOnly
                                        ></Form.Input>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            id="major"
                                            name="major"
                                            label="Chuyên ngành"
                                            value={
                                                Major?.name
                                                    ? Major?.name
                                                    : "Không"
                                            }
                                            readOnly
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
                                <Form.Field>
                                    <Form.Input
                                        id="role"
                                        name="role"
                                        label="Vai trò"
                                        value={Userrole?.name}
                                        readOnly
                                    ></Form.Input>
                                </Form.Field>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default MyInfo;
