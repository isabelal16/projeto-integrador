import Cadastro from "./Cadastro";
import { Routes, Route, Link } from "react-router-dom";

const Menu = ( props ) => {

    require("./Menu.css");

    const alteraTela = props.alteraTela;

    return (  

        <div className="menu">
            
            <h2>Avocados Bichos</h2>

            <div>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/login">Login</Link>
                <Link to="/">Serviços</Link>
            </div>
            
        </div>

    );
}
 
export default Menu;