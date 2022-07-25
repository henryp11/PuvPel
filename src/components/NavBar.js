import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
  render() {
    return (
      <div className="menu">
        <Link to="/" className="menu-img">
          <img src={logo} alt="logo" className="logo" />
          <h3>PUVPEL: Plataforma Universal de Ventas de productos en línea</h3>
        </Link>
        {/* <ul> */}
        <Link to="/modulos" className="main-button main-button2">
          Módulos
        </Link>
        {/* <Link to="/" className="main-button">
            Salir
          </Link> */}
        {/* </ul> */}
      </div>
    );
  }
}

export default NavBar;
