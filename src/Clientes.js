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
            <div> 
                <p></p>
            </div>
        </div>
     );
}
 
export default Clientes;