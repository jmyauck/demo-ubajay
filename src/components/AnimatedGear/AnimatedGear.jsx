import React from "react";
import './animatedGear.css'
import ImgGear from '../images/assets/gear.png'

export const AnimatedGear =()=> {
    return(
        <div className="container">
            <img src={ImgGear} className="imagen1"/> <img src={ImgGear} className="imagen2"/>
        </div>
    )
}

export default AnimatedGear;