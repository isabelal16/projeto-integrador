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


    const [abrirModal3, modalAberto3] = useState(true)

    function AbrirModal3 (){
        modalAberto3 (true)
    }

    function FecharModal3 (){
        modalAberto3 (false)
    }

    const nome = props.nome



    require("./Perfil.css");

    return (  

        <div className='perfil' onClick={FecharModal3}>
            <div className='fundo'></div>
            <div><img className='fotoU' src="perfil.png"/></div>
            <h1 className='textosPer'>Sara Silva</h1>
            <h3>Pets</h3>
            <div className='fotopet'> 
                <img src='gato.png' onClick={AbrirModal}></img> <br/>
                     <div className='TextoP'>
                        <p> Gatos</p>
                     </div>
                <img src='doguinho.png'></img>
                     <div className='TextoP'>
                         <p> Cachorros</p>
                     </div>
                <img src="outros.png"/>
                    <div className='TextoP'>
                         <p> Outra Diversidade de animais </p>
                   

            <div className='add'><img src='add.png' ></img></div>
            

            <div/>
            <div className='add' onClick={OpenModal}><img src='add.png'></img></div>
            <div className='agenda'>
            <img src='agenda.png' onClick={AbrirModal2}/>
            </div>
                <Rodape/>

            <Modal
            isOpen = {modalIsOpen}
            onRequestClose = {CloseModal}
            >
                
                <h1> Adicionar pet </h1>
                <p>Nome:</p><input></input>
                <p>Raça:</p><input></input>
                <p>Cor:</p><input></input>
                <p>Porte:</p><input></input>
                <p>Imagem:</p><input></input>

            </Modal>

            <Modal
            isOpen = {abrirModal}
            onRequestClose = {FecharModal}
            >
                <h1>Informações do pet</h1>
            </Modal>


            <Modal
            isOpen = {abrirModal2}
            onRequestClose = {FecharModal2}
            >
                <h1>Agenda</h1>
                <Agenda/>
            </Modal>

            <Modal
            isOpen = {abrirModal3}
            onRequestClose = {FecharModal3}
            >
                {/*Modal que seria mostrado quando usuário fizesse login(SUJESTÃO)*/}
                <h1>Seja bem vindo ao seu perfil!</h1>
                <p>Agende serviços</p>
                <p>Cadastre seus pets</p>
                <p>Se organize e tenha acesso a sua agenda</p>
                <p>Aproveite os nossos serviços da melhor forma, estamos aqui para o seu bem estar e o do seu querido pet!</p>
                <button onClick={FecharModal3}>Fechar</button>
            </Modal>
       
        </div>

        

       

         
       
        </div>
        <div/>

        </div>


        

    );
}
 
export default Perfil;