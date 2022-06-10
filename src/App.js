import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Cadastro from './Cadastro';
import Inicio from './Inicio';
import Login from './Login';
import Perfil from './Perfil';
import Servicos from './Servicos';
import Agenda from './Agenda';

function App() {

  return (

    <div>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/servicos" element={<Servicos/>}/>
        <Route path="/Agenda"element={<Agenda/>}/>
      </Routes>

    </div>

  );
}

export default App;
