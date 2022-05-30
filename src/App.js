import React from 'react';
import Cadastro from './Cadastro';
import Inicio from './Inicio';

function App() {

  const[tela, alteraTela] = React.useState(0);

  return (

    <div >
      
      {
        (tela == 0 ? <Inicio/> : <Cadastro/>)
      }

    </div>

  );
}

export default App;
