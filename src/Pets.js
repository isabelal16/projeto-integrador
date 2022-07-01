import React from 'react';
import Admin from './Admin';

require("./Clientes.css");
const Clientes = () => {

    const [ pet , alteraPet] = React.useState([]);

    React.useEffect( () => {

        buscarPet()

    }, [])


    const buscarPet = () => {

        const axios = require ("axios");

        axios.get('http://localhost:3001/buscarPet/' )
        .then(function (response) {
                
            const dados = response.data;
            console.log (dados)
            alteraPet (dados)
        })
        .catch(function (error) {
            console.log(error);
        })
    }


    return ( 

        <div>
            <Admin/>
            <div className='clientes'>
                <h1>Pets</h1>
                
                <div className='inputc'><input type='text' placeholder='Digite para pesquisar os pets'/></div>
                
            </div>

            {
                pet == 0 ? <p> Nenhum cliente cadastrado...</p> : 
                    <div className='clientes2'>

                        {pet.map (u => {
                            return(
                                <>  
                                    <br/>
                                    <h3> {u.nome[0].toUpperCase() + u.nome.substr(1)}</h3>
                                    <hr/>
                                    <p>TUTOR: {u.nomeusuario[0].toUpperCase() + u.nomeusuario.substr(1)}</p>
                                    <p>ESPÉCIE: {u.especie[0].toUpperCase() + u.especie.substr(1)}</p>
                                    <p>RAÇA: {u.raca[0].toUpperCase() + u.raca.substr(1)}</p> 
                                    <p>PORTE: {u.porte[0].toUpperCase() + u.porte.substr(1)}</p>                                                              
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