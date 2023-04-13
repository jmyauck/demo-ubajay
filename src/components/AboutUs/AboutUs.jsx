import './aboutus.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1100 });
    AOS.init({ once : true })
}, []);

    return (
        <div className='banner' data-aos='fade-down'>
            <div className='banner-content'>
                <h1>Somos Ubajay</h1>
                <p> Somos una empresa con trayectoria en obras unifamiliares, desarrollo urbano, obras civiles e incorporamos obras multifamiliares con nuestro primer edificio Altos de Sarsfield, el cual es el punto de partida para Ubajay Desarrollos, junto con los próximos que estan en camino. 
Tenemos un equipo de trabajo de profesionales que se caracterizan por la agilidad, el cumplimiento en tiempo y forma, en optar por la mejor calidad y terminaciones de las obras y que se desafía constantemente para poder brindar el mayor confort a clientes y el mejor negocio a inversores.
                </p>
              </div>
        </div>
    )

}

export default About;

