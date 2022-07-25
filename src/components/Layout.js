// Creo este componente para que los elementos que se repitan poder reutilizarlos en las otras páginas (en este caso el Navbar)
// Este componente Layout englobara a los elementos en donde lo quiera utilizar en sus respectivos componente, en este caso al principal (app)
import React from "react";

//importo los componentes en común a usar en todas las páginas
import Navbar from "./NavBar";
import Footer from "./Footer";

function Layout(props) {
  // const children = props.children;
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
