import React from "react";
import "./viviendasUnifamiliares.css";
import { useEffect } from "react";
import { useContext } from "react";
import { ModalContext } from "../../contexts/background-image.context";
import { Image } from "antd";
import ImgLM1 from "../../components/images/Unifamiliares/Baño.jpg";
import ImgLM2 from "../../components/images/Unifamiliares/COCINA.jpg";
import ImgLM3 from "../../components/images/Unifamiliares/COMEDOR 1.jpg";
import ImgLM4 from "../../components/images/Unifamiliares/Fachada 1.jpg";
import ImgLM5 from "../../components/images/Unifamiliares/Fachada 2.jpg";
import ImgLM6 from "../../components/images/Unifamiliares/SALA DE ESTAR.jpg";
import ImgVC1 from "../../components/images/Unifamiliares/01_Fachada.jpg";
import ImgVC2 from "../../components/images/Unifamiliares/02_Contrafrente.jpg";
import ImgVC3 from "../../components/images/Unifamiliares/03_Asador.jpg";
import ImgVC4 from "../../components/images/Unifamiliares/04_Galeria.jpg";
import ImgVC5 from "../../components/images/Unifamiliares/05_Dormitorio.jpg";
import ImgVC6 from "../../components/images/Unifamiliares/06_Cocina.png";
import ImgVC7 from "../../components/images/Unifamiliares/07_Comedor.png";
import ImgVC8 from "../../components/images/Unifamiliares/08_Estar.png";
import Footer from "../../components/Footer/Footer";
import IconBed from "../../components/images/assets/double-bed.png";
import IconKitchen from "../../components/images/assets/kitchen.png";
import IconLocation from "../../components/images/assets/maps-and-location.png";
import IconPool from "../../components/images/assets/swimming-pool.png";
import IconBathroom from "../../components/images/assets/bathtub.png";
import AOS from "aos";
import { duration } from "aos";
import "aos/dist/aos.css";

export const Unifamiliares = () => {
    const { setClassName } = useContext(ModalContext);
    useEffect(() => {
        setClassName("background-image-2");
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1100 });
        AOS.init({ once : true })
    }, []);

    return (
        <div>
            <div className="section-uni">
                <div className="info-uni" data-aos="zoom-in">
                    <div>
                        <div className="container-info-uni">
                            <h1>Los Mandarinos</h1>
                            <p>
                                Esta obra surgió como un gran proyecto de refacción
                                que hoy es el hogar de una familia. Una casa muy bien ubicada,
                                a pocos metros de la Ruta Provincial Nro. 1 y con gran potencial,
                                hoy se encuentra terminada emplazada en dos plantas, con dos dormitorios,
                                dos baños, balcón en una de las habitaciones con doble vidrio, comedor,
                                cocina sectorizada y living.
                            </p>
                        </div>
                        <ul>
                            <li>
                                <img src={IconBed} />
                                Dos dormitorios
                            </li>
                            <li>
                                <img src={IconKitchen} />
                                Cocina, comedor y living de estar
                            </li>
                            <li>
                            <img src={IconBathroom} />
                                Dos baños
                            </li>
                            <li>
                            <img src={IconLocation} />
                                Los Mandarinos 7000
                            </li>
                        </ul>
                    </div>
                    <div className="img-section">
                        <img src={ImgLM4} />
                    </div>
                </div>
                <div className="galery-uni">
                    <Image.PreviewGroup className="galery-div-group">
                        <Image src={ImgLM5} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgLM4} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgLM6} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgLM3} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgLM1} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgLM2} className="galery-image" data-aos="zoom-in" />
                    </Image.PreviewGroup>
                </div>
            </div>
            <div className="section-uni">
                <div className="info-uni" data-aos="zoom-in">
                    <div>
                        <div className="container-info-uni">
                            <h1>Villa California</h1>
                            <p>
                                Calle De la Sombra, Villa California
                                Esta propiedad construida desde cero, fue pensada
                                por su increíble ubicación debida a su cercanía a la Ruta Provincial Nro. 1
                                y su seguridad, zona que actualmente es de gran demanda. La misma se encuentra
                                emplazada en una sola planta y cuenta con tres dormitorios, tres baños, uno corresponde
                                a la pileta en la parte exterior, cocina sectorizada y gran estar comedor. Pileta con gran
                                solárium húmedo y patio verde con asador. Todos sus ambientes son de amplias dimensiones, ventilados
                                e iluminados naturalmente.
                                Disponible para la venta
                            </p>
                        </div>
                        <ul className="vc-list-marg">
                            <li>
                                <img src={IconBed} />
                                Tres dormitorios
                            </li>
                            <li>
                                <img src={IconKitchen} />
                                Cocina sectorizada y gran comedor
                            </li>
                            <li>
                                <img src={IconLocation} />
                                Item 3
                            </li>
                            <li>
                                <img src={IconPool} />
                                Pileta con solárium en amplio patio
                            </li>
                        </ul>
                    </div>
                    <div className="img-section">
                        <img src={ImgVC1} />
                    </div>
                </div>
                <div className="galery-uni">
                    <Image.PreviewGroup className="galery-div-group">
                        <Image src={ImgVC2} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgVC1} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgVC3} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgVC4} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgVC5} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgVC6} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgVC7} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgVC8} className="galery-image" data-aos="zoom-in" />
                    </Image.PreviewGroup>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Unifamiliares;
