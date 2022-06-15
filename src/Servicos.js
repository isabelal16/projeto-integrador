import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Rodape from './Rodape';

const Servicos = () => {

    require("./Servicos.css")

    return (  

        <div>

            <div className='listaSer'>
                <div className='logoServicos'>
                    <img width={80} src='fotorodape.jpg'/>
                    <h2>Avocados Bichos</h2>
                </div>
                
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Serviços 
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Banho</a></li>
                        <li><a className="dropdown-item" href="#">Tosa</a></li>
                        <li><a className="dropdown-item" href="#">Corte das unhas</a></li>
                        <li><a className="dropdown-item" href="#">Secagem</a></li>
                        <li><a className="dropdown-item" href="#">Limpeza nos ouvidos</a></li>
                        <li><a className="dropdown-item" href="#">Banhos terapêuticos</a></li>
                        <li><a className="dropdown-item" href="#">Consultas</a></li>
                        <li><a className="dropdown-item" href="#">Vacinas</a></li>
                    </ul>
                </div>
            </div>

            <div className='slideTa'>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="serviços2.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='textosSer'>Consultas</h5>
                            <p className='textosSer'>Como vai a saúde do seu pet?, marque uma consulta com a gente, somos especialistas em drenagem da glândula adanal.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="serviços.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='textosSer'>Higiene</h5>
                            <p className='textosSer'>Adeus cheirinho de pelo molhado!, somos especialistas em limpeza dos ouvidos, banho, tosa, corte nas unhas, secagem e banhos terapêuticos.</p>
                        </div>
                        </div>
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Próximo</span>
                    </button>
                </div>
            </div>

            

            
            
            
            <Rodape/>
        </div>

        
    
        
    );
}
 
export default Servicos;