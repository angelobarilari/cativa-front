import "./styles.css";

const CommonText = ({ children, style, ...rest }) => {
    return (
        <p className="common-text" style={style} {...rest}>
            {children}
        </p>
    );
};

export default CommonText;
