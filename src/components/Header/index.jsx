import headerIcon from "../../assets/svg/headerIcon.svg";
import phone from "../../assets/svg/phone.svg";
import Title from "../Title";
import Subtitle from "../Subtitle";
import "./styles.css";

const Header = ({
    children,
    routes,
    selectedPage,
    setSelectedPage,
    style,
    ...rest
}) => {
    return (
        <header className="header" style={style} {...rest}>
            <img src={headerIcon} className="header-icon" />

            <div className="header-items">
                {routes.map((item, index) => (
                    <Title
                        style={{
                            cursor: "pointer",
                        }}
                        onClick={() => setSelectedPage(item.page)}
                        hover={true}
                        isSelected={item.page === selectedPage}
                        key={index}
                    >
                        {item.page}
                    </Title>
                ))}
            </div>

            <div
                className="header-icon"
                style={{
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "5px",
                }}
            >
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
        </header>
    );
};

export default Header;
