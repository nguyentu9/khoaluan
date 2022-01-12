import React, { useState } from "react";
import {
    Breadcrumb,
    Button,
    Dimmer,
    Form,
    Loader,
    Pagination,
    Select,
    Table,
} from "semantic-ui-react";
import Badge from "../../components/common/badge/Badge";
import InputSearch from "../../components/common/input-search/InputSearch";
import SidebarFilter from "../../components/common/sidebar-filter/SidebarFilter";
import { useGetMyTopicsQuery } from "../../services/topic";
import "./MyTopic.scss";
const MyTopic = () => {
    const [visible, setVisible] = useState(false);
    const { data: topics, isLoading, error } = useGetMyTopicsQuery();
    const { page, size, count, rows: topicArr } = topics || {};
    const totalPages = Math.ceil(count / size);

    const [currentSize, setCurrentSize] = useState(5);

    const handlePageSizeChange = (e) => {
        setCurrentSize(e.target.value);
    };

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
            <Dimmer.Dimmable dimmed={isLoading}>
                <Dimmer active={isLoading} inverted>
                    <Loader>Đang tải...</Loader>
                </Dimmer>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-sm-12">
                        <div className="search__wrapper">
                            <div className="search__input">
                                <InputSearch placeholder="Tìm kiếm đề tài..." />
                                <Button basic onClick={handleChangeVisible}>
                                    Bộ lọc
                                </Button>
                                <SidebarFilter
                                    isVisible={visible}
                                    onHandleClick={handleChangeVisible}
                                >
                                    <Form>
                                        <Form.Dropdown
                                            label="Trạng thái đề tài"
                                            selection
                                            search
                                            fluid
                                            options={[
                                                {
                                                    key: 1,
                                                    text: "One",
                                                    value: 1,
                                                },
                                            ]}
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
                                            options={[
                                                {
                                                    key: 1,
                                                    text: "One",
                                                    value: 1,
                                                },
                                            ]}
                                            placeholder="Chọn một"
                                        />
                                        <Button primary>Lọc</Button>
                                    </Form>
                                </SidebarFilter>
                            </div>
                        </div>

                        <div className="result__wrapper">
                            <p className="result__number">Có {count} kết quả</p>
                            <div className="result__perpage">
                                <p>Số dòng mỗi trang:</p>
                                <Select
                                    id="size"
                                    name="size"
                                    options={searchOptions}
                                    selection
                                    value={currentSize}
                                    onChange={handlePageSizeChange}
                                />
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
                                    <Table.HeaderCell>
                                        Tên đề tài
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>Vai trò</Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Trạng thái
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Ngày gửi
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {topicArr?.map((topic, i) => (
                                    <Table.Row>
                                        <Table.Cell>{page + i}</Table.Cell>
                                        <Table.Cell>{topic.name}</Table.Cell>
                                        <Table.Cell>
                                            {
                                                topic.Topicmembers[0].Topicrole
                                                    .name
                                            }
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Badge
                                                title={topic.Statuses[0].name}
                                                status="warning"
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            {topic.registraionDate
                                                ?.match(/([^T]+)/)[0]
                                                .split("-")
                                                .reverse()
                                                .join("/")}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                    {totalPages >= 2 && (
                        <div className="row" style={{ marginTop: "2rem" }}>
                            <div className="col-sm-12">
                                <Pagination
                                    defaultActivePage={page}
                                    totalPages={totalPages}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </Dimmer.Dimmable>
        </div>
    );
};

const searchOptions = [
    { key: 5, text: "5", value: 5 },
    { key: 10, text: "10", value: 10 },
    { key: 20, text: "20", value: 20 },
];
export default MyTopic;
