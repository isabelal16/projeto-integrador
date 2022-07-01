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
                                    <h3> {u.nome}</h3>
                                    <hr/>
                                    <p>TUTOR: {u.id_usuario}</p>
                                    <p>ESPÉCIE: {u.especie}</p>
                                    <p>RAÇA: {u.raca}</p> 
                                    <p>PORTE: {u.porte}</p>                                                              
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