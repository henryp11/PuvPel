import React from "react";
import ItemList from "../components/ItemList";
import api from "../api"; //Traigo la configuración de llamada a la api
import { Link } from "react-router-dom";

class MantProductos extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 50000);
  }

  componentWillUnmount() {
    // Aqui elimino el intervalo si el componente ya no existe
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    //Preparo entorno para llamada a la API
    try {
      const data = await api.productos.list(); //Ya no inicializo un array vacio sino que muestro el listado de items
      console.log(data);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    // 1º Evalúo si se está cargando los datos.
    if (this.state.loading === true && !this.state.data) {
      return <p>Loading</p>;
    }

    // Evalúo error.
    if (this.state.error) {
      return `El error es: ${this.state.error.message}`;
    }

    return (
      <>
        <h1>Módulo Inventario - Mantenimiento de Producto</h1>
        <ItemList itemData={this.state.data} />
      </>
    );
  }
}

export default MantProductos;
