import React, { useEffect } from 'react';
import './viviendasMultifamiliares.css';
import { Image } from 'antd'
import { useContext } from 'react';
import { ModalContext } from '../../contexts/background-image.context';
import Img1 from '../../components/images/035_3D_D.C.png'
import Img2 from '../../components/images/desarollador.png'
import Img3 from '../../components/images/035_3D_D.C.png'
import Img4 from '../../components/images/035_3D_D.C.png'
import Footer  from '../../components/Footer/Footer';





export const Multifamiliares = () => {

    const { setClassName } = useContext(ModalContext)
    useEffect(() => {
        setClassName('background-image-2')
    }, [])

    return (
        <div>
            <div className='multi-banner'>
                <img src={Img1} />
                <img src={Img2} />
                <img src={Img3} />
                <img src={Img3} />
            </div>
            <div className='section-multi'>
                <div className='info-multi'>
                    <h1>Altos de Sarfield</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima molestias, porro atque recusandae, repudiandae voluptatibus repellendus alias temporibus delectus deserunt necessitatibus quasi quod voluptate, nam sapiente praesentium voluptatum veritatis.</p>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </div>
                <div className='galery-multi'>
                    <Image.PreviewGroup>
                        <Image src={Img1} className='galery-image'/>
                        <Image src={Img2} className='galery-image'/>
                        <Image src={Img3} className='galery-image'/>
                        <Image src={Img4} className='galery-image'/>
                    </Image.PreviewGroup>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Multifamiliares;