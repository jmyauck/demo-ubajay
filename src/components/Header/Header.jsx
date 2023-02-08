import { Navbar } from '../Navbar/Navbar'
import './header.css'
import {Hero} from '../Hero/Hero'


export const Header =()=> {
    return(
            <div className='header-style'>
                <Navbar/>
            </div>
    )
}

export default Header;