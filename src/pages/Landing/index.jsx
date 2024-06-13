import { useState } from "react";
import {
    Button,
    CommonText,
    Header,
    Input,
    Footer,
    Subtitle,
    Title,
} from "../../components";
import { FaTag } from "react-icons/fa";
import { MdOutlineAddBusiness } from "react-icons/md";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAgencySchema } from "../../schemas/registerAgencySchema";
import { saveAgency } from "../../services";
import InputMask from "react-input-mask";
import torre from "../../assets/png/torre.jpg";
import plane from "../../assets/svg/plane.svg";
import headerIcon from "../../assets/svg/headerIcon.svg";
import "./styles.css";

const Landing = () => {
    const [selectedPage, setSelectedPage] = useState("Programa de fidelidade");
    const [loading, setLoading] = useState(false);
    const routes = [
        { page: "Programa de fidelidade", icon: FaTag },
        { page: "Cadastre sua agência", icon: MdOutlineAddBusiness },
    ];

    const {
        control,
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerAgencySchema),
        mode: "onChange",
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await saveAgency(data);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="global">
            <div className="image-container">
                <img
                    src={headerIcon}
                    className="company-icon"
                    alt="Ícone da companhia"
                />
                <img src={plane} className="plane-icon" alt="Ícone de avião" />
                <img src={torre} alt="Imagem inicial" className="image" />
            </div>

            <div className="content-container">
                <div className="secondary-container">
                    <Header
                        routes={routes}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />

                    <div className="lane" />

                    {selectedPage === "Programa de fidelidade" ? (
                        <div className="content">
                            <div className="texts-container-header">
                                <Title>Programa de fidelidade</Title>

                                <Subtitle>
                                    Viaje mais e ganhe recompensas exclusivas
                                </Subtitle>

                                <div className="main-content">
                                    <div className="text-container">
                                        <CommonText>
                                            Nosso programa de fidelidade permite
                                            que você ganhe pontos em cada
                                            reserva de viagem, que podem ser
                                            trocados por descontos, upgrades e
                                            muito mais.
                                        </CommonText>

                                        <CommonText>
                                            Ganhe pontos em todas as suas
                                            reservas, descontos exclusivos para
                                            membros, acesso a ofertas especiais,
                                            upgrades de quarto gratuitos e muito
                                            mais.
                                        </CommonText>

                                        <CommonText>
                                            Além disso, como membro do nosso
                                            programa de fidelidade, você terá
                                            acesso prioritário a promoções
                                            sazonais e eventos especiais,
                                            garantindo que você esteja sempre à
                                            frente quando se trata das melhores
                                            ofertas de viagem. Junte-se a nós
                                            hoje e comece a desfrutar dos
                                            inúmeros benefícios que reservamos
                                            para nossos membros fiéis.
                                        </CommonText>
                                    </div>
                                </div>
                            </div>

                            <Button children="SAIBA MAIS" />
                        </div>
                    ) : (
                        <div className="content">
                            <div className="texts-container-header">
                                <Title>Cadastre sua agência</Title>

                                <Subtitle>
                                    Preencha o formulário e entraremos em
                                    contato com você
                                </Subtitle>
                            </div>

                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="main-content"
                            >
                                <div className="input-container">
                                    <div className="error-container">
                                        {errors.agencyName && (
                                            <span className="error">
                                                {errors.agencyName.message}
                                            </span>
                                        )}
                                    </div>

                                    <Input
                                        type="text"
                                        placeholder="Digite aqui o nome da sua agência"
                                        {...register("agencyName")}
                                    />
                                </div>

                                <div className="input-container">
                                    <div className="error-container">
                                        {errors.name && (
                                            <span className="error">
                                                {errors.name.message}
                                            </span>
                                        )}
                                    </div>

                                    <Input
                                        type="text"
                                        placeholder="Digite aqui o seu nome"
                                        {...register("name")}
                                    />
                                </div>

                                <div className="input-container">
                                    <div className="error-container">
                                        {errors.phone && (
                                            <span className="error">
                                                {errors.phone.message}
                                            </span>
                                        )}
                                    </div>

                                    <InputMask
                                        className="input"
                                        mask="(99) 99999-9999"
                                        type="text"
                                        placeholder="Digite aqui o telefone para contato"
                                        {...register("phone")}
                                    />
                                </div>

                                <div className="input-container">
                                    <div className="error-container">
                                        {errors.email && (
                                            <span className="error">
                                                {errors.email.message}
                                            </span>
                                        )}
                                    </div>

                                    <Input
                                        type="email"
                                        placeholder="Digite aqui o e-mail para contato"
                                        {...register("email")}
                                    />
                                </div>

                                <div className="input-container">
                                    <Input
                                        type="text"
                                        placeholder="Observações"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    children={"ENVIAR INFORMAÇÕES"}
                                />
                            </form>
                        </div>
                    )}

                    <Footer
                        routes={routes}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Landing;
