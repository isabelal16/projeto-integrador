import React, { useState } from "react"; 


const Agenda = () => {
    const [name, setName] = useState();
    const [time, setTime] = useState();
    const [functionaries, setFunctionaries] = useState([]);
    const [functionary, setFunctionary] = useState();

    const inputNameChanged = (e) => {
        setName(e.target.value);
    };

    const inputTimeChanged = (e) => {
        setTime(e.target.value);
        // TODO: Ler do back-end a lista de funcionários disponíveis para a data e horário definidos
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
     
// const Nome = document.getElementById = Nome
// const Date = document.getElementById = Date
// const Time = document.getElementById = Time

// const  Data = ()  => <li> <p>{"Nome"}</p>  <p>{"Date"}</p> <p>{"Time"}</p> </li>

//document.get(ul).innerHTML = Agenda;
    const salvar = (e) => {
        e.preventDefault();

       //const Name = document.getElementById("inputName").value;
       //const Time = document.getElementById("inputTime").value;
       const Date = document.getElementById("inputDate").value;
       //const functionary = document.getElementById("inputfunctionary");

       console.log(name,time,Date,functionary.name)
       
    }
    

    return(

        

        <div>


            <form>

                <div>
                <label>
                    <p>nome o seu amigão</p>
                    <input type="text" id="inputName" name="teste" onChange={inputNameChanged}></input>

                </label> 
                </div>

                <div>
                    <label>
                        <p>qual vai ser o dia</p>
                        <input type="date" id="inputDate"></input>

                    </label>
                </div>

                <div>
                    <p>que hora vai ser</p>
                    <input type="time" id="inputTime" onChange={inputTimeChanged}></input>

                {(functionaries.length > 0) && (
                    <div >
                        <label>
                        <p> qual vai ser o funcionario ?</p>
                        {functionaries.map( functionary =>
                            <label key={functionary.id}>
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