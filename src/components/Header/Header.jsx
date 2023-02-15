import { Navbar } from '../Navbar/Navbar'
import './header.css'
import { Brand } from '../Brand/Brand'
import { FacebookFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons'


export const Header =()=> {
    return(
            <div className='header-style'>
                <Brand/>
                <Navbar/>
                <div className='socialbar'>   
                    <FacebookFilled style={{ fontSize: '26px', color: '#989DA6'}}/>
                    <InstagramFilled style={{ fontSize: '26px', color: '#989DA6'}}/>
                    <YoutubeFilled style={{ fontSize: '28px', color: '#989DA6'}}/>
                </div>
            </div>
    )
}

export default Header;