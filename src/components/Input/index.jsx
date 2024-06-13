import React, { forwardRef } from "react";
import "./styles.css";

const Input = forwardRef(({ type, placeholder, style, ...rest }, ref) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            style={style}
            ref={ref}
            {...rest}
            className="input"
        />
    );
});

export default Input;
