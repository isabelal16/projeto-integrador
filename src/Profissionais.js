import React  from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Profissionais = (props) => {

    require("./profissionais.css");

    const profissionais = [

        
        
        {
            nome: "Alex Silva",
            descricao: `Alex trabalha na área há mais de 3 anos e é apaixonado 
            por animais silvestres, recentemente está cursando seu último semestre em veterinária 
            na Univesp.`,
            img: "profissional1.jpg"
        },

        {
            nome: "Carlos Ferreira",
            descricao:` Carlos esta no segundo semestre da faculdade de medicina veterinária pela Unesp,
            ele sempra amou os pets só na sua família tem mais de cincos veterinários. `,
            img: "profissional4.jpg"
        },
            
        { 
            nome: "Maria Rita",
            descricao: `Maria é doutoranda em veterinária a mais de 4 anos pela Usp e está conosco desde do início do nosso Pet shop,
            ela cuidará com muito carinho do seu amigão.` ,
            img: "profissional2.jpg"
        },

        {
            nome: "Ana Souza",
            descricao: `Ana é formada em medicina veterinária com especialização em dermatologia veterinária, ela
            está conosco a mais de 2 anos e sempre foi apaixonada pelos animais. `,
            img: "profissional3.jpg"
        }
       
    ]

    
    return( 

        <div className='geral'>
            
            <h1 className='title'>Nossos Profissionais</h1>

            <div className='profsimg'>

                <div className='profs'>
                    <img className='profissional' src={profissionais [0].img}/>
                    <h1>{profissionais[0].nome}</h1>
                    <p>{profissionais[0].descricao}</p>

                </div>

                <div className='profs'>
                <img className='profissional' src={profissionais [1].img}/>
                <h1>{profissionais[1].nome}</h1>
                <p>{profissionais[1].descricao}</p>
                </div>

                <div className='profs'>
                    <img className='profissional' src={profissionais [2].img}/>
                    <h1>{profissionais[2].nome}</h1>
                    <p>{profissionais[2].descricao}</p>
 
                </div>

                <div className='profs'>
                    <img className='profissional' src={profissionais [3].img}/>
                    <h1>{profissionais[3].nome}</h1>
                    <p>{profissionais[3].descricao}</p>
                </div>
            </div>
            
        </div>

    
    );
}




export default Profissionais;