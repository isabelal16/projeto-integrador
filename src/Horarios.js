import React, { useState } from 'react';
import Admin from './Admin';

require("./Horarios.css")
//Criar uma Route Private (para a maioria das telas, já que só usuários e administrador poderão ter acesso a por exemplo perfil, agenda, etc)
const Horarios = () => {





    return ( 
        <div className='hor'>


            <Admin/>
            <h1>Horários Tosador</h1>

            <h3>Isis</h3>

            <div className='horarios'>
            <p>Serviço</p>

            <p>Data</p>

            <p>Horário</p>

            <p>Pet</p>

            <p>Tutor</p>

            </div>

            
            <p>Alex</p>
            <div className='horarios'>
            <p>Serviço</p>

            <p>Data</p>

            <p>Horário</p>

            <p>Pet</p>

            <p>Tutor</p>
            </div>


            <p>Dados Tutor</p>

            <p>Nome:</p>

            <p>Endereço:</p>

            <p>Telefone:</p>

            <p>Dados Pet</p>

            <p>Nome:</p>

            <p>Raça:</p>

            <p>Porte:</p>

            <button>Finalizar</button>
             
             </div>
     );
}
 
export default Horarios;