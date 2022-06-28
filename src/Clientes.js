import React from 'react';
import Admin from './Admin';

require("./Clientes.css");
const Clientes = () => {
    return ( 
        <div>
            <Admin/>
            <div className='clientes'>
                <h1>Clientes</h1>
                
                <div className='inputc'><input type='text' placeholder='Digite para pesquisar os clientes'/></div>
                
            </div>
            <div className='clientes2'> 
                <h3>Alexandra Pinho</h3>
                <hr/>
                <p>Telefone:</p>
                <p>Email:</p>
                <p>CPF:</p>
                <p>Endereço:</p>
                <p></p>
            </div>
        </div>
     );
}
 
export default Clientes;