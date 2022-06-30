import React from 'react';
import Admin from './Admin';
import { useLocation } from "react-router-dom";

require("./Horarios.css")
const Horarios = () => {

    const [Profissional , alteraProfissional] = React.useState([]);
    const location = useLocation()
    const profissional = location.state.profissional

    React.useEffect( () => {

        console.log(profissional)
        buscarProfissional()

    }, [profissional])


    const buscarProfissional = () => {

        const axios = require ("axios");

        axios.get('http://localhost:3001/buscarProfissional/'+profissional )
        .then(function (response) {
                
            const dados = response.data;
            console.log (dados)
            alteraProfissional (dados)
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
            profissional: "Maria Rita",
            img: "horario2.png"
    
        },

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

                    <tr/>
                        <th>Serviço</th>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Pet</th>
                        <th>Tutor</th>
                    <tr/>

                    {
                        Profissional == 0 ? <p> Nenhum horário agendado </p> : 
                        <>
                            {Profissional.map (u => {
                                

                                //Formatar data
                                const x = u.data
                                x.split ("T")
                                const data = x.split("T")[0]
                                data.split("-")
                                const dia = data.split("-")[2]
                                const mes = data.split("-")[1]

                                //Formatar horario
                                const y = u.Horario
                                y.split (":")
                                const hora = y.split(":")[0]
                                const minuto = y.split(":")[1]

                                
                                return(
                                    <tr>  

                                        <td>{u.servico}</td>
                                        <td>{dia}/{mes}</td>
                                        <td>{hora}:{minuto}</td>
                                        <td>{u.nomepet}</td>
                                        <td>{u.nome}</td>
                                        
                                    </tr>

                                )
                            })}
                        </>
                    }
                                     
                
                </table>
            </div>
           
        </div>
     );
}
 
export default Horarios;