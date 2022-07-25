import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import ItemDelete from "../components/ItemDelete";

function ItemDetails() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  let params = useParams();
  let navegar = useNavigate();
  // Reemplazando con useEffect el metodo componentDidMount()
  // que solo funciona al usar clases, este hook reemplaza a los metodos del ciclo de vida con clases
  useEffect(() => {
    if (data === undefined) fetchData();
  });

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    console.log(params.itemId);
    try {
      const data = await api.productos.read(params.itemId);
      console.log(data);
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleOpenModal = (e) => {
    setModalOpen(true);
  };
  const handleCloseModal = (e) => {
    setModalOpen(false);
  };

  const handleDeleteItem = async (e) => {
    setLoading(true);
    setError(null);
    try {
      await api.productos.remove(params.itemId);
      setLoading(false);
      navegar("/gestion-prod");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return "erroor-DEtails";
  }

  return (
    <>
      <h1>Detalle del Producto: {data.nombre}</h1>
      <div key={data.id} className="item_detail">
        <img
          src={data.imagenPrincipal}
          alt={`IMG de ${data.id}`}
          className="item_main_image"
        />
        <div className="item_information">
          <span>
            <strong>Categoria:</strong> {data.categoria}
          </span>
          <span>
            <strong>Nombre:</strong> {data.nombre}.
          </span>
          <span>
            <strong>Detalle:</strong> {data.descripcion}.
          </span>
          <span>
            <strong>Precio:</strong> {data.precio}$
          </span>
          <span>
            <strong>Cantidad:</strong> {data.cantidad} unidades.
          </span>
        </div>
        <div className="item_actions">
          <Link
            to={`/gestion-prod/${data.id}/edit`}
            className="item-interaction"
          >
            <span class="icon-pencil"></span>
          </Link>
          <button
            onClick={handleOpenModal}
            className="item-interaction item-interaction--button"
          >
            <span class="icon-bin"></span>
          </button>
          <Link to={`/gestion-prod`} className="item-interaction">
            <span class="icon-undo2"></span>
          </Link>
          <ItemDelete
            isOpen={modalOpen}
            onCloseModal={handleCloseModal}
            onDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </>
  );
}

export default ItemDetails;
