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
                dono não precise gastar mais tendo que tratá-las.
                Nossa equipe está pronta para identificar qualquer anormalidade 
                na pele do seu melhor amigo com olhares cuidadosos na hora do banho.
                Temos diversos tipos de banhos especiais, terapeuticos
                `,
            img:"serviços.png",
            imgprof: "alex.png"
        },

        {
            servico: "Consulta",
            descricao: "Aqui neste espaço, seu animalzinho será atendido particularmente por um profissional da clínica. Ele realizará procedimentos que ajudaram com sua saúde, e indicará tratamentos necessários para um bem estar maior ao seu animalzinho. Aqui também será onde seu pet será encaminhado para cirurgias caso necessário. Os atendimentos são 24horas.",
            img:"serviços2.png",
            imgprof: "profissional.png"
        },

        {
            servico: "Vacina",
            descricao: "É só uma picadinha!. As vacinas são aplicadas para dar ao seu pet maior tempo de vida, auxiliar na saúde do seu pet e até mesmo na sua, te previnindo de algumas Zoonozes.",
            img:"vacinapet.png",
            
        }
    ]
    require("./PagServicos.css");

    return ( 
        <div>
            <Menu/>
        <div className='pagservico'>

        <div className='textimg'><img className='imagem1'src={servicos[x].img}/>
        <button>Agende já</button>
        <h1 className='h1serv'>{servicos[x].servico}</h1><br/>
        <p>{servicos[x].descricao}</p></div>
        </div>
        </div>

     );
}
 
export default PagServicos;