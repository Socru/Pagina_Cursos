// src/pages/Conferencias.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/conferencias.css';

export default function Conferencias() {
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
            <h1 className="nombre_empresa">Empresa</h1>
          </Link>

          <button className="menu-toggle" aria-label="Menú" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>

          <nav className="menu" id="menu">
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/conferencias" className="activo">Conferencias</Link></li>
              <li><Link to="/conexion">Conexión Espiritual</Link></li>
              <li><Link to="/coaching">Coaching Somático</Link></li>
              <li><Link to="/cursos">Cursos Online</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="contenido conferencias">
        <section className="intro">
          <h2>Conferencias y Talleres</h2>
          <p>
            Diseñadas para inspirar, conectar y transformar. Estas conferencias abordan temas como el desarrollo humano, el duelo consciente, liderazgo emocional y conexión espiritual, desde un enfoque vivencial y empático.
          </p>
        </section>

        <section className="agenda">
          <h3>Próximas Conferencias</h3>
          <ul className="agenda-lista">
            <li><strong>10 de septiembre 2025</strong> — Sanando desde el alma (Virtual)</li>
            <li><strong>25 de octubre 2025</strong> — Liderazgo emocional para educadores (CDMX)</li>
            <li><strong>15 de noviembre 2025</strong> — Comunicación compasiva (Híbrido)</li>
          </ul>
        </section>

        <section className="temas">
          <h3>Temas Frecuentes</h3>
          <ul>
            <li>Sanando el duelo: herramientas prácticas para transitarlo</li>
            <li>Liderazgo emocional con conciencia</li>
            <li>Espiritualidad en tiempos difíciles</li>
            <li>Comunicación compasiva para equipos de trabajo</li>
          </ul>
        </section>

        <section className="publico-objetivo">
          <h3>¿A Quién Está Dirigido?</h3>
          <ul>
            <li>Educadores y orientadores emocionales</li>
            <li>Personas en proceso de duelo o cambio personal</li>
            <li>Líderes que buscan mejorar el clima laboral</li>
            <li>Cuidadores y profesionales de la salud emocional</li>
          </ul>
        </section>

        <section className="beneficios">
          <h3>¿Qué Obtienen los Participantes?</h3>
          <ul>
            <li>Una experiencia vivencial significativa</li>
            <li>Herramientas aplicables en la vida personal y profesional</li>
            <li>Espacios seguros para reflexión y crecimiento</li>
          </ul>
        </section>

        <section className="material-apoyo">
          <h3>Material Incluido</h3>
          <div className="grid-material">
            <div className="item">Guía PDF descargable</div>
            <div className="item">Audio meditativo complementario</div>
            <div className="item">Grabación de la sesión</div>
            <div className="item">Certificado de participación</div>
          </div>
        </section>

        <section className="galeria-eventos">
          <h3>Galería de Eventos</h3>
          <div className="galeria">
            <img src="/media/evento1.jpg" alt="Evento 1" />
            <img src="/media/evento2.jpg" alt="Evento 2" />
            <img src="/media/evento3.jpg" alt="Evento 3" />
          </div>
        </section>

        <section className="testimonios">
          <h3>Testimonios</h3>
          <blockquote>
            “Una experiencia transformadora, me ayudó a ver el duelo con otros ojos.” — Ana Martínez
          </blockquote>
          <blockquote>
            “El taller de liderazgo emocional cambió mi forma de trabajar con mi equipo.” — Ricardo Gómez
          </blockquote>
        </section>

        <section className="faq">
          <h3>Preguntas Frecuentes</h3>
          <details>
            <summary>¿Dónde se imparten las conferencias?</summary>
            <p>Disponibles en formato presencial o virtual, según tus necesidades.</p>
          </details>
          <details>
            <summary>¿Cuál es la duración de los talleres?</summary>
            <p>Desde 1 hora hasta programas de varios días, adaptados al evento.</p>
          </details>
          <details>
            <summary>¿Puedo solicitar un tema personalizado?</summary>
            <p>Sí. Se personaliza según el público, el objetivo y el contexto del evento.</p>
          </details>
        </section>

        <section className="cta-contacto">
          <h3>¿Quieres Contratar una Conferencia o Taller?</h3>
          <p>Contáctame para crear una propuesta personalizada según tu evento.</p>
          <div className="botones">
            <a href="mailto:tuemail@ejemplo.com" className="boton">Enviar Correo</a>
            <a
              href="https://wa.me/521XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="boton whatsapp"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </section>
      </main>

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
