import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Menu from './Menu';
import Rodape from './Rodape';

const Perfil = () => {

    require("./Perfil.css");

    return (  
        <div className='perfil'>
            <div className='fundo'></div>
            <div className='fotoU'></div>
            <h1>Sara Silva</h1>
            <h3>Pets</h3>
            <div className='fotopet'> 
                <img src='gato.png'></img> <br/>
                <img src='doguinho.png'></img>
            </div>
            <div className='add'><img src='add.png'></img></div>
                <Rodape/>
        </div>
    );
}
 
export default Perfil;