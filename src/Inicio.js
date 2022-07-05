import React from 'react';
import { Link } from 'react-router-dom';
import Clientes from './Clientes';
import Menu from './Menu';
import Rodape from './Rodape';
import Servicos from './Servicos'
import PagServicos from './PagServicos';
import Profissionais from './Profissionais';

const Inicio = () => {

    require ("./Inicio.css")
    return ( 

        <div className='painel'>
            <Menu/>
            <div className='titulo'>
                <h1 className='painel1'>Cuide do seu <br/>melhor amigo!</h1> 
                <p className='painel2'>Nossa clinica é especializada em consulta veterinária, cuidados com o seu pet e em vacinação</p> 
            </div>

            <div>
                <img className='imagemP' src='Fotopainel.png'/>
            </div>

            
            <div className='somos'>
                <div><img  className='gatodog' src='gatodog.gif'/></div>
                <div className='desc'>
                    <h4>Quem Somos?</h4>
                    <p>A Avocado Bichos é uma clínica especializada na saúde e conforto do seu pet. Foi fundada em maio de 2022, se destaca pelo zelo com os animais e pela busca ao aperfeiçoamento na prestação de serviços pet. Apaixonada por animais, a equipe tem como prioridade proporcionar conforto e segurança desde a saúde à recreação através de toda nossa infraestrutura.</p>
                </div>
            </div>
            <h2 className='h2pq'>Por que escolher a Avocado Bichos?</h2>
            <div className='porque'>
                <div className='pq'>
                    <img src='acesse.png'/>
                    <p>Tenha acesso a sua agenda quando e onde quiser, através do nosso site</p>
                </div>
                <div className='pq'>
                    <img src='services.png'/>
                   <p> Serviços de alta qualidade que sempre prezam pelo bem estar do seu animailzinho</p>
                </div>
                <div className='pq'>
                    <img src='espaco.png'/>
                   <p> Espaço planejado e adaptado para melhor recebê-los</p>
                </div>
                <div className='pq'>
                    <img src='emergencia.png'/>
                    <p>Equipe preparada para quaisquer tipos de emergência</p>
                </div>
            </div>

            <Rodape/>
        </div>
    );
}
 
export default Inicio;