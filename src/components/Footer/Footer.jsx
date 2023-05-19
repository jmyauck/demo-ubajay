import Brand from '../Brand/Brand';
import './footer.css'
import { FacebookFilled, InstagramFilled, YoutubeFilled, PushpinFilled, PhoneFilled, MailFilled } from '@ant-design/icons'


const Footer =()=> {

    return(
        <div>
            <div className='footer-style'>
                <div>
                    <Brand/>
                </div>
                <div>
                    <ul className='data-list'>
                        <li>
                            <PushpinFilled />
                            <p>Ubajay Desarrollos | Ciudad de Santa Fe.</p>
                        </li>
                        <li>
                            <PhoneFilled />
                            <p>342 6105200</p>
                        </li>
                        <li>
                            <MailFilled />
                            <p>ubajaydesarrollos@gmail.com</p>
                        </li>
                    </ul>
                </div>            
                <div className='socialbar'>   
                        <a href='https://www.facebook.com/UbajayDesarrollos' className='social-item'><FacebookFilled style={{ fontSize: '26px', color: '#989DA6'}}/></a>
                        <a href='https://www.instagram.com/ubajay.desarrollos/'><InstagramFilled style={{ fontSize: '26px', color: '#989DA6'}} className='social-item'/></a>
                        <a href='https://www.youtube.com/@ubajaydesarrollos8311'><YoutubeFilled style={{ fontSize: '28px', color: '#989DA6'}} className='social-item'/></a>
                </div>
            </div>
                <p className='signature'>InlineDW</p>
        </div>
    )

}

export default Footer;