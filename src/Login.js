import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    require("./CadastroLogin.css"); 

    return (  

        <div className='login2 cadastroLogin'>


            <div className='login'>
                <h1>Seja bem vindo!</h1>
                <img className='imgFundoLogin' src='Login.png'></img>
            </div>        

            <div className='login3'>
                <div className='caixa1'>
                    <h1 className="centro"><i className="fa-solid fa-paw"></i>Login</h1>
                    <hr/>
                    <p className="centro">Faça login para começar</p>

            
                    <form className='centro'>
                        <label>

                        <i className="fa-solid fa-unlock-keyhole"></i><input id='emailLogin' autoComplete='username' required type="email" placeholder="Email"/> 
                        <br/>
                        <br/>
                        <i className="fa-solid fa-key"></i><input id='senhaLogin' autoComplete='current-password' required minLength="3" type="password" placeholder="Senha"/>                                             
                        <br/>
                        <br/>
                        <Link className='link' to="/cadastro" ><i className="fa-solid fa-arrow-left"></i> Voltar </Link>
                        <Link className='link' to="/perfil"> Entrar </Link>
                            
                        <hr/>

                        </label>
                    </form>    
                </div>  
            </div>

        </div>


    );
}


 
export default Login;