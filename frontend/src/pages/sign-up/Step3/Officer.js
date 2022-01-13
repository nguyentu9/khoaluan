import React from "react";
import { Form } from "semantic-ui-react";
import { useGetDegreesQuery } from "../../../services/degree";
import { useGetFacdeptsQuery } from "../../../services/facdept";
import { useGetJobTitlesQuery } from "../../../services/jobTitle";
import { useGetMajorsQuery } from "../../../services/major";
import "../SignUp.scss";

const list = (arr) =>
    arr?.map((e) => ({ key: e.id, text: e.name, value: e.id }));
const h = { height: "41.7969px" };

const Officer = ({ errors, handleChange }) => {
    const { data: degreeArr, isLoading: degreeLoading } = useGetDegreesQuery();
    const { data: marjorArr, isLoading: marjorLoading } = useGetMajorsQuery();
    const { data: jobTitleArr, isLoading: jobTitleLoading } =
        useGetJobTitlesQuery();
    const { data: facDeptArr, isLoading: facDeptLoading } =
        useGetFacdeptsQuery();

    return (
        <>
            <Form.Field>
                <Form.Input
                    id="insiderID"
                    name="insiderID"
                    label="Mã số cán bộ"
                    type="text"
                    onChange={handleChange}
                    error={errors?.insiderID ? errors?.insiderID : false}
                />
            </Form.Field>

            <Form.Dropdown
                id="degree"
                name="degree"
                label="Học hàm - học vị"
                loading={degreeLoading}
                type="text"
                style={h}
                options={list(degreeArr)}
                selection
                onChange={handleChange}
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
                selection
                onChange={handleChange}
                error={errors?.jobTitle ? errors?.jobTitle : false}
            />
            <Form.Dropdown
                id="workplace"
                name="workplace"
                label="Đơn vị công tác"
                type="text"
                style={h}
                loading={facDeptLoading}
                options={list(facDeptArr)}
                selection
                search
                onChange={handleChange}
                error={errors?.workplace ? errors?.workplace : false}
            />
            <Form.Dropdown
                id="major"
                name="major"
                label="Chuyên ngành"
                type="text"
                loading={marjorLoading}
                style={h}
                options={list(marjorArr)}
                selection
                search
                onChange={handleChange}
                error={errors?.major ? errors?.major : false}
            />
        </>
    );
};

export default Officer;
