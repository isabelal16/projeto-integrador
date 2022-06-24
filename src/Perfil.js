import React, { useState } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Rodape from './Rodape';
import Modal from 'react-modal';
import Agenda from './Agenda';

Modal.setAppElement('#root')

const Perfil = (props) => {

    //MODAIS

    const [modalIsOpen, setIsOpen] = useState(false)

    function OpenModal (){
        setIsOpen(true)
    }

    function CloseModal (){
        setIsOpen(false)
    }

    const [abrirModal, modalAberto] = useState(false)

    function AbrirModal (){
        modalAberto(true)
    }

    function FecharModal (){
        modalAberto(false) 
    }

    const [abrirModal2, modalAberto2] = useState(false)

    function AbrirModal2 (){
        modalAberto2 (true)
    }

    function FecharModal2 (){
        modalAberto2 (false)
    }


    const nome = props.nome

    require("./Perfil.css");

    const [animais, alteraAnimais] = React.useState([]);
    const axios = require("axios").default;

    React.useEffect( () => {
        axios.get('http://localhost:3001')
        .then(function (response) {
                
        const dados = response.data;
        console.log (dados)
        alteraAnimais (dados)
        })
        .catch(function (error) {
        console.log(error);
        })
    }, [])

    return (  

        <div className='perfil'>
            <div className='fundo'></div>
            <div><img className='fotoU' src="perfil.png"/></div>
            <h1 className='textosPer'>Sara Silva</h1>

            <div className='alinhamento'>
                    <div className='Pets'>
                        <h3>Pets</h3>
                        <h1>Cadastro de Pets</h1>

                {
                    animais == 0 ? <p> Carregando</p> : 
                    <div>
                        {animais.map (u => {
                            return(
                                <>  <br/>

                                    <hr/>
                                    <p>Nome: {u.nome}</p>
                                    <p>Espécie: {u.especie}</p>
                                    <p>Raça: {u.raca}</p>
                                    <p>Porte: {u.porte}</p>                                                               
                                    <hr/>

                                </>
                            )
                        })}
                    </div>
                }
                    </div>
               

                <div className='Pets'>
                    <h3>Agenda</h3>
                  <p>Pet:</p>  
                  <p>Data:</p>
                  <p>Horário:</p>
                  <p>Serviço:</p>
                        
                        
                </div>
            </div>
            

            <div className='add' onClick={OpenModal}><img src='add.png'></img></div>
            <div className='agenda' ><img onClick={AbrirModal2} src='agenda.png'  /></div>
                <br/>
                <br/>
                <br/>
                <Rodape/>

                <Modal 
                isOpen = {modalIsOpen}
                onRequestClose = {CloseModal}
                >
                    
                    <h1> Adicionar pet </h1>
                    <p>Nome do animal:</p><input className='inputPerfil'></input>
                    <p>Espécie:</p><input className='inputPerfil'></input>
                    <p>Raça:</p><input className='inputPerfil'></input>
                    <p>Porte:</p><input className='inputPerfil'></input>
                     <br/><br/>
                    <button onClick={CloseModal}>Voltar</button>
                    <button onClick={AbrirModal}>Salvar</button>
                    
                </Modal>

                <Modal
                isOpen = {abrirModal}
                onRequestClose = {FecharModal}
                >
                    <h1>Informações do pet</h1>
                    <button onClick={CloseModal}>Finalizar</button>                    
                </Modal>


                <Modal
                isOpen = {abrirModal2}
                onRequestClose = {FecharModal2}
                >
                    <h1>Agenda</h1>
                    <Agenda/>
                </Modal>


                <div>



                </div>

        </div>
      

        
                
        
        
     

        


        

    );
};
 
export default Perfil;