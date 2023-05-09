import React from 'react';
import './desarrolloUrbano.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/background-image.context';
import  Footer  from '../../components/Footer/Footer';



export const Desarrollo = () => {

    const { setClassName } = useContext(ModalContext)
    useEffect(() => {
        setClassName('background-image-2')
    }, [])

    return (
        <div>
        <h1>seccion desarrollo urbano</h1>
        <Footer/>
        </div>  
        )
}

export default Desarrollo;