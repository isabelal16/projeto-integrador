import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Cadastro from './Cadastro';
import Inicio from './Inicio';
import Login from './Login';
import Perfil from './Perfil';
import Servicos from './Servicos';
import Agenda from './Agenda';
import Clientes from './Clientes';
import Admin from './Admin';
import Horarios from './Horarios';
import Profissionais from './Profissionais';
import PagServicos from './PagServicos'


function App() {

  return (

    <div>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/servicos" element={<Servicos/>}/>
        <Route path="/agenda"element={<Agenda/>}/>
        <Route path="/clientes" element={<Clientes/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/horarios" element={<Horarios/>}/>
        <Route path="/profissionais" element={<Profissionais/>}/>
        <Route path="/pagservicos" element={<PagServicos/>}/>
      </Routes>

    </div>

  );
}

export default App;
