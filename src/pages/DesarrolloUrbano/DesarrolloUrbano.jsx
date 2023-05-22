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

export const Desarrollo = () => {
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
            <div className="section-desarrollo">
                <div className="info-multi" data-aos="zoom-in">
                    <div>
                        <div className="container-info-desarrollo">
                            <h1>Loteo San Miguel</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quos animi veniam perspiciatis magnam voluptatibus quae, sed ullam amet aliquam
                                ex expedita eius necessitatibus quia nobis fugiat nesciunt aspernatur suscipit. Fuga!
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
            <Footer />
        </div>
    );
};

export default Desarrollo;
