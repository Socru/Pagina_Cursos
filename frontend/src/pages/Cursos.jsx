// src/pages/Cursos.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/conferencias.css'; // El CSS ya está perfecto

const cursos = [
  {
    id: 1,
    titulo: "Curso de Autoconocimiento",
    descripcion: "Un viaje hacia tu interior a través de prácticas conscientes.",
    imagen: "/media/cursos/autoconocimiento.jpg",
    enlace: "https://hotmart.com/autoconocimiento"
  },
  {
    id: 2,
    titulo: "Gestión Emocional para Mujeres",
    descripcion: "Aprende a navegar tus emociones con compasión y sabiduría.",
    imagen: "/media/cursos/emociones.jpg",
    enlace: "https://hotmart.com/gestion-emocional"
  },
  {
    id: 3,
    titulo: "Mindfulness en la Vida Diaria",
    descripcion: "Integra la atención plena en tu rutina para mayor equilibrio.",
    imagen: "/media/cursos/mindfulness.jpg",
    enlace: "https://hotmart.com/mindfulness-diario"
  }
];

export default function Cursos() {
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
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <nav className="menu" id="menu">
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/conferencias">Conferencias</Link></li>
              <li><Link to="/conexion">Conexión Espiritual</Link></li>
              <li><Link to="/coaching">Coaching Somático</Link></li>
              <li><Link to="/cursos" className="activo">Cursos Online</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="contenido cursos">
        <section className="intro">
          <h2 style={{ color: "var(--color-texto)" }}>Cursos Online</h2>
          <p style={{ color: "var(--color-texto-secundario)", textAlign: "center" }}>
            Accede a programas diseñados para tu crecimiento personal, espiritual y emocional.
          </p>
        </section>

        <section className="lista-cursos" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", padding: "2rem" }}>
          {cursos.map(curso => (
            <div key={curso.id} className="curso-card" style={{ backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <img src={curso.imagen} alt={curso.titulo} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div className="curso-info" style={{ padding: "1rem" }}>
                <h3 style={{ color: "var(--color-texto)", marginBottom: "0.5rem", fontSize: "1.4rem", textAlign: "center" }}>{curso.titulo}</h3>
                <p style={{ color: "var(--color-texto-secundario)", marginBottom: "1rem", textAlign: "center" }}>{curso.descripcion}</p>
                <div style={{ textAlign: "center" }}>
                  <a href={curso.enlace} target="_blank" rel="noopener noreferrer" className="boton">Ir al curso</a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer >
        <p>&copy; 2025 Empresa. Todos los derechos reservados.</p>
        <p>
          <a href="mailto:tuemail@ejemplo.com">tuemail@gmail.com</a> |{' '}
          <a href="https://wa.me/">WhatsApp</a>
        </p>
      </footer>
    </>
  );
}
