import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Home() {
  const cerrarSesion = () => {
    cookies.remove("usrId", { path: "/" });
    cookies.remove("usrName", { path: "/" });
    window.location.href = "./";
  };

  // const useEffect() {
  //   //Indico si existe la cookie username (puede ser cualquiera de referencia), redirija al menu
  //   if (cookies.get("usrId")) {
  //     window.location.href = `./home`;
  //   }
  // }

  return (
    <>
      <div className="home">
        <h1 className="main-tittle">BIENVENIDO A PUVPEL</h1>
        <h2>{`Accediste como: ${cookies.get("usrName")}`}</h2>
        <div className="home-options">
          <Link to="/modulos" className="main-button">
            Lista de Módulos
          </Link>
          <button className="main-button">Carrito de Compras</button>
          <button onClick={cerrarSesion} className="main-button">
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
