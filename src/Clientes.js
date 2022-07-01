import React from 'react';
import Admin from './Admin';

require("./Clientes.css");

const Clientes = () => {

    const [ usuario , alteraUsuario] = React.useState([]);

    React.useEffect( () => {

        buscarUsuario()

    }, [])


    const buscarUsuario = () => {

        const axios = require ("axios");

        axios.get('http://localhost:3001/buscarUsuario/' )
        .then(function (response) {
                
            const dados = response.data;
            console.log (dados)
            alteraUsuario (dados)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return ( 

        <div>
            <Admin/>
            <div className='clientes'>
                <h1>Clientes</h1>
                
                <div className='inputc'><input type='text' placeholder='Digite para pesquisar os clientes'/></div>
                
            </div>

            {
                usuario == 0 ? <p> Nenhum cliente cadastrado...</p> : 
                    <div className='clientes2'>

                        {usuario.map (u => {
                            return(
                                <>  
                                    <br/>
                                    <h3> {u.nome}</h3>
                                    <hr/>
                                    <p>TELEFONE: {u.telefone}</p>
                                    <p>EMAIL: {u.email}</p>
                                    <p>CPF: {u.cpf}</p> 
                                    <p>ENDEREÇO: {u.endereco}</p>                                                              
                                    <hr/>

                                </>
                                
                            )
                        })}

                    </div>
            }

        </div>
     );
}
 
export default Clientes;