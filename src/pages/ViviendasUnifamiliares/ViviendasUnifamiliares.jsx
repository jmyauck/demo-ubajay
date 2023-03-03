import React from 'react';
import './viviendasUnifamiliares.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/background-image.context';



export const Unifamiliares = () => {

    const { setClassName } = useContext(ModalContext)
    useEffect(() => {
        setClassName('background-image-2')
    }, [])

    return (
        <h1>seccion viviendas unifamiliares</h1>
    )
}

export default Unifamiliares;