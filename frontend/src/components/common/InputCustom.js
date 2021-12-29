import React from "react";
import {
    Controller,
    useFormContext,
    useController,
    get,
} from "react-hook-form";
import { Form } from "semantic-ui-react";

const InputCustom = ({ ...props }) => {
    const { meta } = useController(props);
    const { control, formState } = useFormContext();
    const error = get(formState.errors, props.name);
    const errorText = meta?.invalid ? error?.message : "";
    return (
        <Controller
            {...props}
            as={Form.Input}
            control={control}
            error={!!errorText ? { content: errorText } : false}
        />
    );
};

export default InputCustom;
