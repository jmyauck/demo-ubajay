import img1DARK from '../images/assets/buildingsDARK.png'
import img1LIGHT from '../images/assets/buildingsLIGHT.png'
import img2LIGHT from '../images/assets/houseLIGHT.png'
import img3LIGHT from '../images/assets/land.png'
import img4LIGHT from '../images/assets/excavator.png'
import './cards.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'




const cardsDetails = [
  {
    title: "Viviendas Multifamiliares",
    img: img1LIGHT,
    id: 'viviendas-multifamiliares',
  },
  {
    title: "Viviendas Unifamiliares",
    img: img2LIGHT,
    id: 'viviendas-unifamiliares'
  },
  {
    title: "Desarrollo Urbano",
    img: img3LIGHT,
    id: 'desarrollo-urbano'
  },
  {
    title: "Obras Civiles",
    img: img4LIGHT,
    id: 'obras-civiles'
  },
]



export const Card = () => {


  useEffect(() => {
    AOS.init({ duration: 1100 });
    AOS.init({ once : true })
}, []);


  return (
    <div className='container-cards' data-aos='zoom-in'>
      {cardsDetails.map(card =>
        <Link to={`section/${card.id}`} className='link-style'>
          <div className='card-style' >
            <img src={card.img} />
            <div className='content'>
              <h5>{card.title}</h5>
            </div>
          </div>
        </Link>
      )
      }
    </div>
  )
}

export default Card;