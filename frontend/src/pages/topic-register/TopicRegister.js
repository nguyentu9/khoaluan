import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Form } from "semantic-ui-react";
import AddMemberModal from "../../components/common/add-member-modal/AddMemberModal";
import Member from "../../components/common/member/Member";
import UserCountLabel from "../../components/common/user-count-label/UserCountLabel";
import { useGetMajorsQuery } from "../../services/major";
import "./TopicRegister.scss";
import { list } from "../../utils";
import { removeMember } from "../../redux/topicRegisterSlice";

const TopicRegister = () => {
    const dispatch = useDispatch();
    const usersSelectedBefore = useSelector(
        (state) => state.topicRegister.usersSelected
    );
    const [usersSelected, setUsersSelected] = useState([]);
    const currentUser = useSelector((state) => state.userSignin.userInfo.data);
    console.log(currentUser);

    const [open, setOpen] = useState(false);
    const { data: majorData, isLoading: majorLoading } = useGetMajorsQuery();
    const [totalExpense, setTotalExpense] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (usersSelectedBefore) {
            setUsersSelected(usersSelectedBefore);
        }
    }, [usersSelectedBefore]);

    const handleMajorChange = (e) => {
        // setMajorSelected(e.target.value);
    };

    const handleChangeExpense = (e) => {
        setTotalExpense(e.target.value);
    };
    const handleChangeDuration = (e) => {
        setDuration(e.target.value);
    };

    const handleRemove = (user) => () => {
        let newArrUser = usersSelected.filter(({ id }) => id !== user.id);
        setUsersSelected(newArrUser);
        dispatch(removeMember(user.id));
    };
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

                            <div className="customfield">
                                <input
                                    type="number"
                                    onChange={handleChangeDuration}
                                />
                                <span>Tháng</span>
                            </div>
                        </div>

                        <div className="group inputfield">
                            <Form.Group grouped>
                                <label>Kinh phí</label>
                            </Form.Group>
                            <div className="customfield">
                                <input
                                    type="number"
                                    onChange={handleChangeExpense}
                                />
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
                            options={list(majorData)}
                            selection
                            search
                            loading={majorLoading}
                            onChange={handleMajorChange}
                        />

                        <UserCountLabel
                            currentNum={
                                usersSelected.length
                                    ? usersSelected.length + 1
                                    : 1
                            }
                            className="mb-2"
                        />
                        <Member
                            key={currentUser?.id}
                            name={currentUser?.fullName}
                            desc={currentUser?.email}
                            showAction={false}
                            isOwner
                        />
                        {usersSelected &&
                            usersSelected?.map((user) => (
                                <Member
                                    key={user.id}
                                    name={user.fullName}
                                    desc={user.email}
                                    showAction={false}
                                    showDel
                                    onDelete={handleRemove(user)}
                                />
                            ))}

                        <div className="mt-2">
                            <AddMemberModal
                                open={open}
                                setOpen={setOpen}
                                usersSelectedBefore={usersSelected}
                            />
                        </div>
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
