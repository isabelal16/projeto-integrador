import React from 'react';
import Admin from './Admin';
import { useLocation } from "react-router-dom";

require("./Horarios.css")
const Horarios = () => {

    const [funcionario , alteraFuncionario] = React.useState([]);
    const location = useLocation()
    const profissional = location.state.profissional
    const id = location.state.id


    React.useEffect( () => {

        buscarFuncionario()

    }, [])

    const buscarFuncionario = () => {

        const id_usuario = document.getElementById('2');
        const id_animais = document.getElementById('2');
        const servico = document.getElementById('2');
        const data = document.getElementById('2');
        const horario = document.getElementById('2');
        const id_profissional = document.getElementById('2');

        const obj = {
            id_usuario: id_usuario,
            id_animais: id_animais,
            servico: servico,
            data: data,
            horario: horario,
            id_profissional: id_profissional
        }

        console.log("teste")

        const axios = require ("axios");

        axios.get('http://localhost:3001/buscarFuncionario/' , obj)
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
                                        <td>{id}</td>
                                        <td> {u.servico}</td>
                                        <td> {u.data}</td>
                                        <td> {u.horario}</td>
                                        <td> {u.id_animais}</td>                                        
                                        <td> {u.id_usuario}</td>
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