import React, { useState } from 'react';
import './ContactForm.css'; // Importar estilos CSS para el formulario
import axios from "axios";

/* const ContactForm = () => {
  // Estados para almacenar los valores de los campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir que se recargue la página al enviar el formulario

    // Aquí puedes agregar la lógica para enviar el formulario a través de un servicio o API
    console.log(`Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);

    // Limpiar los estados de los campos del formulario
    setName('');
    setEmail('');
    setMessage('');
  }; */
  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const { name, email, message } = formData;
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post("https://formspree.io/f/xgebrprr", {
          name,
          email,
          message,
        });
        console.log(response);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className='form-container'>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contactanos</h2>

        {/* Campo para el nombre */}
        {/* <label htmlFor="name">Nombre:</label> */}
        <input
          placeholder='Tu nombre'
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />

        {/* Campo para el email */}
        {/* <label htmlFor="email">Email:</label> */}
        <input
          placeholder='Correo electronico'
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        {/* Campo para el mensaje */}
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
          required
        ></textarea>

        {/* Botón para enviar el formulario */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;