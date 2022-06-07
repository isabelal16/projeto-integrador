import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Inicio from './Inicio';
import Menu from './Menu';
import Rodape from './Rodape';

const Servicos = () => {

    require("./Servicos.css")

    return (  
        <div className='Telap'>
            <Menu/>
            <div className='Text button box'>
                <h1>higiene</h1>
                <button>tosa</button>
                <button>banho</button>
                <button>secagem</button>
                <button>limpeza dos ouvidos</button>
            </div>
            <h1></h1>
            <div>

            </div>
            
            <Rodape/>
        </div>
    
        
    );
}
 
export default Servicos;