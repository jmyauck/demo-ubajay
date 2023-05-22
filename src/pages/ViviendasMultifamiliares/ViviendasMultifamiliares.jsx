import React, { useEffect, useContext } from 'react';
import './viviendasMultifamiliares.css';
import { Image, Carousel } from 'antd'
import { ModalContext } from '../../contexts/background-image.context';
import Img1 from '../../components/images/Multifamiliares/035_3D_D.C.png'
import Img2 from '../../components/images/Multifamiliares/019_1D_Piso8.jpg'
import Img3 from '../../components/images/Multifamiliares/036_3D_DeptoGeneral.jpg'
import Img4 from '../../components/images/Multifamiliares/027_3D_D.M_Piso6.jpg'
import Img5 from '../../components/images/Multifamiliares/045_Fachada Con Montaje-min.jpg'
import Img6 from '../../components/images/Multifamiliares/043_Fachada Arriba.jpg'
import Img7 from '../../components/images/Multifamiliares/024_1D_Baño.png'
import Img8 from '../../components/images/Multifamiliares/019_1D_Piso8.jpg'
import Img9 from '../../components/images/Multifamiliares/013_Depto 1D Cocina Comedor 2.jpg'
import Img10 from '../../components/images/Multifamiliares/012_Depto 1D Cocina-Comedor.jpg'
import Img11 from '../../components/images/Multifamiliares/011_Depto 1D General 2.jpg'
import Img12 from '../../components/images/Multifamiliares/010_Depto1D General.jpg'
import Img13 from '../../components/images/Multifamiliares/009_Terraza Pileta-min.jpg'
import Img14 from '../../components/images/Multifamiliares/008_Terraza -min.png'
import Img15 from '../../components/images/Multifamiliares/007_Sum Asador.jpg'
import Img16 from '../../components/images/Multifamiliares/006_Sum.jpg'
import Img17 from '../../components/images/Multifamiliares/005_SumVistaEste.jpg'
import Img18 from '../../components/images/Multifamiliares/004_Hall de Dia-min.jpg'
import Img19 from '../../components/images/Multifamiliares/003_Hall noche 2.jpg'
import Img20 from '../../components/images/Multifamiliares/002_Hall de Noche.jpg'
import Img21 from '../../components/images/Multifamiliares/040_Suroeste-min.jpg'
import Vid1 from '../../components/images/Multifamiliares/videos/WhatsApp Video 2023-03-15 at 17.06.29COMPRESSED.mp4'
import Footer from '../../components/Footer/Footer';
import IconBed from '../../components/images/assets/double-bed.png';
import IconKitchen from '../../components/images/assets/kitchen.png';
import IconLocation from '../../components/images/assets/maps-and-location.png';
import IconPool from '../../components/images/assets/swimming-pool.png';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ReactPlayer from 'react-player';
import Map from '../../components/Map/Map'
import { DownloadButton } from '../../components/DownloadButton/DownloadButton'
import { WhatsAppButton } from '../../components/WhatsappWidget/WhatsappWidget'







export const Multifamiliares = () => {

    const { setClassName } = useContext(ModalContext)
    useEffect(() => {
        setClassName('background-image-2')
    }, [])


    useEffect(() => {
        AOS.init({ duration: 1100 });
        AOS.init({ once : true })
    }, []);

    return (


        <div>
            <Carousel autoplay effect="fade" className='carousel-multi'>
                <div>
                    <img src={Img6} />
                </div>
                <div>
                    <img src={Img21} />
                </div>
                <div>
                    <img src={Img17} />
                </div>
                <div>
                    <img src={Img10} />
                </div>
            </Carousel>
            <div className='section-multi'>
                <div className='info-multi' data-aos='zoom-in'>
                    <div>
                        <div className='container-info'>
                            <h1>Altos de Sarsfield</h1>
                            <p>La premisa de este proyecto es la de aprovechar principalmente su ubicación estratégica, su entorno y sus vistas;
                                esta conjunción lo hace un producto diferente y referente
                                en la zona.
                                Se encuentra en Bv. Velez Sarsfield 3344, a pocos metros
                                de Bv. Gálvez pero sin estar inmersos en el tráfico y el movimiento masivo que éste genera, a pasos de costanera
                                este, oeste, puente colgante, zona recreativa por excelencia. Frente a un hermoso pulmón verde con su arbolado,
                                su ciclovía, accesibilidad al centro de la ciudad, al sector
                                del puerto con sus centros comerciales cerrados, casino,
                                hoteles, y dentro de un barrio como Candioti, que se ha
                                convertido en el polo gastronómico y social más importante de la ciudad.
                                Es el punto de partida de <strong>ubajay desarrollos</strong> en conjunto con el arquitecto Gabriel Palmier.
                            </p>
                        </div>
                        <ul>
                            <li><img src={IconBed} />1, 2 y 3 dormitorios</li>
                            <li><img src={IconKitchen} />Cocina comedor</li>
                            <li><img src={IconPool} />Solárium húmedo</li>
                            <li><img src={IconLocation} />Vélez Sarsfield 3344</li>
                        </ul>
                    </div>
                    <div className='img-section'>
                        <img src={Img20} />
                    </div>
                </div>
                    <ReactPlayer className='vid-carou'
                        url={require('../../components/images/Multifamiliares/videos/WhatsApp Video 2023-03-15 at 17.06.29COMPRESSED.mp4')}
                        controls
                        playing
                        muted
                        loop
                    />
                <div className='galery-multi' >
                    <Image.PreviewGroup className='galery-div-group'>
                        <Image src={Img5} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img19} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img18} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img2} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img3} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img4} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img1} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img8} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img11} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img7} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img13} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img14} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img9} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img12} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img16} className='galery-image' data-aos='zoom-in'/>
                        <Image src={Img15} className='galery-image' data-aos='zoom-in'/>
                    </Image.PreviewGroup>
                </div>
            </div>
            <DownloadButton/>
            <WhatsAppButton/>
            <Footer />
        </div>
    )
}

export default Multifamiliares;