import './navdemo.css';
import React from 'react';
import  IconApp  from './assets/applications.png';
import  IconCancel  from './assets/cancel2.png';
import { HomeFilled, CloseOutlined } from "@ant-design/icons";
import { Brand } from '../Brand/Brand';
import { Link } from 'react-router-dom';
import  { useState } from 'react';



export const DemoNav = () => {
    return (
        <>
            <nav className="navBar" id="nav">
                
                {/* <img src="/images/assets/LOGO_BLANCO.png" className="navLogo"/ > */}
                    <ul className="navList">
                        <li className="navItem">
                            <Link to={'/'} className="navLink">Home</Link>
                            
                        </li>
                        <li className="navItem">
                            <Link to={'/section/viviendas-multifamiliares'} className="navLink">Viviendas Multifamiliares</Link>
                        </li>
                        <li className="navItem">
                            <Link to={'/section/viviendas-unifamiliares'} className="navLink">Viviendas Unifamiliares</Link>
                            
                        </li>
                        <li className="navItem">
                            <Link to={'/section/desarrollo-urbano'} className="navLink">Desarrollo Urbano</Link>
                        </li>
                        <li className="navItem">
                            <Link to={'/section/obras-civiles'} className="navLink">Obras civiles</Link>                          
                        </li>
                    </ul>
                    <a href="#nav" class="navHambur">
                        <HomeFilled className="navIcon"/>
                    </a>
                    <a href="#" class="navClose">
                        <CloseOutlined className="navIcon"/>
                    </a>
            </nav>
        </>
    );
};

export default DemoNav;