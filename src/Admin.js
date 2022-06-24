import React, { useState } from 'react';
import Horarios from './Horarios';
import { Routes, Route, Link, useLocation } from "react-router-dom";


//Criar uma Route Private (para a maioria das telas, já que só usuários e administrador poderão ter acesso a por exemplo perfil, agenda, etc)
const Admin = () => {

    require ("./Admin.css")
    return ( 
        <div className='adm'>

            <img src='logo.png'/><br/>
            <br/>
            <br/>

            <h4>Horários</h4><br/>

            <p><Link to="/horarios" state={{profissional : 0}}>Alex Silva</Link><br/></p>

            <p><Link to="/horarios" state={{profissional : 1}}>Anna Souza</Link><br/></p>

            <p><Link to="/horarios" state={{profissional : 2}}>Carlos Ferreira</Link><br/></p>

            <p><Link to="/horarios" state={{profissional : 3}}>Maria Fernanda</Link><br/></p>

            <h4>Clientes</h4>
            <p><Link to="/clientes">Pesquisar</Link></p>
            
        </div>
     );
}
 
export default Admin;