import React from 'react';
import { Link } from 'react-router-dom';
import Clientes from './Clientes';
import Menu from './Menu';
import Rodape from './Rodape';
import Servicos from './Servicos'
import PagServicos from './PagServicos';
import Profissionais from './Profissionais';

const Inicio = () => {

    require ("./Inicio.css")
    return ( 

        <div className='painel'>
            <Menu/>
            <div className='titulo'>
                <h1 className='painel1'>Cuide do seu <br/>melhor amigo!</h1> 
                <p className='painel2'>Nossa clinica é especializada em consulta veterinária, cuidados com o seu pet e em vacinação</p> 
            </div>

            <div>
                <img className='imagemP' src='Fotopainel.png'/>
            </div>

            <Rodape/>
        </div>
    );
}
 
export default Inicio;