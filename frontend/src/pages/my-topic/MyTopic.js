import React, { useState } from "react";
import { Breadcrumb, Button, Input, Table } from "semantic-ui-react";
import Badge from "../../components/common/badge/Badge";
import SidebarFilter from "../../components/common/sidebar-filter/SidebarFilter";
import "./MyTopic.scss";
const MyTopic = () => {
    const [visible, setVisible] = useState(false);
    const handleChangeVisible = () => {
        setVisible((prev) => !prev);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <Breadcrumb>
                        <Breadcrumb.Section link>Dashboard</Breadcrumb.Section>
                        <Breadcrumb.Divider />
                        <Breadcrumb.Section active>
                            Đề tài của tôi
                        </Breadcrumb.Section>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="search__wrapper">
                        <div className="search__input">
                            <Input placeholder="Search..." />
                            <div class="ui left icon input">
                                <input
                                    placeholder="Search users..."
                                    type="text"
                                />
                            </div>
                            <Button basic onClick={handleChangeVisible}>
                                Bộ lọc
                            </Button>
                        </div>
                        <div className="search__filter"></div>
                    </div>

                    <div className="result__wrapper">
                        <p className="result__number">Có 0 kết quả</p>
                        <div className="result__perpage">
                            <p>Số dòng mỗi trang:</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Table celled selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>STT</Table.HeaderCell>
                                <Table.HeaderCell>Tên đề tài</Table.HeaderCell>
                                <Table.HeaderCell>Vai trò</Table.HeaderCell>
                                <Table.HeaderCell>Trạng thái</Table.HeaderCell>
                                <Table.HeaderCell>Ngày gửi</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>No Action</Table.Cell>
                                <Table.Cell>None</Table.Cell>
                                <Table.Cell>
                                    <Badge title="Chờ Xử Lý" status="warning" />
                                </Table.Cell>
                                <Table.Cell>None</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>Approved</Table.Cell>
                                <Table.Cell>Requires call</Table.Cell>
                                <Table.Cell>Requires call</Table.Cell>
                                <Table.Cell>Requires call</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <SidebarFilter
                        isVisible={visible}
                        onHandleClick={handleChangeVisible}
                    />
                </div>
            </div>
        </div>
    );
};

export default MyTopic;
