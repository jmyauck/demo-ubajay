import './navdemo.css';
import React from 'react';
import  IconApp  from './assets/applications.png';
import  IconCancel  from './assets/cancel2.png';
import { HomeFilled, CloseOutlined } from "@ant-design/icons";
import { Brand } from '../Brand/Brand'



export const DemoNav = () => {
    return (
        <>
            <nav className="navBar" id="nav">
                
                {/* <img src="/images/assets/LOGO_BLANCO.png" className="navLogo"/ > */}
                    <ul className="navList">
                        <li className="navItem">
                            <a href="/" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="/section/viviendas-multifamiliares" className="navLink">Viviendas Multifamiliares</a>
                        </li>
                        <li className="navItem">
                            <a href="/section/viviendas-unifamiliares" className="navLink">Viviendas Unifamiliares</a>
                        </li>
                        <li className="navItem">
                            <a href="/section/desarrollo-urbano" className="navLink">Desarrollo Urbano</a>
                        </li>
                        <li className="navItem">
                            <a href="/section/obras-civiles" className="navLink">Obras Civiles</a>
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