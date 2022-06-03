import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio';

const Login = () => {

    require("./Cadastro.css");

    return (  

        <div>
            <div className='caixa1'>
                <h1 className="centro"><i className="fa-solid fa-paw"></i>Seja Bem-Vindo!</h1>
                <p>Caso demore para ser atendido ligue:</p>
                <p><i className="fa-brands fa-whatsapp"></i> (16) 994587682</p>
                <p><i className="fa-solid fa-phone"></i> 01633865472</p>
                <hr/>
                <p className="centro"><i className="fa-solid fa-heart-pulse"></i>Faça login para começar<i className="fa-solid fa-heart-pulse"></i></p>

           
                <form className='centro'>
                    <label>

                    <i className="fa-solid fa-unlock-keyhole"></i><input required minLength="5" type="text" placeholder="Digite o seu Usuário:"/>
                    <br/>
                    <br/>        
                    <i className="fa-solid fa-unlock-keyhole"></i><input autoComplete='username' required type="email" placeholder="Digite o seu Email:"/> 
                    <br/>
                    <br/>
                    <i className="fa-solid fa-key"></i><input autoComplete='current-password' required minLength="3" type="password" placeholder="Digite sua Senha:"/>                                             
                    <br/>
                    <br/>
                    <Link className='link' to="/" ><i className="fa-solid fa-arrow-left"></i> Voltar </Link>
                    <Link className='link' to="/perfil"> Entrar </Link>
                        
                    <hr/>

                    </label>
                </form>

                
            </div>          

            

        </div>
    );
}
 
export default Login;