import React, { useEffect, useState } from "react";
import { Button, Dimmer, Loader, Modal } from "semantic-ui-react";
import { CloseIcon } from "../../../assets/icons";
import { useGetUsersWithParamMutation } from "../../../services/user";
import InputSearch from "../input-search/InputSearch";
import Member from "../member/Member";
import "./AddMemberModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { addMembers } from "../../../redux/topicRegisterSlice";

const AddMemberModal = ({ open, setOpen, usersSelectedBefore }) => {
    const dispatch = useDispatch();
    const [searchData, setSearchData] = useState("");
    const [userSelected, setUserSelected] = useState([...usersSelectedBefore]);
    const [getUsersWithParam, { isLoading, data: users, error }] =
        useGetUsersWithParamMutation();
    useEffect(() => {
        if (usersSelectedBefore) {
            setUserSelected(usersSelectedBefore);
        }
    }, [usersSelectedBefore, open]);

    const handleOnChange = ({ target: { value } }) => {
        setSearchData(value.trim());
    };

    const handleSearch = () => {
        if (searchData == "") return;
        let param = "";
        if (new RegExp(/\b\d+\b/).test(searchData)) param = "nationalID";
        else param = "name";
        getUsersWithParam({ param, searchData });
    };

    const handleSelect = (newUser) => () => {
        if (userSelected.length >= 4) return;
        let isExsist = userSelected.find(({ id }) => id === newUser.id);
        if (isExsist) return;
        setUserSelected([...userSelected, newUser]);
    };
    const handleRemove = (user) => () => {
        let newArrUser = userSelected.filter(({ id }) => id !== user.id);
        setUserSelected(newArrUser);
    };

    const handleOnClose = () => {
        setOpen(false);
        setUserSelected([]);
    };

    const handleAddUser = () => {
        dispatch(addMembers(userSelected));
        setUserSelected([]);
        setOpen(false);
    };
    return (
        <Modal
            open={open}
            onClose={handleOnClose}
            onOpen={() => setOpen(true)}
            trigger={<Button primary>Thêm thành viên</Button>}
        >
            <Modal.Header>
                <div className="modaladdmem__header">
                    <h3>Thêm thành viên </h3>
                    <div className="modaladdmem__close" onClick={handleOnClose}>
                        <img src={CloseIcon} alt="close" />
                    </div>
                </div>
            </Modal.Header>

            <Modal.Content image scrolling>
                <Modal.Description>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1">
                                <div className="modaladdmem__search">
                                    <InputSearch
                                        placeholder="Nhập cmnd, tên"
                                        onChange={handleOnChange}
                                    />
                                    <Button
                                        primary
                                        fluid
                                        onClick={handleSearch}
                                    >
                                        Tìm
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1">
                                <div className="create__group">
                                    <div>
                                        <div className="create__group__labelwrapper">
                                            <p>Danh sách kết quả</p>
                                        </div>
                                        <div className="create__group__content">
                                            {users &&
                                                users?.map((user) => (
                                                    <Member
                                                        key={user.id}
                                                        name={user.fullName}
                                                        desc={user.email}
                                                        showAction={false}
                                                        isSelected={true}
                                                        onClick={handleSelect(
                                                            user
                                                        )}
                                                    />
                                                ))}

                                            {error && (
                                                <div className="create__group__content__notfound">
                                                    Không tìm thấy kết quả
                                                    {error.message}
                                                </div>
                                            )}
                                            {isLoading && (
                                                <Dimmer active inverted>
                                                    <Loader inverted>
                                                        Đang tải
                                                    </Loader>
                                                </Dimmer>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="create__group__labelwrapper">
                                            <p>Thành viên đã chọn: </p>
                                            <p className="create__group__label">
                                                {userSelected?.length} / 4
                                            </p>
                                        </div>
                                        <div className="create__group__content">
                                            {userSelected &&
                                                userSelected?.map((user) => (
                                                    <Member
                                                        key={user.id}
                                                        name={user.fullName}
                                                        desc={user.email}
                                                        showAction={false}
                                                        showDel={true}
                                                        onDelete={handleRemove(
                                                            user
                                                        )}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={handleOnClose}>Huỷ</Button>
                <Button onClick={handleAddUser} primary>
                    Thêm
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default AddMemberModal;
