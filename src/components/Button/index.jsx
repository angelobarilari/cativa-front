import React from "react";
import ReactLoading from "react-loading";
import "./styles.css";

const Button = ({
    type = "button",
    onClick,
    style,
    children,
    alternative,
    disabled,
    ...rest
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            style={style}
            className="default-button"
            disabled={disabled}
            {...rest}
        >
            {!disabled ? (
                <>{children}</>
            ) : (
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ReactLoading
                        type={"spin"}
                        color={"white"}
                        height={20}
                        width={20}
                    />
                </div>
            )}
        </button>
    );
};

export default Button;
