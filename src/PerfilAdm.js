import React, { useState } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Rodape from './Rodape';
import Modal from 'react-modal';
import Agenda from './Agenda';

Modal.setAppElement('#root')

const PerfilAdm = (props) => {



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



    require("./PerfilAdm.css");

    return (  

        <div className='perfil' onClick={FecharModal3}>
            <div className='fundo'></div>
            <div><img /></div>
            <h1 className='textosPer'>Adm</h1>
            <h2>Descrição</h2>
            </div>
    );
}

export default PerfilAdm;


        