import React, { useState } from 'react';
import Admin from './Admin';
import Modal from 'react-modal';
import { useLocation} from "react-router-dom";

require("./Horarios.css")
const Horarios = () => {

    const location = useLocation()
    const profissional = location.state.profissional

    const horarios = [

        

        {
            profissional: "Alex Silva",
            img: "horario.png"
           
        },

        {
            profissional: "Anna Souza",
            img: "horario1.png"
            
        },
       
        {
            profissional: "Carlos Ferreira",
            img: "horario3.png"
           
        },
       
        {
            profissional: "Maria Rita",
            img: "horario2.png"
    
        } 
       
    ]




    return ( 
        <div className='hor'>


            <Admin/>
            <div className='hor2'>
                <img src={horarios[profissional].img}/>
                <h1>Horários</h1>
                <br/>
                <br/>
                <h3>{horarios[profissional].profissional}</h3>
                <br/>
                <br/>
                <table BORDER RULES="rows" cellpadding="10" cellspacing="6">
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
                    <button>Finalizar</button>

                    <tr/>
                
                    <td>Tosa</td>
                    <td>dhg</td>
                    <td>shfs</td>
                    <td>bgjfr</td>
                    <td>shfs</td>
                    <button>Finalizar</button>
                </table>
            </div>

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