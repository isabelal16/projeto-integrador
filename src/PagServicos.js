import React, {useState} from 'react';
import Menu from './Menu';
import { Routes, Route, Link } from "react-router-dom";

const PagServicos = () => {

    const [count, setCount] = useState(0);

    const servicos = [

        {
            servico: "Banho e Tosa",
            descricao: `Todos que possuem um cão sabem o quão mal cheiroso ele
             pode ficar se não tiver uma higiene regular. O banho e tosa de 
              cães são ferramentas importantes para manter a saúde do 
              cãozinho e evitar problemas de saúde tanto do animal, quanto 
               do seu dono. Pulgas, carrapatos e todo tipo de bactéria ou 
               doença de pelos e pele podem ser facilmente evitadas para que o 
                dono não precise gastar mais tendo que tratá-las.`
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
    require("./PagServicos.css");

    return ( 

        
        <div className='pagservico'>
            <Menu/>
        <h1>{servicos[0].servico}</h1>
        <div className='textimg'><img src='Banho.png'/>
        <p>{servicos[0].descricao}</p></div>
        <h1>Profissionais</h1>
        <div className='profissionais'>
        <Link to="/profissionais" onClick={() => setCount(count + 0)}><img src="Alex.png"/></Link>
        </div>
        </div>

     );
}
 
export default PagServicos;