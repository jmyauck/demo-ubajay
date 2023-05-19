import React from 'react';
import {WhatsAppWidget} from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import {Brand} from '../Brand/Brand'
import UbajayLogo from '../images/desarollador.png'
import './whatsappWidget.css'

export const WhatsAppButton = () => {
  return (

        <WhatsAppWidget 
          phoneNumber="3435073431" // Reemplaza con tu número de teléfono
          message="¡Hola! ¿En qué puedo ayudarte?" // Mensaje predeterminado
          companyName="Ubajay Desarrollos"
          replyTimeText	= {false}
          
          />
  );
};

export default WhatsAppButton;