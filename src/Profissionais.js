import React  from 'react';



const Profissionais = (props) => {

    const count = props.count;

    const profissionais = [

        {
            nome: "Samantha",
            descricao: "Samantha é legal",
            especialidade: "Tosadora",
        },

        
        {
            nome: "Alex",
            descricao: "Alex é legal",
            especialidade: "Tosador",
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