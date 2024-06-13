import React from "react";
import "./styles.css";

const Title = ({
    onClick,
    isSelected,
    children,
    style,
    hover = false,
    ...rest
}) => {
    return (
        <p
            onClick={onClick}
            className={`title ${hover ? "header-hover" : ""} ${
                isSelected ? "selected" : ""
            }`}
            style={style}
            {...rest}
        >
            {children}
        </p>
    );
};

export default Title;
