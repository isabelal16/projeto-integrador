import React, { useState } from 'react';
import Rodape from './Rodape';
import Modal from 'react-modal';
import Agenda from './Agenda';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root')

const Perfil = (props) => {

const [ agenda, alteraAgenda] = React.useState([]);

React.useEffect(()=>{
    const axios = require("axios").default;
    const idusuario = localStorage.getItem('id_usuario');

    axios.get('http://localhost:3001/agenda/'+idusuario)
    .then(function (response) {
        console.log(response.data)
        alteraAgenda(response.data)
            

    })
    .catch(function (error) {
    console.log(error);
    })
        
},[])


const navigate = useNavigate()

const logOff = () => {

    console.log("teste")

    localStorage.removeItem('id_usuario')
    localStorage.removeItem('nome')
    navigate('/')

}

const [animais, alteraAnimais] = React.useState([]);

React.useEffect( () => {
       

    Buscapets()

}, [])

const Buscapets = () =>{
    const axios = require ("axios").default;

    const id_usuario = localStorage.getItem('id_usuario');
    axios.get('http://localhost:3001/animais/'+ id_usuario)
    .then(function (response) {
                
    const dados = response.data;
    console.log (dados)
    alteraAnimais (dados)
    })
    .catch(function (error) {
    console.log(error);
    })
}

const CadastrarPet = (e) =>{

    e.preventDefault();

    const nome = document.querySelector("input[name='nome']").value;
    const especie = document.querySelector("input[name='especie']").value;
    const raca = document.querySelector("input[name='raca']").value;
    const porte = document.querySelector("input[name='porte']").value;

    const obj = {

        id_usuario: localStorage.getItem('id_usuario'),
        nome: nome,
        especie: especie,
        raca: raca,
        porte:porte
    }

    const axios = require ("axios").default;

    axios.post('http://localhost:3001/CadastrarPet', obj)
        .then(function (response) {
             
            console.log (response) 
            CloseModal()
            Buscapets()

        })
        .catch(function (error) {
        console.log(error);
    })

}


// AGENDA



const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(0, 6));
  };

    //MODAL PET

    const [modalIsOpen, setIsOpen] = useState(false)

    function OpenModal (){
        setIsOpen(true)
    }

    function CloseModal (){
        setIsOpen(false)
    }

    //MODAL AGENDA

    const [abrirModal2, modalAberto2] = useState(false)

    function AbrirModal2 (){
        modalAberto2 (true)
    }

    function FecharModal2 (){
        modalAberto2 (false)
    }


    const nome = props.nome

    require("./Perfil.css");

    const fotouser = [

        {
            foto: "pet.png",
        },

        {
            foto: "pet1.png",
        },


        {
            foto: "pet2.png",
        },

        {
            foto: "pet3.png",
        },

        {
            foto: "pet4.png",
        },

        {
            foto: "pet5.png",
        },

        {
            foto: "pet6.png",
        },

        
    ]

    const customStyles = {
        content: {
          left: '35%',
          background: 'transparent',
          border: 'none'
        },
      };
      


    return (  

        <div className='perfil'>
            <div className='fundo'> <button className='logOffButton' onClick={logOff}>Sair</button> </div> 
            <div><img className='fotoU' src={fotouser[num].foto}/></div>
            <div className='carregar'><img src='recarregar.png' onClick={handleClick}/></div>
            <h1 className='textosPer'>{localStorage.getItem ('nome')}</h1>

            

            <div className='titulos'>
                <h3>Pets</h3>
                <h3 className='titulo1'>Agenda</h3>
            </div>
            <div className='alinhamento'>
                <div className='Pets'>
                

                    {
                        animais == 0 ? <p> Nenhum Pet Cadastrado...</p> : 
                        <div>
                            {animais.map (u => {
                                return(
                                    <>  <br/>

                                        <hr/>
                                        <p>Nome: {u.nome[0].toUpperCase() + u.nome.substr(1)}</p>
                                        <p>Espécie: {u.especie[0].toUpperCase() + u.especie.substr(1)}</p>
                                        <p>Raça: {u.raca[0].toUpperCase() + u.raca.substr(1)}</p>
                                        <p>Porte: {u.porte[0].toUpperCase() + u.porte.substr(1)}</p>                                                               
                                        <hr/>

                                    </>
                                )
                            })}
                        </div>
                    }
            </div>
               
               

                <div className='Pets'>
                
                <table>
                    <tr>
                        <th>Pet</th>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Serviço</th>
                    </tr>

                    
                    

                    

                    {
                        agenda == 0 ? <div><br></br><p>Nenhum horário marcado... </p></div>  : 
                        <>
                            {agenda.map (u => {
                                

                                //Formatar data
                                const x = u.data
                                x.split ("T")
                                const data = x.split("T")[0]
                                data.split("-")
                                const dia = data.split("-")[2]
                                const mes = data.split("-")[1]

                                //Formatar horario
                                const y = u.Horario
                                y.split (":")
                                const hora = y.split(":")[0]
                                const minuto = y.split(":")[1]

                                
                                return(
                                    <tr>  

                                        
                                        <td>{u.nome[0].toUpperCase() + u.nome.substr(1)}</td>
                                        <td>{dia}/{mes}</td>
                                        <td>{hora}:{minuto}</td>
                                        <td>{u.servico[0].toUpperCase() + u.servico.substr(1)}</td>                                                               
                                        
                                    </tr>

                                )
                            })}
                        </>
                    }
                
                </table>
                       
                        
                </div>
            </div>
            

                <div className='add' onClick={OpenModal}><img src='add.png'></img></div>
                <div className='agenda' ><img onClick={AbrirModal2} src='agenda.png'  /></div>
                <br/>
                <br/>
                <br/>
                

                <Modal
                isOpen = {modalIsOpen}
                onRequestClose = {CloseModal}
                style = {customStyles}
                >
                    <div className='modalCadastropet'>
                        <h1> Adicionar pet </h1>
                        <p>Nome do animal:</p><input name='nome' className='inputPerfil'></input>
                        <p>Espécie:</p><input name='especie' className='inputPerfil'></input>
                        <p>Raça:</p><input name='raca' className='inputPerfil'></input>
                        <p>Porte:</p><input name='porte' className='inputPerfil'></input>
                        <br/><br/>
                        <button className='bModalPet' onClick={CadastrarPet}>Finalizar</button>
                        <img className='voltar' onClick={CloseModal} src='voltar1.png'/>
                    </div>

                </Modal>


                <Modal
                isOpen = {abrirModal2}
                onRequestClose = {FecharModal2}
                style = {customStyles}
                >
                    <Agenda/>
                </Modal>

                
                <Rodape/>
        </div>        

    );
};
 
export default Perfil;