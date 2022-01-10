import React from "react";
import { Breadcrumb } from "semantic-ui-react";

const TopicRegister = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Section link>Dashboard</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>Đăng ký đề tài</Breadcrumb.Section>
            </Breadcrumb>
        </div>
    );
};

export default TopicRegister;
