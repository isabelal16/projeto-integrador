import React, { useState } from 'react';
import Admin from './Admin';
import { useLocation} from "react-router-dom";

require("./Horarios.css")
const Horarios = () => {

    const [funcionario , alteraFuncionario] = React.useState([]);
    const location = useLocation()
    const profissional = location.state.profissional

    React.useEffect( () => {

        buscarFuncionario()

    }, [])

    const buscarFuncionario = (e) => {

        e.preventDefault();

        const axios = require ("axios").default;

        const id_usuario = localStorage.getItem('id_usuario');
        axios.get('http://localhost:3001/buscarFuncionario/'+ id_usuario)
        .then(function (response) {
                
            const dados = response.data;
            console.log (dados)
            alteraFuncionario (dados)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

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
                <table BORDER RULES="rows" cellPadding="10" cellSpacing="6">
                    <th>Serviço</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Pet</th>
                    <th>Tutor</th>

                    <tr/>
                    {
                        funcionario == 0 ? <p> carregando... </p> : 
                        <div>
                            {funcionario.map (u => {
                                return(
                                    <>  

                                        <tr/>
                                        <td> {u.servico}</td>
                                        <td> {u.data}</td>
                                        <td> {u.horario}</td>
                                        <td> {u.pet}</td> 
                                        <td> {u.tutor}</td>   
                                        <tr/>

                                    </>
                                )
                            })}
                        </div>
                    }  
                    <tr/>                  
                
                </table>
            </div>
           
        </div>
     );
}
 
export default Horarios;