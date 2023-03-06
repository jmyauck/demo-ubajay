import React, { useEffect, useContext } from 'react';
import './viviendasMultifamiliares.css';
import { Image, Carousel } from 'antd'
import { ModalContext } from '../../contexts/background-image.context';
import Img1 from '../../components/images/035_3D_D.C.png'
import Img2 from '../../components/images/019_1D_Piso8.jpg'
import Img3 from '../../components/images/036_3D_DeptoGeneral.jpg'
import Img4 from '../../components/images/027_3D_D.M_Piso6.jpg'
import Footer from '../../components/Footer/Footer';
import IconBed from '../../components/images/assets/double-bed.png';
import IconKitchen from '../../components/images/assets/kitchen.png';
import IconLocation from '../../components/images/assets/maps-and-location.png';
import IconPool from '../../components/images/assets/swimming-pool.png';







export const Multifamiliares = () => {

    const { setClassName } = useContext(ModalContext)
    useEffect(() => {
        setClassName('background-image-2')
    }, [])


    return (


        <div>
            <Carousel autoplay effect="fade" className='carousel-multi'>
                <div>
                    <img src={Img1}/>
                </div>
                <div>
                    <img src={Img2} />
                </div>
                <div>
                    <img src={Img3} />
                </div>
                <div>
                    <img src={Img4} />
                </div>
            </Carousel>

            <div className='section-multi'>
                <div className='info-multi'>
                    <h1>Altos de Sarfield</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima molestias, porro atque recusandae, repudiandae voluptatibus repellendus alias temporibus delectus deserunt necessitatibus quasi quod voluptate, nam sapiente praesentium voluptatum veritatis.</p>
                    <ul>
                        <li><img src={IconBed}/>Item 1</li>
                        <li><img src={IconKitchen}/>Item 2</li>
                        <li><img src={IconLocation}/>Item 3</li>
                        <li><img src={IconPool}/>Item 4</li>
                    </ul>
                </div>
                <div className='galery-multi'>
                    <Image.PreviewGroup className='galery-div-group'>
                        <Image src={Img1} className='galery-image' />
                        <Image src={Img2} className='galery-image' />
                        <Image src={Img3} className='galery-image' />
                        <Image src={Img4} className='galery-image' />
                        <Image src={Img1} className='galery-image' />
                        <Image src={Img2} className='galery-image' />
                        <Image src={Img3} className='galery-image' />
                        <Image src={Img4} className='galery-image' />
                    </Image.PreviewGroup>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Multifamiliares;