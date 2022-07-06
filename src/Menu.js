import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Inicio from './Inicio';

const Menu = ( ) => {

    require("./Menu.css");    

    return (  

        <div className="menu">

            <div className='logo'>
            <Link to = "/" ><img src='logo.png' ></img></Link>
                <h2>Avocado Bichos</h2>           
            </div>

            <div className='titulos'>

                <Link className='link' to="/cadastro">Cadastro</Link>
                <Link className='link' to="/login">Login</Link>
                <Link className='link' to="/servicos">Serviços</Link>

            </div>
            
        </div>

    );
}
 
export default Menu;