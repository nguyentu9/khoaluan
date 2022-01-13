import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useGetFacultiesQuery } from "../../../services/facdept";
import { useGetMajorsQuery } from "../../../services/major";
import "../SignUp.scss";

const list = (arr) =>
    arr?.map((e) => ({ key: e.id, text: e.name, value: e.id }));
const h = { height: "41.7969px" };

const Student = ({ errors, handleChange, currentWorkplace }) => {
    const { data: majorArr, isLoading: majorLoading } = useGetMajorsQuery();

    const { data: facultyArr, isLoading: facultyLoading } =
        useGetFacultiesQuery();

    const majors = majorArr?.filter((e) => e.facultyID === currentWorkplace);
    return (
        <>
            <Form.Field>
                <Form.Input
                    id="insiderID"
                    name="insiderID"
                    label="Mã số sinh viên"
                    type="text"
                    onChange={handleChange}
                    error={errors?.insiderID ? errors?.insiderID : false}
                />
            </Form.Field>

            <Form.Dropdown
                id="workplace"
                name="workplace"
                label="Khoa"
                type="text"
                style={h}
                loading={facultyLoading}
                options={list(facultyArr)}
                onChange={handleChange}
                selection
                search
                error={errors?.workplace ? errors?.workplace : false}
            />
            <Form.Dropdown
                id="major"
                name="major"
                label="Chuyên ngành"
                type="text"
                loading={majorLoading}
                style={h}
                options={list(majors)}
                onChange={handleChange}
                selection
                search
                error={errors?.major ? errors?.major : false}
            />
        </>
    );
};

export default Student;
