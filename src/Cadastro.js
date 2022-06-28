import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {

    require("./CadastroLogin.css");
    const navigate = useNavigate()

    const Cadastra = (e) => {

        e.preventDefault();

        const nome = document.querySelector("input[name='nome']").value;
        const email = document.querySelector("input[name='email']").value;
        const cpf = document.querySelector("input[name='cpf']").value;
        const telefone = document.querySelector("input[name='telefone']").value;
        const endereco = document.querySelector("input[name='endereco']").value;
        const senha = document.querySelector("input[name='senha']").value;

        const obj = {
            nome: nome, 
            email: email, 
            cpf: cpf,
            telefone: telefone, 
            endereco: endereco,
            senha: senha
        }

        const axios = require("axios").default;

        axios.post('http://localhost:3001/usuario', obj)
        .then(function (response) {
             
            console.log (response) 
            alert("Cadastro Efetuado com sucesso")
            navigate('/login')

        })
        .catch(function (error) {
        console.log(error);
        })
    }

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

                    <form onSubmit={(e) => Cadastra(e) } className='centro'>
                        <label>

                            <i className="fa-solid fa-user"></i><input required minLength="5" name ='nome' type="text" placeholder="Nome" />
    
                            <br/>
                            <br/>

                            <i className="fa-solid fa-envelopes-bulk"></i> <input autoComplete='username' name ='email' type="email" placeholder="Email"/>

                            <br/>
                            <br/>

                            <i class="fa-solid fa-id-card"></i> <input type="text" name ='cpf' placeholder="CPF"/>

                            <br/>
                            <br/>

                            <i class="fa-solid fa-phone"></i> <input type="text" name = 'telefone'  placeholder="Telefone"/>

                            <br/>
                            <br/>

                            <i class="fa-solid fa-location-dot"></i> <input type="text" name = 'endereco'  placeholder="Endereço"/>

                            <br/>
                            <br/>

                            
                            
                            <i className="fa-solid fa-key"> </i><input id='senhaCadastro1' autoComplete='new-password' required minLength="8" name ='senha' type="password" placeholder="Criar senha:"/>
                
                            <br/>
                            <br/>
                
                            <i className="fa-solid fa-key"> </i><input id='senhaCadastro2' autoComplete='new-password' required minLength="8" name ='senha2' type="password" placeholder="Confirme sua senha:"/>

                            <br/>
                            <button className='link'><i className="fa-solid fa-arrow-left"></i> Voltar</button>
                            <button className='link'>Salvar</button> 
                            <hr/>
                        </label>
                    </form>


                    
                    

                </div>
            </div>     

            
    
        </div>

    )
}

export default Cadastro;