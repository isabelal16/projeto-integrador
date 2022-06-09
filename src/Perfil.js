import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Menu from './Menu';
import Rodape from './Rodape';

const Perfil = () => {

    require("./Perfil.css");

    return (  
        <div className='perfil'>
            <div className='fundo'></div>
            <div><img className='fotoU' src="perfil.png"/></div>
            <h1 className='textosPer'>Sara Silva</h1>
            <h3>Pets</h3>
            <div className='fotopet'> 
                <img src='gato.png'></img> <br/>
                     <div className='TextoP'>
                        <p> Gatos</p>
                     </div>
                <img src='doguinho.png'></img>
                     <div className='TextoP'>
                         <p> Cachorros</p>
                     </div>
                <img src="outros.png"/>
                    <div className='TextoP'>
                         <p> Outra Diversidade de animais </p>
                    </div>
            </div>
            <div/>
            <div className='add'><img src='add.png'></img></div>
                <Rodape/>
        </div>
    );
}
 
export default Perfil;