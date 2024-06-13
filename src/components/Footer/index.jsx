import Subtitle from "../Subtitle";
import Title from "../Title";
import phone from "../../assets/svg/phone.svg";
import "./styles.css";

const Footer = ({
    children,
    routes,
    selectedPage,
    setSelectedPage,
    style,
    ...rest
}) => {
    return (
        <footer className="footer" style={style} {...rest}>
            <div className="footer-sub-container">
                <Subtitle>Fale conosco</Subtitle>
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                    }}
                >
                    <img src={phone} alt="Ícone de telefone" />
                    <Title>(51) 3290-6565</Title>
                </div>
            </div>

            {routes.map(({ icon: Icon, page }, index) => (
                <Icon
                    key={index}
                    size={30}
                    className={
                        selectedPage === page ? "yellow-icon" : "white-icon"
                    }
                    onClick={() => setSelectedPage(page)}
                />
            ))}
            {children}
        </footer>
    );
};

export default Footer;
