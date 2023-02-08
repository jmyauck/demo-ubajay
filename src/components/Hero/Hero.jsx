import './hero.css'
import Card from '../Cards/Cards'
import imgbg from '../images/005_SumVistaEsteV2.jpg'

export const Hero = () => {
    return (
            <div className='hero-style'>
                <img src={imgbg} className='hero-img'/> 
                <Card/>             
            </div>
    )
}

export default Hero;