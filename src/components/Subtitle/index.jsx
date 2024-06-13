import "./styles.css";

const Subtitle = ({ children, style, ...rest }) => {
    return (
        <p className="subtitle" style={style} {...rest}>
            {children}
        </p>
    );
};

export default Subtitle;
