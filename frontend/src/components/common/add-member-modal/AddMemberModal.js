import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import { CloseIcon, SearchIcon } from "../../../assets/icons";
import InputSearch from "../input-search/InputSearch";
import Member from "../member/Member";
import "./AddMemberModal.scss";

const AddMemberModal = ({ open, setOpen }) => {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button primary>Thêm thành viên</Button>}
        >
            <Modal.Header>
                <div className="modaladdmem__header">
                    <h3>Thêm thành viên </h3>
                    <div
                        className="modaladdmem__close"
                        onClick={() => setOpen(false)}
                    >
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
                                    <InputSearch />
                                    <Button primary fluid>
                                        Tìm
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1">
                                <Form style={{ marginTop: "1rem" }}>
                                    <Form.Dropdown
                                        id="gender"
                                        name="gender"
                                        label="Đơn vị công tác"
                                        style={{ height: "41.7969px" }}
                                        options={[
                                            { key: 1, text: "Nam", value: 1 },
                                            { key: 0, text: "Nữ", value: 0 },
                                        ]}
                                        selection
                                    />
                                </Form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1">
                                <div className="create__group">
                                    <div>
                                        <div className="create__group__labelwrapper">
                                            <p>Danh sách thành viên</p>
                                        </div>
                                        <div className="create__group__content">
                                            <div>
                                                <Member showAction={false} />
                                            </div>

                                            <Member showAction={false} />
                                            <Member showAction={false} />
                                            <Member showAction={false} />
                                            <Member showAction={false} />
                                            <Member showAction={false} />
                                            <Member showAction={false} />
                                            <Member showAction={false} />
                                            <Member showAction={false} />
                                            <Member showAction={false} />
                                            <Member showAction={false} />
                                            <Member showAction={false} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="create__group__labelwrapper">
                                            <p>Thành viên đã chọn: </p>
                                            <p className="create__group__label">
                                                0 / 4
                                            </p>
                                        </div>
                                        <div className="create__group__content">
                                            <Member showAction={false} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>Huỷ</Button>
                <Button onClick={() => setOpen(false)} primary>
                    Thêm
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default AddMemberModal;
