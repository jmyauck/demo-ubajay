import img1 from '../images/036_3D_DeptoGeneral.jpg'
import img2 from '../images/019_1D_Piso8.jpg'
import img3 from '../images/027_3D_D.M_Piso6.jpg'
import img4 from '../images/035_3D_D.C.png'
import './cards.css'


const cardsDetails = [
  {
    title: "card 1",
    img: img1
  },
  {
    title: "card 2",
    img: img2
  },
  {
    title: "card 3",
    img: img3
  },
  {
    title: "card 4",
    img: img4
  },
]



export const Card = () => {


  return (
    <div className='container-cards'>
      {cardsDetails.map(card =>
        <div className='card-style'>
            <img src={card.img} />
          <div className='content'>           
            <h3>{card.title}</h3>
            <a href='#'>Ir a seccion</a>
          </div>
        </div>)}
    </div>
  )
}

export default Card;