import React , {useState}from 'react';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Rodape from './Rodape';
import Profissionais from './Profissionais';

const Servicos = (props) => {

    require("./Servicos.css")

    const [count, setCount] = useState(0);

    //const newTo = { 
        //pathname: "/pagservicos", 
        //x : 0  
      //};

    return (  

        <div>

            <div className='listaSer'>
                <div className='logoServicos'>
                <Link to = "/"> <img width={80} src='fotorodape.jpg' /></Link>
                    <h2>Avocados Bichos</h2>
                </div>
                
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Serviços 
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><Link to = "/pagservicos" state={{x : 0}}><a className="dropdown-item" href="#">Banho e Tosa</a></Link></li>
                        <li><Link to="/pagservicos" state={{x : 1}}><a className="dropdown-item" href="#">Consultas</a></Link></li>
                        <li><Link to="/pagservicos" state={{x : 2}}><a className="dropdown-item" href="#">Vacinas</a></Link></li>
                    </ul>
                </div>
            </div>

            <div className='slideTa'>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="serviços2.png" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='textosSer'>Consulta</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="serviços.png" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='textosSer'>Higiene</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="vacinapet.png" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='textosSer'>Vacina</h5>
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

            <Profissionais/>
            
            <Rodape/>
        </div>

        
    
        
    );
}
 
export default Servicos;