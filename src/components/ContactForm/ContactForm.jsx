import React, { useState } from 'react';
import './ContactForm.css'; // Importar estilos CSS para el formulario

const ContactForm = () => {
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
  };

  return (
    <div className='form-container'>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Formulario de Contacto</h2>

        {/* Campo para el nombre */}
        {/* <label htmlFor="name">Nombre:</label> */}
        <input
          placeholder='Tu nombre'
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
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
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        {/* Campo para el mensaje */}
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        ></textarea>

        {/* Botón para enviar el formulario */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;