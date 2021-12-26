import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
    const [value, setValue] = useState(initialState);
    const toggle = useCallback(() => {
        setValue((value) => !value);
    }, []);
    return [value, toggle];
};

export default useToggle;
