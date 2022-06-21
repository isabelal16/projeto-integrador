import React from 'react';

require("./Clientes.css");
const Clientes = () => {
    return ( 
        <div>
            <div className='clientes'>
                <h1>Clientes</h1>
                <div className='inputc'><input type='text' placeholder='Digite para pesquisar os clientes'/></div>
            </div>
            <div> 
                <h1>RESULTADO DE CLIENTES</h1>
            </div>
        </div>
     );
}
 
export default Clientes;