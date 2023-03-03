import React from 'react';
import './obrasCiviles.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/background-image.context';



export const Obras = () => {
    
    const { setClassName } = useContext(ModalContext)
    useEffect(() => {
        setClassName('background-image-2')
    }, [])


    return (
        <h1>seccion obras civiles</h1>
    )
}

export default Obras;