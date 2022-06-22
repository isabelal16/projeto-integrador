import React, { useState } from "react"; 
import Perfil from "./Perfil";

const Agenda = () => {
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
                name: 'adriana gomez',
            },
            {
                id: 2,
                name: 'lucas silva',
            },
            {
                id: 3,
                name: 'gabriel souza',
            },
            {
                id: 4,
                name: 'rebecca vaz',
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

        

        <div>


            <form>

                <div>
                <label>
                    <p>nome o seu amigão</p>
                    <input type="text" id="inputname" name="teste" onChange={inputNameChanged}></input>

                </label> 
                </div>

                <div>
                    <label>
                        <p>qual vai ser o dia</p>
                        <input type="date" id="inputdate"onChange={setdate}></input>
                    </label>
                </div>

                <div>
                    <p>que hora vai ser</p>
                    <input type="time" id="inputtime" onChange={inputTimeChanged}></input>
                    {(functionaries.length > 0) && (
                <div>
                    <label className="funcionario1">
                        <p> qual vai ser o funcionario ?</p>
                        {functionaries.map( functionary =>

                            <label className="funcionario" key={functionary.id}>
                                <input type="radio" name="functionary" value={functionary.id} onClick={() => { setFunctionary(functionary) }} />{functionary.name}
                            </label>
                        )}
                    </label>
                </div>
                )}
                

                </div>

                <button onClick={salvar}>salvar</button>
            </form>

            <ul>
            
                <li>

                

                </li>
            
            </ul>
                    
        </div>

    );
}
export default Agenda