import React from 'react';
import { Link } from 'react-router-dom';
import Clientes from './Clientes';
import Menu from './Menu';
import Rodape from './Rodape';

const Inicio = () => {

    require ("./Inicio.css")
    return ( 

        <div className='painel'>
            <Menu/>
            <div className='titulo'>
                <h1 className='painel1'>Cuide do seu <br/>melhor amigo!</h1> 
                <p className='painel2'>Nossa clinica é especializada em consulta veterinária, <br/>cuidado com o seu pet, Vacine no tempo certo!.</p> 
            </div>

            <div>
                <img className='imagemP' src='Fotopainel.png'/>
            </div>

            <Rodape/>
            <Link className='link' to="/clientes">Clientes</Link>
        </div>
    );
}
 
export default Inicio;