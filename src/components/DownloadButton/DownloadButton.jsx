import React from "react";
import "./downloadButton.css"


export const DownloadButton =()=> {
    return (
        <div className="container-info-extra">
            <h2>¿Te interesa saber más?</h2>
            <h5>Conocé al detalle nuestra obra accediendo a la <a href="https://drive.google.com/file/d/1Dw52ROo5KXlmn4BNoY8TddBlmtsV_aGJ/view?usp=share_link" download><b>Revista Oficial de Altos de Sarfield</b></a></h5>       
        </div>
    )
}

export default DownloadButton;