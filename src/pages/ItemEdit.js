import React, { useState, useEffect } from "react";
import api from "../api";
// import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import ItemTemplate from "../components/ItemTemplate";

function ItemEdit() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [form, setForm] = useState({
  //   nombre: "",
  //   descripcion: "",
  //   categoria: "",
  //   cantidad: "",
  //   precio: "",
  //   imagenPrincipal: "",
  //   otrasImagenes: [],
  // });
  const [form, setForm] = useState(undefined);

  let params = useParams();
  let navegar = useNavigate();

  useEffect(() => {
    console.log(form);
    if (form === undefined) fetchData();
  });

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.productos.read(params.itemId);
      console.log(data);
      setLoading(false);
      setForm(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //Aplico la detención del evento para que no recargue la página
    setLoading(true);
    setError(null);

    try {
      await api.productos.update(params.itemId, form); //Usando el método create() de la API envío los datos almacenados en el formulario (POST)
      setLoading(false);

      //aqui recordar que las paginas se las estamos dando a las rutas de ReactRouter y la ruta pasa 3 props: match, history, location
      navegar("/gestion-prod");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return "erroor-EDICION";
  }

  return (
    <>
      <h1>{`Editando datos del item: ${form.id}`} </h1>
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
          onSubmit={handleSubmit}
          formValues={form}
          error={error}
        />
      </div>
    </>
  );
}

export default ItemEdit;
