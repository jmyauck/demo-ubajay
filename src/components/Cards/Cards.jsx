import img1 from '../images/036_3D_DeptoGeneral.jpg'
import img2 from '../images/019_1D_Piso8.jpg'
import img3 from '../images/027_3D_D.M_Piso6.jpg'
import img4 from '../images/035_3D_D.C.png'
import './cards.css'
import { Link } from 'react-router-dom'



const cardsDetails = [
  {
    title: "card 1",
    img: img1,
    id: '1'
  },
  {
    title: "card 2",
    img: img2,
    id: '2'
  },
  {
    title: "card 3",
    img: img3,
    id: '3'
  },
  {
    title: "card 4",
    img: img4,
    id: '4'
  },
]



export const Card = () => {


  return (
    <div className='container-cards'>
      {cardsDetails.map(card =>
        <Link to={`section/${card.id}`}>
          <div className='card-style'>
            <img src={card.img} />
            <div className='content'>
              <h3>{card.title}</h3>
            </div>
          </div>
        </Link>
      )
      }
    </div>
  )
}

export default Card;