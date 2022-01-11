import React from "react";
import { Button, Form } from "semantic-ui-react";
import { CloseIcon } from "../../../assets/icons";
import "./SidebarFilter.scss";

const SidebarFilter = ({ isVisible = true, onHandleClick }) => {
    return (
        <div
            className={`ui sidebar overlay right menu animating ${
                isVisible ? "visible" : ""
            } `}
        >
            <div style={{ display: "block", width: "100%", padding: "0 8px" }}>
                <div className="filter__header">
                    <h3>Bộ lọc</h3>
                    <div className="filter__close" onClick={onHandleClick}>
                        <img src={CloseIcon} alt="close" />
                    </div>
                </div>
                <Form>
                    <Form.Dropdown
                        label="Trạng thái đề tài"
                        selection
                        search
                        fluid
                        options={options}
                        placeholder="Chọn một"
                    />
                    <Form.Input
                        id="registraionDate"
                        name="registraionDate"
                        label="Thời gian gửi"
                        type="date"
                    />
                    <Form.Dropdown
                        label="Vai trò trong đề tài"
                        selection
                        search
                        fluid
                        options={options}
                        placeholder="Chọn một"
                    />
                    <Button primary>Lọc</Button>
                </Form>
            </div>
        </div>
    );
};

const options = [
    { key: 1, text: "One", value: 1 },
    { key: 2, text: "Two", value: 2 },
    { key: 3, text: "Three", value: 3 },
    { key: 21, text: "One", value: 1 },
    { key: 22, text: "Two", value: 2 },
    { key: 23, text: "Three", value: 3 },
    { key: 31, text: "One", value: 1 },
    { key: 32, text: "Two", value: 2 },
    { key: 33, text: "Three", value: 3 },
    { key: 41, text: "One", value: 1 },
    { key: 42, text: "Two", value: 2 },
    { key: 43, text: "Three", value: 3 },
];

export default SidebarFilter;
