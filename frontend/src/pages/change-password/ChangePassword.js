import React from "react";
import { Breadcrumb, Form } from "semantic-ui-react";
import "./ChangePassword.scss";

const ChangePassword = () => {
    return (
        <div className="container-fluid">
            <Breadcrumb>
                <Breadcrumb.Section link>Dashboard</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>Đổi mật khẩu</Breadcrumb.Section>
            </Breadcrumb>

            <Form className="container" style={{ marginTop: "3rem" }}>
                <div className="row">
                    <div className="col-sm-3 offset-sm-4">
                        <Form.Field>
                            <Form.Input
                                id="oldPassword"
                                label="Mật khẩu cũ"
                                type="password"
                            ></Form.Input>
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                id="newPassword"
                                label="Mật khẩu mới"
                                type="password"
                            ></Form.Input>
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                id="passwordAgain"
                                label="Nhập lại mật khẩu"
                                type="password"
                            ></Form.Input>
                        </Form.Field>
                        <Form.Button primary fluid>
                            Cập nhật mật khẩu
                        </Form.Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default ChangePassword;
