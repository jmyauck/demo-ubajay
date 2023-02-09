import { Navbar } from '../Navbar/Navbar'
import './header.css'
import { Brand } from '../Brand/Brand'


export const Header =()=> {
    return(
            <div className='header-style'>
                <Brand/>
                <Navbar/>
            </div>
    )
}

export default Header;