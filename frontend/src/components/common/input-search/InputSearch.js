import React, { forwardRef } from "react";
import { SearchIcon } from "../../../assets/icons";
import "./InputSearch.scss";
const InputSearch = (props, ref) => {
    return (
        <div className={`inputsearch__wrapper ${props?.className}`}>
            <span className="inputsearch__img">
                <img src={SearchIcon} alt="close" />
            </span>
            <input
                type="text"
                ref={ref}
                className="inputsearch__text"
                placeholder={props?.placeholder}
                onChange={props.onChange}
            />
        </div>
    );
};

export default forwardRef(InputSearch);
