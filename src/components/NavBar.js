import logo from "../logo.svg" ;
const NavBar = () => {
    return (
        <div className="divHeader">
            <img src={logo} className="loguito" alt="logo" />
            <li>
                <a>INICIO</a>
                <a>SOBRE NOSOTROS</a>
                <a>CONTACTO</a>
            
            </li>
            
            <a>REGISTRATE</a>
              
        </div>);

};


export default NavBar;