import React, { useState } from 'react';
import {  Routes, Route, Link } from 'react-router-dom';
import Login from './Login';


const Cadastro = () => {

    require("./CadastroLogin.css");

    return(

    
        <div className='Cadastro cadastroLogin'>

            <div className='login'>
                <h1>Seja bem vindo!</h1>
                <img width={690} src='Cadastro.png'></img>
            </div>        

            <div className='login3'>
                <div className='caixa2'>

                    <br/>
        
                    <h1><i className="fa-solid fa-dog"></i>Cadastro</h1>

                    <hr/>

                    <p className="centro">Informe os seus dados</p>

                    <form className='centro'>
                        <label>

                            <i className="fa-solid fa-user"></i><input required minLength="5" type="text" placeholder="Digite o seu nome:" />
    
                            <br/>
                            <br/>

                            <i className="fa-solid fa-calendar-days"></i><input type="text" placeholder="Digite a sua data de nascimento:"/>

                            <br/>
                            <br/>
                
                            <i className="fa-solid fa-envelopes-bulk"></i> <input id='emailCadastro' autoComplete='username' type="email" placeholder="Digite o seu email:"/>
                
                            <br/>
                            <br/>
                            
                            <i className="fa-solid fa-key"></i><input id='inputSenha' autoComplete='new-password' required minLength="8"  type="password" placeholder="Digite uma senha:"/>
                
                            <br/>
                            <br/>
                
                            <i className="fa-solid fa-key"></i><input autoComplete='new-password' required minLength="8" type="password" placeholder="confirme sua senha:"/>
                
                            <hr/>
                        </label>
                    </form>


                    <Link className='link' to="/"><i className="fa-solid fa-arrow-left"></i> Voltar</Link>
                    <Link className='link' to="/login">Salvar</Link>  

                </div>
            </div>     

            
    
        </div>

    )
}




export default Cadastro;