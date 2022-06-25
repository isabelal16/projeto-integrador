import React, { useState } from 'react';
import Admin from './Admin';
import Modal from 'react-modal';
import { Routes, Route, Link, useLocation} from "react-router-dom";

require("./Horarios.css")
//Criar uma Route Private (para a maioria das telas, já que só usuários e administrador poderão ter acesso a por exemplo perfil, agenda, etc)
const Horarios = () => {

    const location = useLocation()
    const profissional = location.state.profissional

    const horarios = [

        

        {
            profissional: "Alex Silva",
           
        },

        {
            profissional: "Anna Souza",
            
        },
       
        {
            profissional: "Carlos Ferreira",
           
        },
       
        {
            profissional: "Maria Fernanda",
    
        } 
       
    ]




    return ( 
        <div className='hor'>


            <Admin/>
            <h1>Horários</h1>
            <br/>
            <br/>
            <h3>{horarios[profissional].profissional}</h3>
            <br/>
            <br/>
            <table cellpadding="10" cellspacing="6">
            <th>Serviço</th>
            <th>Data</th>
            <th>Horário</th>
            <th>Pet</th>
            <th>Tutor</th>
            <tr/>
            
                <td>Tosa</td>
                <td>dhg</td>
                <td>shfs</td>
                <td>bgjfr</td>
                <td>shfs</td>
            </table>


            <Modal>
            <p>Dados Tutor</p>
            <p>Nome:</p>
            <p>Endereço:</p>
            <p>Telefone:</p>
            <p>Dados Pet</p>
            <p>Nome:</p>
            <p>Raça:</p>
            <p>Porte:</p>

            <button>Finalizar</button>
            </Modal>

           
             </div>
     );
}
 
export default Horarios;