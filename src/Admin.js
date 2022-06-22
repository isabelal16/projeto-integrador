import React, { useState } from 'react';


//Criar uma Route Private (para a maioria das telas, já que só usuários e administrador poderão ter acesso a por exemplo perfil, agenda, etc)
const Admin = () => {

    require ("./Admin.css")
    return ( 
        <div className='adm'>

            <img src='logo.png'/><br/>
            <br/>
            <br/>

            <h4>Profissionais</h4><br/>

            <p>Alex</p><br/>

            <p>Samantha</p><br/>

            <h4>Agenda</h4><br/>
            
            <p>Tosador</p><br/>

            <p>Veterinário</p><br/>

            <p>Enfermaria</p><br/>

            <p>Consultas</p><br/>

            <h4>Clientes</h4><br/>

        </div>
     );
}
 
export default Admin;