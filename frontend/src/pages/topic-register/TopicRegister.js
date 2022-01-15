import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Form } from "semantic-ui-react";
import AddMemberModal from "../../components/common/add-member-modal/AddMemberModal";
import Member from "../../components/common/member/Member";
import UserCountLabel from "../../components/common/user-count-label/UserCountLabel";
import { removeMember } from "../../redux/topicRegisterSlice";
import { useGetMajorsQuery } from "../../services/major";
import { useRegisterTopicMutation } from "../../services/topic";
import { list } from "../../utils";
import "./TopicRegister.scss";

const TopicRegister = () => {
    const dispatch = useDispatch();
    const [registerTopic, { isLoading: isRegistering, error: errRegister }] =
        useRegisterTopicMutation();
    const { data: majorData, isLoading: majorLoading } = useGetMajorsQuery();

    const usersSelectedBefore = useSelector(
        (state) => state.topicRegister.usersSelected
    );
    const currentUser = useSelector((state) => state.userSignin.userInfo.data);
    console.log(currentUser);

    const [usersSelected, setUsersSelected] = useState([]);
    const [instrSelected, setInstrSelected] = useState([]);

    const [openMems, setOpenMems] = useState(false);

    const [openInstr, setOpenInstr] = useState(false);

    const [errors, setErrors] = useState({});
    const [state, setState] = useState({
        totalExpense: 0,
        duration: 0,
        name: "",
    });
    console.log(state);

    useEffect(() => {
        if (usersSelectedBefore) {
            setUsersSelected(usersSelectedBefore);
        }
    }, [usersSelectedBefore]);

    const handleChange = (event, result) => {
        const { name, value } = result || event.target;
        setState({ ...state, [name]: value });
        setErrors({});
    };

    const handleRemove = (user) => () => {
        let newArrUser = usersSelected.filter(({ id }) => id !== user.id);
        setUsersSelected(newArrUser);
        dispatch(removeMember(user.id));
    };

    const handleSendTopic = () => {
        //registerTopic()
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
                    {errRegister ? errRegister.message : ""}
                </div>
                <div className="row">
                    <div className="col-lg-4 offset-lg-1">
                        <div className="inputfield">
                            <Form.Field>
                                <Form.Input
                                    id="name"
                                    name="name"
                                    label="Tên đề tài"
                                    onChange={handleChange}
                                    type="text"
                                ></Form.Input>
                            </Form.Field>
                        </div>

                        <div className="group inputfield">
                            <Form.Field>
                                <Form.Input
                                    type="number"
                                    id="duration"
                                    name="duration"
                                    label="Thời gian thực hiện"
                                    onChange={handleChange}
                                ></Form.Input>
                            </Form.Field>
                        </div>

                        <div className="group inputfield">
                            <Form.Field>
                                <Form.Input
                                    type="number"
                                    id="totalExpense"
                                    name="totalExpense"
                                    label="Kinh phí thực hiện"
                                    onChange={handleChange}
                                ></Form.Input>
                            </Form.Field>
                        </div>

                        <div className="group inputfield">
                            <Form.Group grouped>
                                <label>Người hướng dẫn</label>
                            </Form.Group>

                            <div className="customfield">
                                <AddMemberModal
                                    open={openInstr}
                                    setOpen={setOpenInstr}
                                    usersSelectedBefore={instrSelected}
                                    maxUser={1}
                                    title="Chọn GV hướng dẫn"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1">
                        <Form.Dropdown
                            id="majorID"
                            name="majorID"
                            label="Lĩnh vực"
                            style={{ height: "41.7969px" }}
                            options={list(majorData)}
                            selection
                            search
                            loading={majorLoading}
                            onChange={handleChange}
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
                            showAction={false}
                            isOwner
                            desc={"Chủ Nhiệm"}
                        />
                        {usersSelected &&
                            usersSelected?.map((user) => (
                                <Member
                                    key={user.id}
                                    name={user.fullName}
                                    desc={user.email}
                                    showAction={false}
                                    showDel
                                    showChange
                                    // onChange={}
                                    onDelete={handleRemove(user)}
                                />
                            ))}

                        <div className="mt-2">
                            <AddMemberModal
                                open={openMems}
                                setOpen={setOpenMems}
                                usersSelectedBefore={usersSelected}
                                maxUser={4}
                                title="Thêm thành viên"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1 offset-lg-9">
                        <Form.Button
                            primary
                            fluid
                            onClick={handleSendTopic}
                            loading={isRegistering}
                        >
                            Gửi
                        </Form.Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default TopicRegister;
