import React from 'react';
import Menu from './Menu';

const Cadastro = ( ) => {

    require("./Cadastro.css");


    return ( 

        <div>

            <div className='caixa2'>

                <br/>
    
                <h1><i class="fa-solid fa-dog"></i>Cadastro do Animal & Tutor:</h1>
                <p>Caso o animal seja porte grande ou silvestre, entre em contato:</p>
                <p><i class="fa-brands fa-whatsapp"></i> (16) 994566268</p>
                <p><i class="fa-solid fa-phone"></i> 01633800072</p>
                <h2>(CASO O TUTOR JÁ TENHA O ANIMAL CADASTRADO, APENAS FAÇA O LOGIN)</h2>

                <hr/>

                <p class="centro"><i class="fa-solid fa-heart-pulse"></i>Informe os seus dados<i class="fa-solid fa-heart-pulse"></i></p>

                <form className='centro'>
                    <label>

                        <i class="fa-solid fa-user"></i><input required minlength="5" id="txttutor" type="text" placeholder="Digite o nome do tutor:"/>
 
                        <br/>
                        <br/>

                        <i class="fa-solid fa-calendar-days"></i><input  id="txtaniversario" type="text" Placeholder="Digite a sua data de nascimento:"/>

                        <br/>
                        <br/>

                        <i class="fa-solid fa-pen"></i><input required minlength="4" id="txtuser" type="text" placeholder="Digite o nome para seu usuário:"/>
 
                        <br/>
                        <br/>
            
                        <i class="fa-solid fa-envelopes-bulk"></i> <input  type="email" placeholder="Digite um email:"/>
            
                        <br/>
                        <br/>
                        
                        <i class="fa-solid fa-key"></i><input required minlength="8" id="senha2" type="password" placeholder="Digite uma senha:"/>
            
                        <br/>
                        <br/>
            
                        <i class="fa-solid fa-key"></i><input required minlength="8" id="senha3" type="password" placeholder="confirme sua senha:"/>
            
                        <hr/>
            
                        <p><i class="fa-solid fa-stethoscope"></i>Informe os dados do animal<i class="fa-solid fa-stethoscope"></i></p>
                        <br/>
                
                        <i class="fa-solid fa-cat"></i><input required minlength="5" id="txtanimal" type="text" placeholder="Digite o nome do animal:"/>
            
                        <br/>
                        <br/>
            
                        <i class="fa-solid fa-calendar"></i> <input id="txtanianimal" type="text" Placeholder="Digite a data de nascimento do animal:"/>
                        
                        <br/>
                        <br/>
                        
                        <i class="fa-solid fa-feather-pointed"></i><input id="txtraca" type="text" placeholder="Digite a Raça do animal"/>
            
                        <br/>
                        <br/>
            
                        <i class="fa-solid fa-venus-mars"></i><input id="txtsexanimal" type="text" placeholder="Digite o sexo do animal:"/>
            
                        <hr/>


                    </label>
                </form>

                <button><i class="fa-solid fa-house-medical"></i>Enviar<i class="fa-solid fa-house-medical"></i></button>  
    
                <button><i class="fa-solid fa-arrow-left-long"></i>Voltar</button>

            </div>
                    

            
    
        </div>

    );
}
 
export default Cadastro;