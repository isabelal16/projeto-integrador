import React from 'react';
import { Link } from "react-router-dom";

const Admin = () => {

    require ("./Admin.css")
    
    return ( 
        <div className='adm'>

            <img src='logo.png'/><br/>
            <br/>
            <br/>

            <h4>Horários</h4>

            <p><Link className='link' to="/horarios" state={{profissional : 1  }}>Maria Rita</Link><br/></p>

            <p><Link className='link' to="/horarios" state={{profissional : 2  }}>Alex Silva</Link><br/></p>

            <p><Link className='link' to="/horarios" state={{profissional : 3  }}>Anna Souza</Link><br/></p>

            <p><Link className='link' to="/horarios" state={{profissional : 4  }}>Carlos Ferreira</Link><br/></p>
            
            <br/>
            <h4>Administração</h4>
            <p><Link className='link' to="/clientes">Clientes</Link></p>
            <p><Link className='link' to="/pets">Pets</Link></p>
            
        </div>
     );
}
 
export default Admin;