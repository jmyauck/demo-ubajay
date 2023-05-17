import React from "react";
import "./downloadButton.css"


export const DownloadButton =()=> {
    return (
        <div className="container-info-extra">
            <h1>¿Te interesa saber más?</h1>
            <h3>Conocé al detalle nuestra obra accediendo a la <a href="https://drive.google.com/file/d/1Dw52ROo5KXlmn4BNoY8TddBlmtsV_aGJ/view?usp=share_link" download><b>Revista Oficial de Altos de Sarsfield</b></a></h3>       
        </div>
    )
}

export default DownloadButton;