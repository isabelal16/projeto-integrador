import React, { useState } from "react"; 

const Agenda = () => {

    const [modalIsOpen, setIsOpen] = useState(false)

    function CloseModal (){
        setIsOpen(false)
    }

    const [animais, alteraAnimais] = useState([]);

    const [name, setName] = useState();
    const servico = useState();
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

    const [ agenda, alteraAgenda] = React.useState([]);

    React.useEffect( () => {
       

        postarAgenda()

    }, [])

    const postarAgenda = () =>{
        const axios = require ("axios").default;

        const id_usuario = localStorage.getItem('id_usuario');
        axios.get('http://localhost:3001/agenda/'+ id_usuario)
        .then(function (response) {
                
        const dados = response.data;
        console.log (dados)
        alteraAgenda (dados)
        })
        .catch(function (error) {
        console.log(error);
        })
    }

    React.useEffect(()=>{
        const axios = require("axios").default;
        const idusuario = 1;
        axios.get('http://localhost:3001/animais/'+idusuario)
        .then(function (response) {
                console.log(response.data)
                alteraAnimais(response.data)
            

        })
        .catch(function (error) {
        console.log(error);
        })
    },[])


    const Salvar = (e) => {
        e.preventDefault();

       const dataformatada = date.target.value
        const servico2 = document.getElementById("servico").value
        const pet2 = document.getElementById("pet2").value
       const obj = {
        id_usuario: localStorage.getItem("id_usuario"),
        id_animais: pet2, 
        servico: servico2, 
        data: dataformatada,
        Horario: time, 
        id_profissional: functionary.id
    }

       console.log(obj)

       const axios = require("axios").default;

       axios.post('http://localhost:3001/agenda', obj)
       .then(function (response) {
            
           console.log (response) 
           CloseModal()
           postarAgenda()

       })
       .catch(function (error) {
       console.log(error);
       })

       
    }
    
    require("./Agenda.css")

    const Agendamento = (e) => {

         

        e.preventDefault();

        const pet = document.querySelector("input[name='pet']").value;
        const servico = document.querySelector("input[name='servico']").value;
        const data = document.querySelector("input[name='data']").value;
        const hora = document.querySelector("input[name='hora']").value;
        const functionary = document.querySelector("input[name='functionary']").value;

        const obj = {
            pet: pet, 
            servico: servico, 
            data: data,
            hora: hora, 
            functionary: functionary
        }

        console.log (obj)
        
        const axios = require("axios").default;

        axios.post('http://localhost:3001/agenda', obj)
        .then(function (response) {
             
            console.log (response) 

        })
        .catch(function (error) {
        console.log(error);
        })

    }


    return(

        <div className="caixa">


            <form onSubmit={(e) => Salvar(e) }>

                <div>
                    <label>
                    <p className="nomepet" > <i class="fa-solid fa-paw"></i> Para qual pet você quer agendar?</p>

                        <select id="pet2" className="nomepet">
                            {
                                animais == 0 ? <option>Nenhum animal cadastrado</option> :
                                animais.map(a => <option value={a.id_animais}>{a.nome}</option>)
                            }
                        </select>
                        

                    </label> 
                    <label>
                        <p className="nomepet"> Escolha o serviço que irá utilizar... </p>

                        <select className="opcaoServico" id="servico" name="servico">
                        <option>Banho</option>
                        <option>Tosa</option>
                        <option>Vacinação</option>
                        <option>Consulta</option>
                        </select>

                    </label>
                    </div>

                        <div>
                            <label>
                                <p className="dia"><i class="fa-solid fa-calendar-check"></i> Escolha o dia... </p>
                                <input className="opcaoDia" name="data" type="date" id="inputdate"onChange={setdate}></input>
                            </label>
                        </div>

                        <div>
                            <p className="hora"><i class="fa-solid fa-clock"></i> Escolha um horário... </p>
                            <input className="opcaoHora" name="hora" type="time" id="inputtime" onChange={inputTimeChanged}></input>
                            {(functionaries.length > 0) && (
                        <div>
                        <label className="funcionario1">
                            <p className="profissional"><i class="fa-solid fa-user-doctor"></i> Escolha o Profissional... </p>
                            {functionaries.map( functionary =>

                                <label className="funcionario" key={functionary.id}>
                                    <input className="nomeFuncionario" type="radio" name="functionary" value={functionary.id} onClick={() => { setFunctionary(functionary) }} />{functionary.name}
                                </label>
                                )}
                        </label>
                    </div>
                    )}
                

                </div>

                <button className="botao1" onClick={CloseModal}><i class="fa-solid fa-arrow-left-long"></i> Voltar</button>
                <button type="submit" className="botao2" onClick={postarAgenda} ><i class="fa-solid fa-check"></i> Salvar</button>
                
            </form>
            </div>
     
        

    );



}
export default Agenda