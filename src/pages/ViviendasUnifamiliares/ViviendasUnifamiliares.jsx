import React from 'react';
import './viviendasUnifamiliares.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/background-image.context';
import { Image } from 'antd'
import  ImgLM1 from '../../components/images/Unifamiliares/Baño.jpg'



export const Unifamiliares = () => {

    const { setClassName } = useContext(ModalContext)
    useEffect(() => {
        setClassName('background-image-2')
    }, [])

    return (
        <div>
            <h1>Los Mandarinos</h1>
            <Image.PreviewGroup className='galery-div-group'>
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
                <Image src={ImgLM1} className='galery-image' data-aos='zoom-in' />
            </Image.PreviewGroup>
        </div>
    )
}

export default Unifamiliares;