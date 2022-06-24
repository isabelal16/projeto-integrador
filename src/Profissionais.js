import React  from 'react';



const Profissionais = (props) => {

    require("./profissionais.css");

    const profissionais = [

        

        {
            nome: "Alex Silva",
            descricao: "Alex, juntamente com uma equipe de 4 integrantes, são responsáveis pelo Banho e a Tosa do seu querido amigo.",
            especialidade: "Banho e Tosa",
            imgprof: "alex.png"
        },

        {
            nome: "Fernanda",
            descricao: "Alex, juntamente com uma equipe de 4 integrantes, são responsáveis pelo Banho e a Tosa do seu querido amigo.",
            especialidade: "Banho e Tosa",
            imgprof: "profissional.png"
        },
       
        {
            nome: "Alana",
            descricao: "Alex, juntamente com uma equipe de 4 integrantes, são responsáveis pelo Banho e a Tosa do seu querido amigo.",
            especialidade: "Banho e Tosa",
            imgprof: "profissional1.png"
        },
       
        {
            nome: "Matheus",
            descricao: "Alex, juntamente com uma equipe de 4 integrantes, são responsáveis pelo Banho e a Tosa do seu querido amigo.",
            especialidade: "Banho e Tosa",
            imgprof: "profissional1.png"
        } 
       
    ]

    
    return( 

        
        <div className='prof'>

            
            <h1>{profissionais[0].nome}</h1>
            <p>{profissionais[0].descricao}</p>
            <p>{profissionais [0].especialidade}</p>
            

        </div>

    
    );
}




export default Profissionais;