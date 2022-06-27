import React, { useState } from 'react';
import Horarios from './Horarios';
import { Routes, Route, Link, useLocation } from "react-router-dom";

const Admin = () => {

    require ("./Admin.css")
    return ( 
        <div className='adm'>

            <img src='logo.png'/><br/>
            <br/>
            <br/>

            <h4>Horários</h4><br/>

            <p><Link className='link' to="/horarios" state={{profissional : 0}}>Alex Silva</Link><br/></p>

            <p><Link className='link' to="/horarios" state={{profissional : 1}}>Anna Souza</Link><br/></p>

            <p><Link className='link' to="/horarios" state={{profissional : 2}}>Carlos Ferreira</Link><br/></p>

            <p><Link className='link' to="/horarios" state={{profissional : 3}}>Maria Fernanda</Link><br/></p>

            <h4>Admin</h4>
            <p><Link className='link' to="/clientes">Clientes</Link></p>
            <p><Link className='link' to="/pets">Pets</Link></p>
            
        </div>
     );
}
 
export default Admin;