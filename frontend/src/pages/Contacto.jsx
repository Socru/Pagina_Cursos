import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/contacto.css';

export default function Contacto() {
  const toggleMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-abierto');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    e.target.reset();
  };

  return (
    <>
      <header className="navbar">
        <div className="container">
          <Link to="/" className="logo-contenedor">
            <img src="/media/logo.jpg" alt="Logo Empresa" className="logo-img" />
            <h1 className="nombre_empresa">Empresa</h1>
          </Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <nav className="menu" id="menu">
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/conferencias">Conferencias</Link></li>
              <li><Link to="/conexion">Conexión Espiritual</Link></li>
              <li><Link to="/coaching">Coaching Somático</Link></li>
              <li><Link to="/cursos">Cursos Online</Link></li>
              <li><Link to="/contacto" className="activo">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="contenido contacto">
        <section className="intro">
          <h2>Contáctanos</h2>
          <p>¿Tienes preguntas, dudas o comentarios? ¡Escríbenos!</p>
        </section>

        <section className="formulario-contacto">
          <form onSubmit={handleSubmit}>
            <h3>Formulario de contacto</h3>

            <div>
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                placeholder="Ej. Ana Martínez"
              />
            </div>

            <div>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Ej. nombre@correo.com"
              />
            </div>

            <div>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                required
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <button type="submit" className="boton">
              Enviar mensaje
            </button>
          </form>
        </section>

        <section className="otros-medios">
          <p>También puedes escribirnos por:</p>
          <p>
            <a href="mailto:tuemail@ejemplo.com">Correo electrónico</a> |{' '}
            <a href="https://wa.me/5210000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </p>
        </section>

        <section className="newsletter">
          <h3>Suscríbete al Journal mensual</h3>
          <p>Recibe reflexiones, recursos y noticias directo a tu correo cada mes.</p>
          <form
            action="https://formspree.io/f/tu-id-de-formulario-newsletter"
            method="POST"
            className="newsletter-form"
          >
            <input className='correo'
              type="email"
              name="email"
              required
              placeholder="Tu correo electrónico"
            />
            <button type="submit">Suscribirme</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Empresa. Todos los derechos reservados.</p>
        <p>
          <a href="mailto:tuemail@ejemplo.com">tuemail@gmail.com</a> |{' '}
          <a href="https://wa.me/5210000000000">WhatsApp</a>
        </p>
      </footer>
    </>
  );
}
