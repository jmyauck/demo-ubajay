import img1 from '../images/Multifamiliares/040_Suroeste.jpg'
import img2 from '../images/Multifamiliares/019_1D_Piso8.jpg'
import img3 from '../images/loteo-san-miguel.jpeg'
import img4 from '../images/Multifamiliares/035_3D_D.C.png'
import './cards.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'




const cardsDetails = [
  {
    title: "Viviendas Multifamiliares",
    img: img1,
    id: 'viviendas-multifamiliares',
  },
  {
    title: "Viviendas Unifamiliares",
    img: img2,
    id: 'viviendas-unifamiliares'
  },
  {
    title: "Desarrollo Urbano",
    img: img3,
    id: 'desarrollo-urbano'
  },
  {
    title: "Obras Civiles",
    img: img4,
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