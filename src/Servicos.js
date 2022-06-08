import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Inicio from './Inicio';
import Menu from './Menu';
import Rodape from './Rodape';

const Servicos = () => {

    require("./Servicos.css")

    return (  
        <div className='Telap'>

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://learn.uvm.edu/nb_wordpress/wp-content/uploads/Post-Baccalaureate-Veterinarian-DVM-1-1536x1024.jpeg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='textosSer'>Consultas</h5>
                        <p className='textosSer'>Cuide da saúde do seu pet e marque uma consulta com a gente, somos especialistas em drenagem da glândula adanal.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://coastalpetproducts.com/media/1049/complete-care-cat-banner_mobile.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='textosSer'>Higiene</h5>
                        <p className='textosSer'>Deixe seu pet cheirosinho conosco, somos especializados em limpeza dos ouvidos, banho, tosa, corte nas unhas, secagem e banhos terapêuticos.</p>
                    </div>
                    </div>
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <Rodape/>
        </div>
    
        
    );
}
 
export default Servicos;