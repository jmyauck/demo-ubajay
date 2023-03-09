import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './contactSection.css';

const { TextArea } = Input;

export const ContactSection =()=> {
    return (
        <div className='contact-section'>
            <h1>Contactanos</h1>
            <div className='usser-data'>
            <Input placeholder="Nombre y apellido" prefix={<UserOutlined />} />
            <Input placeholder="Correo electronico" />
            </div>
            <div className='text-area'>
                <TextArea rows={8} />
            </div>
        </div>
    )
}

export default ContactSection;