import Joi from "joi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Form, Message } from "semantic-ui-react";
import AddMemberModal from "../../components/common/add-member-modal/AddMemberModal";
import Member from "../../components/common/member/Member";
import UserCountLabel from "../../components/common/user-count-label/UserCountLabel";
import messagesVN from "../../constant/validationMsg";
import { removeMember } from "../../redux/topicRegisterSlice";
import { useGetMajorsQuery } from "../../services/major";
import { useRegisterTopicMutation } from "../../services/topic";
import {
    useGetInstructorWithParmMutation,
    useGetUsersWithParamMutation,
} from "../../services/user";
import { list } from "../../utils";
import "./TopicRegister.scss";
import { toast } from "react-toastify";

const TopicRegister = () => {
    const dispatch = useDispatch();
    const [registerTopic, registerTopicResult] = useRegisterTopicMutation();
    const {
        isLoading: isRegistering,
        data: dataRegister,
        error: errRegister,
    } = registerTopicResult;

    const { data: majorData, isLoading: majorLoading } = useGetMajorsQuery();

    const [
        getUsersWithParam,
        {
            isLoading: isGettingUser,
            data: usersAsMember,
            error: errUserAsMember,
        },
    ] = useGetUsersWithParamMutation();

    const [
        getInstructorWithParm,
        { isLoading: isGettingInstr, data: userAsInstr, error: errUserAsInstr },
    ] = useGetInstructorWithParmMutation();

    const usersSelectedBefore = useSelector(
        (state) => state.topicRegister.usersSelected
    );
    const currentUser = useSelector((state) => state.userSignin.userInfo.data);
    const isStudent = currentUser?.role?.code === "sinhvien" ? 1 : 0;

    const [usersSelected, setUsersSelected] = useState([]);
    const [instrSelected, setInstrSelected] = useState([]);

    // Toggle Modal
    const [openMems, setOpenMems] = useState(false);
    const [openInstr, setOpenInstr] = useState(false);

    const [errors, setErrors] = useState({});

    const [state, setState] = useState({
        totalExpense: 0,
        duration: 0,
        name: "",
        majorID: "",
    });

    useEffect(() => {
        if (dataRegister) {
            toast.success(dataRegister.message);
            setState([]);
            setUsersSelected([]);
            setInstrSelected([]);
        }
    }, [dataRegister]);

    useEffect(() => {
        if (usersSelectedBefore) {
            setUsersSelected(usersSelectedBefore);
        }
    }, [usersSelectedBefore]);

    const handleChange = (event, result) => {
        const { name, value } = result || event.target;
        setState({ ...state, [name]: value });
    };

    const handleRemove = (user) => () => {
        let newArrUser = usersSelected.filter(({ id }) => id !== user.id);
        setUsersSelected(newArrUser);
        dispatch(removeMember(user.id));
    };

    const handleChangeUserRole = ({ id, role }) => {
        let users = usersSelected.map((user) => {
            if (user.id === id) user.topicRole = role;
            return user;
        });
        setUsersSelected(users);
    };

    const handleRegister = () => {
        const topic = {
            ...state,
            instructor: instrSelected[0]?.id,
            members: usersSelected.map((u) => ({
                userID: u.id,
                topicRole: u.topicRole,
            })),
        };

        const errors = validateTopic({ ...topic, isStudent });
        if (errors) {
            setErrors(errors);
        } else {
            console.log(topic);

            registerTopic(topic);
        }
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
                    {errRegister && (
                        <Message negative>
                            <p>{errRegister?.message}</p>
                        </Message>
                    )}
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
                                    value={state.name}
                                    error={errors?.name ? errors.name : false}
                                ></Form.Input>
                            </Form.Field>
                        </div>

                        <div className="group inputfield">
                            <Form.Field>
                                <Form.Input
                                    type="number"
                                    id="duration"
                                    name="duration"
                                    label="Thời gian thực hiện (tháng)"
                                    value={state.duration}
                                    error={
                                        errors?.duration
                                            ? errors.duration
                                            : false
                                    }
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
                                    label="Kinh phí thực hiện (VNĐ)"
                                    value={state.totalExpense}
                                    error={
                                        errors?.totalExpense
                                            ? errors.totalExpense
                                            : false
                                    }
                                    onChange={handleChange}
                                ></Form.Input>
                            </Form.Field>
                        </div>
                        {isStudent === 1 && (
                            <div className="group inputfield">
                                <Form.Group grouped>
                                    <label>Người hướng dẫn</label>
                                </Form.Group>

                                {errors?.instructor && (
                                    <Message negative>
                                        <p>{errors?.instructor}</p>
                                    </Message>
                                )}

                                {instrSelected?.length > 0 && (
                                    <Member
                                        key={instrSelected[0].id}
                                        name={
                                            instrSelected[0].fullName +
                                            " (Cán bộ)"
                                        }
                                        desc={instrSelected[0].email}
                                        showAction={false}
                                        showDel={true}
                                        onDelete={() => setInstrSelected([])}
                                    />
                                )}
                                <div
                                    className="customfield"
                                    style={{ marginTop: "1rem" }}
                                >
                                    <AddMemberModal
                                        open={openInstr}
                                        setOpen={setOpenInstr}
                                        maxUser={1}
                                        setUsers={setInstrSelected}
                                        getUsers={instrSelected}
                                        getUsersWithParam={
                                            getInstructorWithParm
                                        }
                                        isLoading={isGettingInstr}
                                        users={userAsInstr}
                                        error={errUserAsInstr}
                                        title="Chọn GV hướng dẫn"
                                    />
                                </div>
                            </div>
                        )}
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
                            error={errors?.majorID ? errors.majorID : false}
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
                            isOwner
                            desc={"Chủ Nhiệm"}
                        />
                        {usersSelected &&
                            usersSelected?.map((user) => (
                                <Member
                                    key={user.id}
                                    id={user.id}
                                    name={user.fullName}
                                    role={user.topicRole}
                                    showAction={false}
                                    showDel
                                    showChange
                                    currentRole={handleChangeUserRole}
                                    onDelete={handleRemove(user)}
                                />
                            ))}

                        <div className="mt-2">
                            <AddMemberModal
                                open={openMems}
                                setOpen={setOpenMems}
                                getUsers={usersSelected}
                                setUsers={setUsersSelected}
                                maxUser={4}
                                getUsersWithParam={getUsersWithParam}
                                isLoading={isGettingUser}
                                users={usersAsMember}
                                error={errUserAsMember}
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
                            onClick={handleRegister}
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

const validateTopic = (data) => {
    const schema = Joi.object()
        .keys({
            isStudent: Joi.number(),
            name: Joi.string()
                .label("Tên đề tài")
                .trim()
                .min(10)
                .max(150)
                .required()
                .messages(messagesVN),
            duration: Joi.number()
                .label("Thời gian thực hiện")
                .min(3)
                .max(18)
                .required()
                .messages(messagesVN),
            totalExpense: Joi.number()
                .label("Kinh phí thực hiện")
                .min(1000000)
                .max(10000000)
                .required()
                .when("isStudent", {
                    is: 0,
                    then: Joi.number()
                        .valid(30000000, 70000000)
                        .messages(messagesVN),
                })
                .messages(messagesVN),
            majorID: Joi.string()
                .label("Lĩnh vực đề tài")
                .trim()
                .max(36)
                .guid()
                .required()
                .messages(messagesVN),
            instructor: Joi.string()
                .label("Người hướng dẫn")
                .trim()
                .max(36)
                .guid()
                .when("isStudent", {
                    is: 0,
                    then: Joi.allow(null),
                })
                .messages(messagesVN),
            members: Joi.array()
                .label("Thành viên đề tài")
                .max(4)
                .items(
                    Joi.object({
                        userID: Joi.string()
                            .label("ID thành viên")
                            .trim()
                            .max(36)
                            .guid()
                            .required()
                            .messages(messagesVN),
                        topicRole: Joi.string()
                            .label("Vai trò đề tài")
                            .valid(
                                "dongchunhiem",
                                "thanhvienthuchienchinh",
                                "thanhvien"
                            )
                            .required()
                            .messages(messagesVN),
                    })
                )
                .unique(comparator)
                .messages(messagesVN),
        })
        .unknown(true);

    function comparator(a, b) {
        return a.userID === b.userID;
    }
    const { error } = schema.validate(data, {
        abortEarly: true,
    });

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
};
