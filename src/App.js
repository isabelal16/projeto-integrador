import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Cadastro from './Cadastro';
import Inicio from './Inicio';
import Login from './Login';

function App() {

  const[tela, alteraTela] = React.useState(0);

  return (

    <div>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>



    </div>

  );
}

export default App;
