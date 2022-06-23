import React  from 'react';



const Profissionais = (props) => {

    const count = props.count;


    const profissionais = [

        

        {
            nome: "Alex Silva",
            descricao: "Alex, juntamente com uma equipe de 4 integrantes, são responsáveis pelo Banho e a Tosa do seu querido amigo.",
            especialidade: "Banho e Tosa",
        },
       
    ]


    return( 

        
        <div>

            
            <h1>{profissionais[0].nome}</h1>
            <p>{profissionais[0].descricao}</p>
            <p>{profissionais [0].especialidade}</p>
            

        </div>

    
    );
}




export default Profissionais;