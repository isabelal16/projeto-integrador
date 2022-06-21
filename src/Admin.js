import React, { useState } from 'react';


//Criar uma Route Private (para a maioria das telas, já que só usuários e administrador poderão ter acesso a por exemplo perfil, agenda, etc)
const Admin = () => {
    return ( 
        <div>

            <h1>Administração</h1>

            <h2>Profissionais</h2>

            <p>Alex</p>

            <p>Samantha</p>

            <img></img>

            <p>Adm</p>

            <p>Agenda</p>
            
            <p>Tosador</p>

            <p>Veterinário</p>

            <p>Enfermaria</p>

            <p>Consultas</p>

            <p>Clientes</p>

        </div>
     );
}
 
export default Admin;