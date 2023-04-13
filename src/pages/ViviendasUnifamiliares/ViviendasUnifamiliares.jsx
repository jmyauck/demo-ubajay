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
            <div className="section-multi">
                <div className="info-multi" data-aos="zoom-in">
                    <div>
                        <div className="container-info">
                            <h1>Los Mandarinos</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                                minima molestias, porro atque recusandae, repudiandae
                                voluptatibus repellendus alias temporibus delectus deserunt
                                necessitatibus quasi quod voluptate, nam sapiente praesentium
                                voluptatum veritatis.
                            </p>
                        </div>
                        <ul>
                            <li>
                                <img src={IconBed} />
                                Item 1
                            </li>
                            <li>
                                <img src={IconKitchen} />
                                Item 2
                            </li>
                            <li>
                                <img src={IconLocation} />
                                Item 3
                            </li>
                            <li>
                                <img src={IconPool} />
                                Item 4
                            </li>
                        </ul>
                    </div>
                    <div className="img-section">
                        <img src={ImgLM4} />
                    </div>
                </div>
                <div className="galery-multi">
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
            <div className="section-multi">
                <div className="info-multi" data-aos="zoom-in">
                    <div>
                        <div className="container-info">
                            <h1>Villa California</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                                minima molestias, porro atque recusandae, repudiandae
                                voluptatibus repellendus alias temporibus delectus deserunt
                                necessitatibus quasi quod voluptate, nam sapiente praesentium
                                voluptatum veritatis.
                            </p>
                        </div>
                        <ul>
                            <li>
                                <img src={IconBed} />
                                Item 1
                            </li>
                            <li>
                                <img src={IconKitchen} />
                                Item 2
                            </li>
                            <li>
                                <img src={IconLocation} />
                                Item 3
                            </li>
                            <li>
                                <img src={IconPool} />
                                Item 4
                            </li>
                        </ul>
                    </div>
                    <div className="img-section">
                        <img src={ImgVC1} />
                    </div>
                </div>
                <div className="galery-multi">
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
