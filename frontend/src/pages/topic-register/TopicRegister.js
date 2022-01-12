import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Form } from "semantic-ui-react";
import AddMemberModal from "../../components/common/add-member-modal/AddMemberModal";
import Member from "../../components/common/member/Member";
import UserCountLabel from "../../components/common/user-count-label/UserCountLabel";
import { useGetMajorsQuery } from "../../services/major";
import "./TopicRegister.scss";

const TopicRegister = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const { data: majorData, isLoading: majorLoading } = useGetMajorsQuery();
    const handleMajorChange = (e) => {
        // setMajorSelected(e.target.value);
    };

    const members = useSelector((state) => state.members);

    return (
        <div className="container-fluid">
            <Breadcrumb>
                <Breadcrumb.Section link>Dashboard</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>Đăng ký đề tài</Breadcrumb.Section>
            </Breadcrumb>
            <Form className="container" style={{ marginTop: "3rem" }}>
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
                            options={majorData?.map((e) => ({
                                key: e.id,
                                value: e.id,
                                text: e.name,
                            }))}
                            selection
                            search
                            loading={majorLoading}
                            onChange={handleMajorChange}
                        />
                        <Form.Field>
                            <Form.Input
                                id="keyword"
                                label="Từ khoá"
                                type="text"
                            ></Form.Input>
                        </Form.Field>

                        <UserCountLabel currentNum={1} />
                        <Member isOwner showAction={false} />
                        {Array(4).map((e, i) => (
                            <Member key={i} />
                        ))}

                        <AddMemberModal open={open} setOpen={setOpen} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1 offset-lg-9">
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
