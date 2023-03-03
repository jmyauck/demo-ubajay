import img1 from '../images/036_3D_DeptoGeneral.jpg'
import img2 from '../images/019_1D_Piso8.jpg'
import img3 from '../images/027_3D_D.M_Piso6.jpg'
import img4 from '../images/035_3D_D.C.png'
import './cards.css'
import { Link } from 'react-router-dom'



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


  return (
    <div className='container-cards'>
      {cardsDetails.map(card =>
        <Link to={`section/${card.id}`} className='link-style'>
          <div className='card-style'>
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