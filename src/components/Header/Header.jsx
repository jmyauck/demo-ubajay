import { CustomNavbar } from '../Navbar/Navbar'
import './header.css'
import { Brand } from '../Brand/Brand'
import { FacebookFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons'
import { DemoNav } from '../Navbar/NavDemo'
import  {Navbarr}  from '../Navbar/Navbarr'



export const Header =()=> {
    return(
            <div className='header-style'>
                <Brand/>
                <div className='actions-bar'>
                    <DemoNav exact path={'/section/:id'}/>
                    <div className='socialbar'>   
                        <a href='https://www.facebook.com/UbajayDesarrollos' className='social-item'><FacebookFilled style={{ fontSize: '26px', color: '#989DA6'}}/></a>
                        <a href='https://www.instagram.com/ubajay.desarrollos/'><InstagramFilled style={{ fontSize: '26px', color: '#989DA6'}} className='social-item'/></a>
                        <a href='https://www.youtube.com/@ubajaydesarrollos8311'><YoutubeFilled style={{ fontSize: '28px', color: '#989DA6'}} className='social-item'/></a>
                    </div>
                </div>
            </div>
    )
}

export default Header;