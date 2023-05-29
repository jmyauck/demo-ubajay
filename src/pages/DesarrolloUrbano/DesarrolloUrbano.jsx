import React from "react";
import "./desarrolloUrbano.css";
import { useEffect } from "react";
import { useContext } from "react";
import { ModalContext } from "../../contexts/background-image.context";
import Footer from "../../components/Footer/Footer";
import BannerSM from '../../components/images/loteo-san-miguel.jpeg'
import ImgSM1 from "../../components/images/Lotes/Terreno en Angel Gallardo - 13.jpg";
import ImgSM2 from "../../components/images/Lotes/Terreno en Angel Gallardo - 19-min.jpg";
import ImgSM3 from "../../components/images/Lotes/Terreno en Angel Gallardo - 22-min.jpg";
import ImgSM4 from "../../components/images/Lotes/Loteo Angel Gallardo - 3-min.jpg";
import ImgSM5 from "../../components/images/Lotes/Loteo Angel Gallardo - 5-min.jpg";
import ImgSM6 from "../../components/images/Lotes/Loteo Angel Gallardo - 8-min.jpg";
import ImgSM7 from "../../components/images/Lotes/Loteo Angel Gallardo - 12.jpg";
import ImgSM8 from "../../components/images/Lotes/Loteo Angel Gallardo - 13.jpg";
import ImgSM9 from "../../components/images/Lotes/Loteo Angel Gallardo - 15.jpg";
import { Image } from 'antd'
import ReactPlayer from 'react-player'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {WhatsAppButton} from '../../components/WhatsappWidget/WhatsappWidget'

export const Desarrollo = () => {
    const { setClassName } = useContext(ModalContext);
    useEffect(() => {
        setClassName("background-image-2");
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1100 });
        AOS.init({ once : true })
    }, []);

    return (
        <div>
            <div className="section-desarrollo">
                <div className="info-desarrollo" data-aos="zoom-in">
                    <div>
                        <div className="container-info-desarrollo">
                            <h1>Loteo San Miguel</h1>
                            <p>
                                Es un emprendimiento urbanístico en un área de desarrollo permanente, un barrio
                                residencial de fácil acceso, con un entorno natural y sustentable, donde la naturaleza y el descanso son protagonistas.
                                Un lugar donde tus sueños y proyectos pueden ser posibles.
                            </p>
                            <p>
                                San Miguel te ofrece lotes de 200 a 500 m2 de superficie, en un ambiente seguro y confiable, con agua potable, tendido eléctrico,
                                calles estabilizadas, cordón cuneta, parque de recreación y esparcimiento en cercanía a la laguna Setúbal, ideal para la práctica de 
                                deportes acuáticos y actividades al aire libre.
                            </p>
                            <p>
                                Una excelente opción para una vida tranquila y cercana a la ciudad, a un precio exclusivo con beneficios de rentabilidad a corto, media y largo
                                plazo. Con posibilidad de obtiner una bonificación por pago de contado ó entrega y financiación personalizada.
                            </p>
                            <p>
                                San Miguel es la mejor opción para querer, creer y crear lo que soñas.
                            </p>
                        </div>
                    </div>
                    <div className="img-section">
                        <img src={BannerSM} />
                    </div>
                </div>
                <ReactPlayer
                    className="vid-carou"
                    url='https://www.youtube.com/watch?v=6-CDeeb0dzw&ab_channel=UbajayDesarrollos'
                    controls
                    playing
                    muted
                    loop
                />
                <div className="galery-desarrollo">
                    <Image.PreviewGroup className="galery-div-group">
                        <Image src={ImgSM1} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgSM2} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgSM3} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgSM4} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgSM5} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgSM6} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgSM7} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgSM8} className="galery-image" data-aos="zoom-in" />
                        <Image src={ImgSM9} className="galery-image" data-aos="zoom-in" />
                    </Image.PreviewGroup>
                </div>
            </div>
            <WhatsAppButton/>
            <Footer />
        </div>
    );
};

export default Desarrollo;
