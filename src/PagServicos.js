import React from 'react';
import Menu from './Menu';
import { Routes, Route, Link, useLocation} from "react-router-dom";

const PagServicos = (props) => {

    const location = useLocation()
    const x = location.state.x


    const servicos = [

        {
            servico: "Banho e Tosa",
            descricao: `Todos que possuem um cão sabem o quão mal cheiroso ele
             pode ficar se não tiver uma higiene regular. O banho e tosa de 
              cães são ferramentas importantes para manter a saúde do 
              cãozinho e evitar problemas de saúde tanto do animal, quanto 
               do seu dono. Pulgas, carrapatos e todo tipo de bactéria ou 
               doença de pelos e pele podem ser facilmente evitadas para que o 
                dono não precise gastar mais tendo que tratá-las.`,
            img:"Banho.png",
            imgprof: "alex.png"
        },

        {
            servico: "Consulta",
            descricao: "Aqui neste espaço, seu animalzinho será atendido particularmente por um profissional da clínica. Ele realizará procedimentos que ajudaram com sua saúde, e indicará tratamentos necessários para um bem estar maior ao seu animalzinho. Aqui também será onde seu pet será encaminhado para cirurgias caso necessário. Os atendimentos são 24horas.",
            img:"Banho.png",
            imgprof: "profissional.png"
        },

        {
            servico: "Vacina",
            descricao: "É só uma picadinha!. As vacinas são aplicadas para dar ao seu pet maior tempo de vida, auxiliar na saúde do seu pet e até mesmo na sua, te previnindo de algumas Zoonozes.",
            img:"Banho.png",
            
        }
    ]
    require("./PagServicos.css");

    return ( 
        
        <div className='pagservico'>
            <Menu/>
        <h1>{servicos[x].servico}</h1>
        <div className='textimg'><img src={servicos[x].img}/>
        <p>{servicos[x].descricao}</p></div>
        <h1>Profissionais</h1>
        <p>{x}</p>
        <div className='profissionais'>
        <Link to="/profissionais"><img src={servicos[0].imgprof}/></Link>
        </div>
        </div>

     );
}
 
export default PagServicos;