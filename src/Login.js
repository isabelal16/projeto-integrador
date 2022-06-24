import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    require("./CadastroLogin.css"); 

    const Logar = (e) => {

        console.log ("teste") 

        e.preventDefault();

        const email = document.querySelector("input[name='email']").value;
        const senha = document.querySelector("input[name='senha']").value;

        const obj = {
            email: email, 
            senha: senha
        }

        const axios = require("axios").default;

        axios.post('http://localhost:3001/login', obj)
        .then(function (response) {

                if (response.data == 0) {
                    alert("Email ou Senha incorretos")
                    return
                } 
            
                //use navigat do react router 

        })
        .catch(function (error) {
        console.log(error);
        })

    }

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

            
                    <form onSubmit={(e) => Logar(e)} className='centro'>
                        <label>

                        <i className="fa-solid fa-unlock-keyhole"></i><input name="email" autoComplete='username' required type="email" placeholder="Email"/> 
                        <br/>
                        <br/>
                        <i className="fa-solid fa-key"></i><input name="senha" autoComplete='current-password' required minLength="3" type="password" placeholder="Senha"/>                                             
                        <br/>
                        <br/>
                        <button className='link' ><i className="fa-solid fa-arrow-left"></i> Voltar </button>
                        <button className='link'> Entrar </button>
                            
                        <hr/>

                        </label>
                    </form>    
                </div>  
            </div>

        </div>


    );
}


 
export default Login;