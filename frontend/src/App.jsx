// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Conexion from './pages/Conexion';
import Coaching from './pages/Coaching';
import Conferencias from './pages/Conferencias';
import Contacto from './pages/Contacto';
import Cursos from './pages/Cursos';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      
      <Route path="/conferencias" element={<Conferencias />} />

      <Route path="/conexion" element={<Conexion />} />

      <Route path="/coaching" element={<Coaching />} />

      <Route path="/cursos" element={<Cursos />} />

      <Route path="/contacto" element={<Contacto />} />

        </Routes>
    </BrowserRouter>
  );
}

