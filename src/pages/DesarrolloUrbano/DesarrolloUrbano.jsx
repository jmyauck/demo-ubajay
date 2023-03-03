import React from 'react';
import './desarrolloUrbano.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/background-image.context';



export const Desarrollo = () => {

    const { setClassName } = useContext(ModalContext)
    useEffect(() => {
        setClassName('background-image-2')
    }, [])

    return (
        <h1>seccion desarrollo urbano</h1>
    )
}

export default Desarrollo;