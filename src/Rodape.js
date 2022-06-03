import React from 'react';

require ('./Rodape.css')
const  Rodape = () => {

    return ( 

        <div className='rodape'>

            <div>
                <h1>Contato</h1>
                <p>(16)3370-0934</p>
                <p>contato@AvocadoBichos.com.br</p>
            </div>

            <div>
                <h1>Endereço</h1>
                <p>Av. Henrique Gregori, 463 - Vila <br/> Bela Vista - São Carlos/SP</p>
            </div>

            <div>
                <h1>Redes sociais</h1>
                <p>Instagram</p>
                <p>Facebook</p>
            </div>
            
        </div>

    );
}
 
export default Rodape;