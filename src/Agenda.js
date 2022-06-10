import React from "react"; 


const Agenda = () => {
     
// const Nome = document.getElementById = Nome
// const Date = document.getElementById = Date
// const Time = document.getElementById = Time

// const  Data = ()  => <li> <p>{"Nome"}</p>  <p>{"Date"}</p> <p>{"Time"}</p> </li>

//document.get(ul).innerHTML = Agenda;
    const salvar = (e) => {
        e.preventDefault();

       const Name = document.getElementById("inputName").value;
       const Time = document.getElementById("inputTime").value;
       const Date = document.getElementById("inputDate").value;
       const functionary = document.getElementById("inputfunctionary").value;

       console.log(Name,Time,Date,functionary)
       
    }


    return(

        

        <div>


            <form>

                <div>
                <label>
                    <p>nome o seu amigão</p>
                    <input type="text" id="inputName" name="teste"></input>

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
                    <input type="time" id="inputTime"></input>

                <div>
                    <input type="functionary" id="functionary"></input>
                </div>

                </div>

                <button onClick={salvar}>salvar</button>
                

                <label>
                    <select name="Agenda">
                        <option value= "name">name</option>
                        <option value= "Date">Date</option>
                        <option value= "time">time</option>
                        <option value= "functionary">functionary</option>
                    </select>
                </label>


            </form>

            <ul>
            
                <li>

                    <p> Cachorro rex </p>
                    <p>09/06/2022 <br/> 15:22</p>

                </li>
            
            </ul>
                    
        </div>

    );
}
export default Agenda