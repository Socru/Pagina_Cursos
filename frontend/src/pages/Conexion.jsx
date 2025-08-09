import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/conferencias.css'; // Usa mismos estilos

export default function Conexion() {
  const [modalActivo, setModalActivo] = useState(null);

  const toggleMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-abierto');
  };

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
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <nav className="menu" id="menu">
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/conferencias">Conferencias</Link></li>
              <li><Link to="/conexion" className="activo">Conexión Espiritual</Link></li>
              <li><Link to="/coaching">Coaching Somático</Link></li>
              <li><Link to="/cursos">Cursos Online</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="contenido" style={{ backgroundColor: '#fff' }}>
        <section className="intro">
          <h2>Conexión Espiritual</h2>
          <p>
            Elige tu sesión, realiza el pago y agenda automáticamente. Pronto estará habilitado el flujo completo.
          </p>
        </section>

        <section className="programas-coaching">
          <div className="card">
            <h3>Acompañamiento</h3>
            <p>Sesión guiada para : 45 min.</p>
            <button className="boton" onClick={() => abrirModal('oraculo')}>Agendar</button>
          </div>

          <div className="card">
            <h3>Canalización Espiritual</h3>
            <p>Conexión con guías espirituales. Duración: 60 min.</p>
            <button className="boton" onClick={() => abrirModal('canalizacion')}>Agendar</button>
          </div>

          <div className="card">
            <h3>Apoyo emocional</h3>
            <p>Sesión activa. Duración: 60 min.</p>
            <button className="boton" onClick={() => abrirModal('sanacion')}>Agendar</button>
          </div>
        </section>
      </main>

      {/* MODAL — Misma estructura que Coaching.jsx */}
      {modalActivo && (
        <div className="modal">
          <div className="modal-contenido">
            <span className="cerrar" onClick={cerrarModal}>&times;</span>
            <h3>
              {modalActivo === 'oraculo' && 'Agendar — Lectura de Oráculo'}
              {modalActivo === 'canalizacion' && 'Agendar — Canalización Espiritual'}
              {modalActivo === 'sanacion' && 'Agendar — Sanación Energética'}
            </h3>

            <form>
              <input type="text" name="nombre" placeholder="Ej. María Pérez" required />
              <input type="email" name="email" placeholder="Ej. mariaperez@email.com" required />
              <input type="text" name="pais" placeholder="Ej. México" />

              <select name="horario" required>
                <option value="">Selecciona un horario</option>
                <option value="mañana">Mañana (9:00 - 12:00)</option>
                <option value="tarde">Tarde (13:00 - 17:00)</option>
                <option value="noche">Noche (18:00 - 21:00)</option>
              </select>

              <textarea
                name="intencion"
                placeholder="¿Cuál es tu intención para esta sesión?"
                rows={4}
                required
              />

              <p><strong>Método de pago:</strong></p>
              <div className="pagos">
                <a href="https://www.paypal.com/paypalme/tuusuario" target="_blank" rel="noopener noreferrer">
                  <img src="/media/paypal-icon.png" alt="PayPal" style={{ height: '40px', marginRight: '15px' }} />
                </a>
                <a href="https://www.mercadopago.com.mx/tu-enlace" target="_blank" rel="noopener noreferrer">
                  <img src="/media/mercadopago-icon.png" alt="Mercado Pago" style={{ height: '40px' }} />
                </a>
              </div>

              <button type="submit" disabled style={{ marginTop: '15px' }}>
                Confirmar (demo visual)
              </button>
            </form>

          </div>
        </div>
      )}

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
