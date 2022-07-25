import React, { useState } from "react";
import ItemForm from "../components/ItemForm";
import ItemTemplate from "../components/ItemTemplate";
import api from "../api";
import { useNavigate } from "react-router-dom";

// Se utiliza como hooks por cambio en react-router-dom"
function ItemNew() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    cantidad: "",
    precio: "",
    imagenPrincipal: "",
    otrasImagenes: [],
  });

  //Función de Hook para reemplazar navegación tras acción
  //anteriormente usada en clases con react-router V4 con this.props.history.push("/ruta")
  let navegar = useNavigate();
  //capturo evento  con la función handleChange la cual pasará a ser
  // un props de ItemForm, para que a su vez se captura ahí lo que requiero

  // Aquí no capturo el evento directo como en el caso de ItemForm
  // sino que almaceno en el objeto form primero lo que se captura ahi
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //Creando función para capturar el submit
  const handleSubmit = async (e) => {
    e.preventDefault(); //Aplico la detención del evento para que no recargue la página
    setLoading(true);
    setError(null);

    try {
      await api.productos.create(form); //Usando el método create() de la API envío los datos almacenados en el formulario (POST)
      setLoading(false);

      //aqui recordar que las paginas se las estamos dando a las rutas de ReactRouter y la ruta pasa 3 props: match, history, location
      navegar("/gestion-prod");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <React.Fragment>
      <h1>Creando un Nuevo Producto</h1>
      <div className="edit_item--container">
        <ItemTemplate
          nameItem={form.nombre || "Nombre"}
          detailItem={form.descripcion || "Detalle del Item"}
          category={form.categoria || "Categoría"}
          cant={form.cantidad || "Cantidad"}
          price={form.precio || "Precio de Venta"}
          mainImage={form.imagenPrincipal || "Imagen del Producto"}
          alterImage={form.otrasImagenes || "Imagenes Alternas"}
        />
        <ItemForm
          onChange={handleChange}
          onSubmit={handleSubmit} //manejo el submit para enviar la petición a BD (POST)
          formValues={form}
          error={error} //Aqui mostrare error solo en el formulario y no en toda la página
        />
      </div>
    </React.Fragment>
  );
}

export default ItemNew;
