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

    return (  

        <div className='perfil'>
            <div className='fundo'></div>
            <div> <img className='fotoU' src="perfil.png"/> </div>
            <h1 className='textosPer'>Sara Silva</h1>

            <h3>Pets</h3>

            <div className='fotopet textoP'> 
                <img src='gato.png' onClick={AbrirModal}></img> <br/>                     
                <img src='doguinho.png'></img>
                <img src="outros.png"/>
            </div>   

            <div className='add'><img src='add.png'/></div>

            <div className='alinhamento'>
                    <div className='Pets'>
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
                                </div>
                        </div>
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
            <div className='agenda'>
            <img src='agenda.png' onClick={AbrirModal2}/>
            </div>
                <br/>
                <br/>
                <br/>
                    <Rodape/>

                <Modal
                isOpen = {modalIsOpen}
                onRequestClose = {CloseModal}
                >
                    
                    <h1> Adicionar pet </h1>
                    <p>Nome:</p><input></input>
                    <p>Raça:</p><input></input>
                    <p>Porte:</p><input></input>
                    
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
        </div>
      

        
                
        
        
     

        


        

    );
};
 
export default Perfil;