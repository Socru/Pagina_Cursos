// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';

export default function Home() {
  const toggleMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-abierto');
  };

  return (
    <>
      <header className="navbar">
        <div className="container">
          <Link to="/" className="logo-contenedor">
            <img src="/media/logo.jpg" alt="Logo Empresa" className="logo-img" />
            <h2 className='nombreEmpresa' >Empresa</h2>
          </Link>

          <button className="menu-toggle" aria-label="Menú" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>

          <nav className="menu" id="menu">
            <ul>
              <li><Link to="/" className="activo">Inicio</Link></li>
              <li><Link to="/conferencias">Conferencias</Link></li>
              <li><Link to="/conexion">Conexión Espiritual</Link></li>
              <li><Link to="/coaching">Coaching Somático</Link></li>
              <li><Link to="/cursos">Cursos Online</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="quien-soy">
          <div className="container quien-flex">
            <div className="texto">
              <h2>¿Quiénes somos?</h2>
              <p>
                Hola, somos una empresa enfocada en procesos de transformación emocional, espiritual y personal.
                Acompañamos a personas, grupos y organizaciones a reconectar con su propósito y bienestar integral.
              </p>
            </div>
            <div className="imagen">
              <img src="/media/trayectoria.png" alt="Trayectoria" />
            </div>
          </div>
        </section>

        <section className="medios">
          <h2>Síguenos y escucha</h2>
          <div className="iconos">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://open.spotify.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-spotify"></i>
            </a>
          </div>
          <div className="podcast">
            <iframe
              src="https://open.spotify.com/"
              width="100%"
              height="80"
              frameBorder="0"
              
              allow="encrypted-media"
              title="Podcast Spotify"
            ></iframe>
          </div>
        </section>

        <section className="blog">
          <h2>Temas interesantes</h2>
          <div className="grid">
            {[1, 2, 3].map((n) => (
              <article key={n} className="post">
                <h3>Título {n}</h3>
                <p>Resumen breve del contenido...</p>
                <Link to="/blog">Leer más</Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Empresa. Todos los derechos reservados.</p>
        <p>
          <a href="mailto:tuemail@ejemplo.com">tuemail@gmail.com</a> |{' '}
          <a href="https://wa.me/">WhatsApp</a>
        </p>
      </footer>
    </>
  );
}
