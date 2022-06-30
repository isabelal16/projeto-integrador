import React from 'react';
import Admin from './Admin';

require("./Clientes.css");
const Clientes = () => {
    return ( 
        <div>
            <Admin/>
            <div className='clientes'>
                <h1>Pets</h1>
                
                <div className='inputc'><input type='text' placeholder='Digite para pesquisar os pets'/></div>
                
            </div>

            <div className='clientes2'> 
                <h3>Lilica</h3>
                <hr/>
                <p>Tutor:</p>
                <p>Espécie:</p>
                <p>Raça:</p>
                <p>Porte:</p>
            </div>
                
        </div>
     );
}
 
export default Clientes;