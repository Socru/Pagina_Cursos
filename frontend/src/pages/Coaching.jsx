// src/pages/Coaching.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/conferencias.css'; // Si prefieres estilos separados

export default function Coaching() {
  const toggleMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-abierto');
  };

  const [modalActivo, setModalActivo] = useState(null);
  const abrirModal = (tipo) => setModalActivo(tipo);
  const cerrarModal = () => setModalActivo(null);

  return (
    <>
      <header className="navbar">
        <div className="container">
          <Link to="/" className="logo-contenedor">
            <img src="/media/logo.jpg" alt="Logo Empresa" className="logo-img" />
            <h1 className="nombre_empresa">Empresa</h1>
          </Link>
          <button className="menu-toggle" aria-label="Menú" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <nav className="menu" id="menu">
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/conferencias">Conferencias</Link></li>
              <li><Link to="/conexion">Conexión Espiritual</Link></li>
              <li><Link to="/coaching" className="activo">Coaching Somático</Link></li>
              <li><Link to="/cursos">Cursos Online</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="contenido coaching" style={{ backgroundColor: '#fff' }}>
        <section className="intro">
          <h2>Coaching Somático de Duelo</h2>
          <p>
            Acompañamiento especializado que integra el cuerpo, la emoción y la conciencia para transitar procesos de duelo de manera compasiva y profunda.
          </p>
        </section>

        <section className="programas-coaching">
          <div className="card">
            <h3>Programa 1:1 para Mujeres</h3>
            <p>Un espacio íntimo de transformación personal. Próximamente más información.</p>
            <button className="boton" onClick={() => abrirModal('uno')}>Aplicar</button>
          </div>

          <div className="card">
            <h3>Programa Grupal para Mujeres</h3>
            <p>Sanación en comunidad. Detalles próximamente disponibles.</p>
            <button className="boton" onClick={() => abrirModal('grupal')}>Aplicar</button>
          </div>

          <div className="card">
            <h3>Programa para Corporativos</h3>
            <p>Espacios de contención emocional para equipos de trabajo. Contenido en desarrollo.</p>
            <button className="boton" onClick={() => abrirModal('corporativo')}>Aplicar</button>
          </div>
        </section>
      </main>

      {/* MODALES */}
      {modalActivo && (
        <div className="modal">
          <div className="modal-contenido">
            <span className="cerrar" onClick={cerrarModal}>&times;</span>
            <h3>
              {modalActivo === 'uno' && 'Aplicación — Programa 1:1'}
              {modalActivo === 'grupal' && 'Aplicación — Programa Grupal'}
              {modalActivo === 'corporativo' && 'Aplicación — Corporativos'}
            </h3>
            <form
              action={`https://formspree.io/f/tu-formulario-id-${modalActivo}`}
              method="POST"
            >
              {modalActivo === 'corporativo' ? (
                <>
                  <input type="text" name="empresa" placeholder="Nombre de la empresa" required />
                  <input type="text" name="contacto" placeholder="Nombre de contacto" required />
                  <input type="email" name="email" placeholder="Correo electrónico" required />
                  <textarea name="objetivos" placeholder="¿Qué objetivos tienen con este programa?" required />
                </>
              ) : (
                <>
                  <input type="text" name="nombre" placeholder="Nombre completo" required />
                  <input type="email" name="email" placeholder="Correo electrónico" required />
                  {modalActivo === 'grupal' && (
                    <>
                      <textarea name="expectativas" placeholder="¿Qué esperas del grupo?" required />
                      <select name="experiencia">
                        <option value="">¿Tienes experiencia grupal?</option>
                        <option value="sí">Sí</option>
                        <option value="no">No</option>
                      </select>
                    </>
                  )}
                  {modalActivo === 'uno' && (
                    <>
                      <input type="text" name="pais" placeholder="País de residencia" />
                      <textarea name="mensaje" placeholder="¿Por qué te interesa este proceso?" required />
                    </>
                  )}
                </>
              )}
              <button type="submit">Enviar aplicación</button>
            </form>
          </div>
        </div>
      )}

      <footer>
        <p>&copy; 2025 Empresa. Todos los derechos reservados.</p>
        <p>
          <a href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</a> |{' '}
          <a href="https://wa.me/">WhatsApp</a>
        </p>
      </footer>
    </>
  );
}
