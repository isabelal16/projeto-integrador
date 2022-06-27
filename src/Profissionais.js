import React  from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';




const Profissionais = (props) => {

    require("./profissionais.css");

    const profissionais = [

        

        {
            nome: "Alex Silva",
            descricao: `Alex é especializado em diversos tipos de banhos e tosquias, trabalha na área há mais de 10 anos e é apaixonado 
            por animais silvestres, recentemente está cursando seu primeiro semestre em Veterinária na Univesp, e com todo carinho e paciência,
             é responsavel pela área de banho e tosa da nossa clínica.`,
            especialidade: "Banho e Tosa",
            imgprof: "alex.png"
        },

        {
            nome: "Ana Souza",
            descricao: "Alex, juntamente com uma equipe de 4 integrantes, são responsáveis pelo Banho e a Tosa do seu querido amigo.",
            especialidade: "Banho e Tosa",
            imgprof: "profissional.png"
        },
       
        {
            nome: "Carlos Ferreira",
            descricao: "Alex, juntamente com uma equipe de 4 integrantes, são responsáveis pelo Banho e a Tosa do seu querido amigo.",
            especialidade: "Banho e Tosa",
            imgprof: "profissional1.png"
        },
       
        {
            nome: "Maria Fernanda",
            descricao: "Alex, juntamente com uma equipe de 4 integrantes, são responsáveis pelo Banho e a Tosa do seu querido amigo.",
            especialidade: "Banho e Tosa",
            imgprof: "profissional1.png"
        } 
       
    ]

    
    return( 

        <div className='geral'>
            <div className='profsimg'>
            <h1 className='title'>Nossos Profissionais</h1>
            <img src='veterinary.gif' className='vet'/>
            </div>
            <div className='profsimg'>
                <div className='profs'>
                    <img className='profissional' src={profissionais [1].imgprof}/>
                    <h1>{profissionais[0].nome}</h1>
                    <p>{profissionais[0].descricao}</p>
                    <p>{profissionais [0].especialidade}</p>
                </div>
                <div className='profs'>
                <img className='profissional' src={profissionais [1].imgprof}/>
                <h1>{profissionais[1].nome}</h1>
                <p>{profissionais[1].descricao}</p>
                <p>{profissionais [1].especialidade}</p>
                </div>
                <div className='profs'>
                    <img className='profissional' src={profissionais [2].imgprof}/>
                    <h1>{profissionais[2].nome}</h1>
                    <p>{profissionais[2].descricao}</p>
                    <p>{profissionais [2].especialidade}</p>
                </div>
                <div className='profs'>
                    <img className='profissional' src={profissionais [3].imgprof}/>
                    <h1>{profissionais[3].nome}</h1>
                    <p>{profissionais[3].descricao}</p>
                    <p>{profissionais [3].especialidade}</p>
                </div>
                </div>
           
                
            {/* <div className='textop'>
                    <p>Profissionais</p>
                    <div>
                    <Link to="/">Home</Link>
                    <Link to="/servicos">Serviços</Link>
                    </div>*
        </div>*/}
            
        </div>

    
    );
}




export default Profissionais;