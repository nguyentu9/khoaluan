import React from "react";
import { Breadcrumb, Form } from "semantic-ui-react";
import AddUser from "../../components/common/add-user/AddUser";
import UserCountLabel from "../../components/common/user-count-label/UserCountLabel";
import Member from "../../components/common/member/Member";
import "./TopicRegister.scss";
const TopicRegister = () => {
    return (
        <div className="container-fluid">
            <Breadcrumb>
                <Breadcrumb.Section link>Dashboard</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>Đăng ký đề tài</Breadcrumb.Section>
            </Breadcrumb>
            <Form className="container-fluid" style={{ marginTop: "3rem" }}>
                <div className="row">
                    <div className="col-lg-4 offset-lg-1">
                        <div className="inputfield">
                            <Form.Field>
                                <Form.Input
                                    id="name"
                                    label="Tên đề tài"
                                    type="text"
                                ></Form.Input>
                            </Form.Field>
                        </div>

                        <div className="group inputfield">
                            <Form.Group grouped>
                                <label>Thời gian thực hiện</label>
                            </Form.Group>
                            <Form.Group
                                inline
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Form.Radio
                                    label="12 tháng"
                                    value="12"
                                    // checked={value === "md"}
                                    // onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label="18 tháng"
                                    value="18"
                                    style={{ marginLeft: "2rem" }}
                                    // checked={value === "md"}
                                    // onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label="Khác"
                                    value="0"
                                    style={{ marginLeft: "2rem" }}
                                    // checked={value === "md"}
                                    // onChange={this.handleChange}
                                />
                            </Form.Group>
                            <div className="customfield">
                                <input type="number" />
                                <span>Tháng</span>
                            </div>
                        </div>

                        <div className="group inputfield">
                            <Form.Group grouped>
                                <label>Kinh phí</label>
                            </Form.Group>
                            <Form.Group
                                inline
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Form.Radio
                                    label="5 000 000 VNĐ"
                                    value="5000000"
                                    // checked={value === "sm"}
                                    // onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label="10 000 000 VNĐ"
                                    value="10000000"
                                    // checked={value === "md"}
                                    // onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label="Khác"
                                    value="0"
                                    style={{ marginLeft: "2rem" }}
                                    // checked={value === "md"}
                                    // onChange={this.handleChange}
                                />
                            </Form.Group>
                            <div className="customfield">
                                <input type="number" />
                                <span>VNĐ</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1">
                        <Form.Dropdown
                            id="major"
                            name="major"
                            label="Lĩnh vực"
                            style={{ height: "41.7969px" }}
                            options={[
                                {
                                    key: 1,
                                    text: "Công nghệ thông tin",
                                    value: 1,
                                },
                                {
                                    key: 0,
                                    text: "Hệ thống thông tin",
                                    value: 0,
                                },
                            ]}
                            selection
                            // {...register("major")}
                            // error={
                            //     errors?.major?.message
                            //         ? { content: errors.major.message }
                            //         : false
                            // }
                        />
                        <Form.Field>
                            <Form.Input
                                id="keyword"
                                label="Từ khoá"
                                type="text"
                            ></Form.Input>
                        </Form.Field>

                        <UserCountLabel />
                        {Array(4).map((e, i) => (
                            <Member key={i} />
                        ))}
                        <AddUser />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 offset-lg-8">
                        <Form.Button primary fluid>
                            Gửi
                        </Form.Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default TopicRegister;
