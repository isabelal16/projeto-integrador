import React, { useState } from "react"; 
import Perfil from "./Perfil";
import Rodape from "./Rodape";

const Agenda = () => {

    const [modalIsOpen, setIsOpen] = useState(false)

    function CloseModal (){
        setIsOpen(false)
    }


    const [name, setName] = useState();
    const [time, setTime] = useState();
    const[date,setdate] = useState();
    const [functionaries, setFunctionaries] = useState([]);
    const [functionary, setFunctionary] = useState();

    const inputNameChanged = (e) => {
        setName(e.target.value);
    };


    const inputTimeChanged = (e) => {
        setTime(e.target.value);
        setFunctionaries([
            {
                id: 1,
                name: 'Alex Silva',
            },
            {
                id: 2,
                name: 'Anna Souza',
            },
            {
                id: 3,
                name: 'Carlos Ferreira',
            },
            {
                id: 4,
                name: 'Maria Rita',
            },
        ]);
    };
    const salvar = (e) => {
        e.preventDefault();

       const dataformatada = date.target.value

       console.log(name,time,dataformatada,functionary.name)
       
    }
    
        require("./Agenda.css")

    return(

        <body className="fundo">


        <div className="caixa">

            <form>

                <div>
                <label>
                    <p className="nomepet"><i class="fa-solid fa-paw"></i> Digite aqui o nome do seu amigão <i class="fa-solid fa-paw"></i></p>
                    <input type="text" id="inputname" name="teste" onChange={inputNameChanged}></input>

                </label> 
                </div>

                <div>
                    <label>
                        <p className="dia"><i class="fa-solid fa-calendar-check"></i> Qual vai ser o dia? <i class="fa-solid fa-calendar-check"></i></p>
                        <input type="date" id="inputdate"onChange={setdate}></input>
                    </label>
                </div>

                <div>
                    <p className="hora"><i class="fa-solid fa-clock"></i> Qual horário? <i class="fa-solid fa-clock"></i></p>
                    <input type="time" id="inputtime" onChange={inputTimeChanged}></input>
                    {(functionaries.length > 0) && (
                <div>
                    <label className="funcionario1">
                        <p className="profissional"><i class="fa-solid fa-user-doctor"></i> Qual o profissional? <i class="fa-solid fa-user-doctor"></i></p>
                        {functionaries.map( functionary =>

                            <label className="funcionario" key={functionary.id}>
                                <input type="radio" name="functionary" value={functionary.id} onClick={() => { setFunctionary(functionary) }} />{functionary.name}
                            </label>
                        )}
                    </label>
                </div>
                )}
                

                </div>

                <button className="botao1" onClick={CloseModal}><i class="fa-solid fa-arrow-left-long"></i> Voltar</button>
                <button className="botao2" onClick={salvar}><i class="fa-solid fa-check"></i> salvar</button>
                
            </form>

            </div>

            <div>

           <Rodape/>

            </div>
            
        </body>
     

    );



}
export default Agenda