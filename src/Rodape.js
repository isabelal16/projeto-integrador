import React from 'react';

require ('./Rodape.css')
const  Rodape = () => {

    return ( 

        <div className='rodape'>

            <div>
                <img className='imagemrod' src='fotorodape.jpg'/>
                <p>Cuidado, carinho e atenção <br/> para seu animal de estimacão</p>
            </div>

            <div>
                <h1>Contato</h1>
                <p><i className="fa-solid fa-phone"></i> (16) 3370-0934</p>
                <p><i className="fa-brands fa-whatsapp"></i>(16) 99232-8571</p>
                <p><i className="fa-solid fa-envelope"></i> contato@AvocadoBichos.com.br</p>
                
            </div>

            <div>
                <h1>Endereço</h1>
                <p><i className="fa-solid fa-location-dot"></i> Av. Henrique Gregori, 463 - Vila <br/> Bela Vista - São Carlos/SP</p>
            </div>

            <div>
                <h1>Redes sociais</h1>
                <p><i className="fa-brands fa-instagram"></i> AvocadosBichos</p>
                <p><i className="fa-brands fa-facebook"></i> BichosAvocados</p>
            </div>
            
        </div>

    );
}
 
export default Rodape;