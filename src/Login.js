import React from 'react';

const Login = () => {

    require("./Cadastro.css")

    return (  

        <div>
            <div className='caixa1'>
                <h1 class="centro"><i class="fa-solid fa-paw"></i>Seja Bem-Vindo!</h1>
                <p>Caso demore para ser atendido ligue:</p>
                <p><i class="fa-brands fa-whatsapp"></i> (16) 994587682</p>
                <p><i class="fa-solid fa-phone"></i> 01633865472</p>
                <hr/>
                <p class="centro"><i class="fa-solid fa-heart-pulse"></i>Faça login para começar<i class="fa-solid fa-heart-pulse"></i></p>

           
                <form className='centro'>
                    <label>

                    <i class="fa-solid fa-unlock-keyhole"></i><input required minlength="5" type="text" placeholder="Digite o seu Usuário:"/>
                    <br/>
                    <br/>        
                    <i class="fa-solid fa-unlock-keyhole"></i><input required type="email" Placeholder="Digite o seu Email:"/> 
                    <br/>
                    <br/>
                    <i class="fa-solid fa-key"></i><input required minlength="3" type="password" Placeholder="Digite sua Senha:"/>
                    <br/>
                    <br/>                           
                    <p><i class="fa-solid fa-shield-cat"></i>Salvar meu Usuário<i class="fa-solid fa-shield-dog"></i></p> <input type="checkbox"/>
                    <br/>
                    <br/>
                    <button><i class="fa-solid fa-house-medical"></i> Logar <i class="fa-solid fa-house-medical"></i></button>
                        
                    <hr/>

                    <p>Entre em contato conosco:</p>
                    <p><i class="fa-solid fa-envelope-circle-check"></i> AvocadoBichos2022@gmail.com </p>

                    </label>
                </form>

                <button className='buttonC'><i class="fa-solid fa-file-medical"></i>Cadastre-se:<i class="fa-solid fa-file-medical"></i></button>
            </div>          

            <hr/>

        </div>
    );
}
 
export default Login;