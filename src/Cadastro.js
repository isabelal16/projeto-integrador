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

                            <i className="fa-solid fa-user"></i><input required minLength="5" name ='nome' type="text" placeholder="Nome" />
    
                            <br/>
                            <br/>

                            <i className="fa-solid fa-envelopes-bulk"></i> <input autoComplete='username' name ='email' type="email" placeholder="Email"/>

                            <br/>
                            <br/>

                            <input type="text" name ='cpf' placeholder="CPF"/>

                            <br/>
                            <br/>

                            <input type="text" name = 'telefone'  placeholder="Telefone"/>

                            <br/>
                            <br/>

                            <input type="text" name = 'endereco'  placeholder="Endereço"/>

                            <br/>
                            <br/>

                            
                            
                            <i className="fa-solid fa-key"></i><input id='senhaCadastro1' autoComplete='new-password' required minLength="8" name ='senha' type="password" placeholder="Criar senha:"/>
                
                            <br/>
                            <br/>
                
                            <i className="fa-solid fa-key"></i><input id='senhaCadastro2' autoComplete='new-password' required minLength="8" name ='senha2' type="password" placeholder="Confirme sua senha:"/>

                           
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