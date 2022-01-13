import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useGetDegreesQuery } from "../../../services/degree";
import { useGetJobTitlesQuery } from "../../../services/jobTitle";
import { useGetMajorsQuery } from "../../../services/major";
import "../SignUp.scss";

const list = (arr) =>
    arr?.map((e) => ({ key: e.id, text: e.name, value: e.id }));
const h = { height: "41.7969px" };

const Outsider = ({ errors, handleChange }) => {
    const { data: degreeArr, isLoading: degreeLoading } = useGetDegreesQuery();
    const { data: jobTitleArr, isLoading: jobTitleLoading } =
        useGetJobTitlesQuery();

    const { data: marjorArr, isLoading: marjorLoading } = useGetMajorsQuery();

    return (
        <>
            <Form.Dropdown
                id="degree"
                name="degree"
                label="Học hàm - học vị"
                loading={degreeLoading}
                type="text"
                style={h}
                options={list(degreeArr)}
                onChange={handleChange}
                selection
                error={errors?.degree ? errors.degree : false}
            />
            <Form.Field>
                <Form.Input
                    id="scientificTitle"
                    name="scientificTitle"
                    label="Chức danh khoa học"
                    type="text"
                    error={
                        errors?.scientificTitle
                            ? errors?.scientificTitle
                            : false
                    }
                />
            </Form.Field>
            <Form.Dropdown
                id="jobTitle"
                name="jobTitle"
                label="Chức vụ"
                loading={jobTitleLoading}
                type="text"
                style={h}
                options={list(jobTitleArr)}
                onChange={handleChange}
                selection
                error={errors?.jobTitle ? errors?.jobTitle : false}
            />

            <Form.Field>
                <Form.Input
                    id="workplaceOutside"
                    name="workplaceOutside"
                    label="Đơn vị công tác"
                    type="text"
                    onChange={handleChange}
                    style={h}
                    error={
                        errors?.workplaceOutside
                            ? errors?.workplaceOutside
                            : false
                    }
                />
            </Form.Field>
            <Form.Dropdown
                id="major"
                name="major"
                label="Chuyên ngành"
                type="text"
                loading={marjorLoading}
                style={h}
                options={list(marjorArr)}
                selection
                onChange={handleChange}
                search
                error={errors?.major ? errors?.major : false}
            />
        </>
    );
};

export default Outsider;
