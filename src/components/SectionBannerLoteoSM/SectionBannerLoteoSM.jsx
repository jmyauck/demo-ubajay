import './sectionBannerLoteoSM.css'
import ReactPlayer from 'react-player';
import LogoLoteoSM from '../images/loteo-san-miguel.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export const SectionBannerLoteoSM =()=>{

    useEffect(()=> {
        AOS.init({duration: 1000});
        console.log('render')
      }, []);

    return(
        <div className='section-multimedia' data-aos='zoom-in'>
            <img src={LogoLoteoSM}/>
            <h1>Loteo San Miguel</h1>
            <ReactPlayer 
            url='https://www.youtube.com/watch?v=6-CDeeb0dzw&ab_channel=UbajayDesarrollos'
            className='video-loteo'/>
        </div>
    )
}

export default SectionBannerLoteoSM;

