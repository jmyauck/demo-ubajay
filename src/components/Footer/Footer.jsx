import Brand from '../Brand/Brand';
import './footer.css'


const Footer =()=> {

    return(
        <div className='footer-style'>
            <div>
                <Brand/>
            </div>
            <div>
                <ul>
                    <li>dato 1</li>
                    <li>dato 2</li>
                    <li>dato 3</li>
                </ul>
            </div>
            <div>
                <p>
                    InlineDw
                </p>
            </div>
        </div>
    )

}

export default Footer;