import React from 'react';
const PagServicos = () => {

    const servicos = [

        {
            servico: "Banho",
            descricao: "Neste serviço damos banho"
        },

        {
            servico: "Vacina",
            descricao: "Neste serviço damos vacina"
        },

        {
            servico: "Tosa",
            descricao: "Neste serviço damos tosa"
        }
       
    ]
    return ( 
        <div>
        <h1>{servicos[0].servico}</h1>
        <p>{servicos[0].descricao}</p>
        </div>

     );
}
 
export default PagServicos;