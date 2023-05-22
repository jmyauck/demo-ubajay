import React from 'react';
import './obrasCiviles.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/background-image.context';
import { AnimatedGear } from '../../components/AnimatedGear/AnimatedGear'
import Footer from '../../components/Footer/Footer'
import { WhatsAppButton } from '../../components/WhatsappWidget/WhatsappWidget'



export const Obras = () => {
    
    const { setClassName } = useContext(ModalContext)
    useEffect(() => {
        setClassName('background-image-2')
    }, [])


    return (
        <div>
        <AnimatedGear className='animated-gear'/>
        <div className='obras-proximamente'>
            <h2>Estamos trabajando en esta sección</h2>
            <h5>Próximamente tendrás novedades de las obras civiles a cargo de <b>Ubajay Desarrollos.</b></h5>
        </div>
        <WhatsAppButton/>
        <Footer/>
        </div>
    )
}

export default Obras;