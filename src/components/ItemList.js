import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/listaRegistros.css";
import "../styles/fichaItem.css";

// Almacenando todos los hooks en un custom hook (Recordar debe comenzar con "use")

function useSearchItem(itemData) {
  //usando hook
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(itemData);

  // Filtro el listado con la función JS filter, la cual recibe una función
  // Para optimizar los resultados de los filtros, con la funicón useMemo de react cuando se busca algo quedará almacenado
  //y al volver a buscar no debe buscar desde cero si no mostrará lo almacenado
  // UseMemo recibe como primer argumento otra función y el segundo es una lista en array, donde se iran almacenando los valores ya buscados.
  React.useMemo(() => {
    const result = itemData.filter((item) => {
      return `${item.nombre} ${item.categoria}`
        .toLowerCase()
        .includes(query.toLowerCase()); //Si encuentra lo que busco mostrará ese resultado, transformo todo a minusculas para que busque en general
    });
    //Esta sección de transformar en estado la busqueda es por si cambia la lista de badges a querys a mostar
    setFilteredItems(result);
  }, [itemData, query]);

  return { query, setQuery, filteredItems };
}

function ItemList(props) {
  const itemData = props.itemData;
  const { query, setQuery, filteredItems } = useSearchItem(itemData); //USANDO CUSTOM HOOK

  return (
    <div className="itemList">
      {/* creando buscador */}
      <div className="search_container">
        <span class="icon-search"></span>
        {/* Cada vez que se escriba algo debo captura el valor del input */}
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Buscar Item por su nombre o categoría"
          className="search_bar"
        />
      </div>
      <div className="button_container">
        <Link to="/gestion-prod/new" className="main-button">
          Crear
        </Link>
        <Link to="/modulos" className="main-button">
          Regresar
        </Link>
      </div>
      <div className="item_list--title">
        <li>Imagen</li>
        <li>Categoría</li>
        <li>Nombre</li>
        <li>Ver Detalles</li>
        <li>Edición Directa</li>
      </div>
      <div className="list_container">
        {filteredItems.map((producto) => {
          return (
            <span key={producto.id} className="item_list--product">
              <img
                src={producto.imagenPrincipal}
                alt={`IMG de ${producto.id}`}
              />
              <span>{producto.categoria}</span>
              <span>{producto.nombre}</span>
              <Link
                to={`/gestion-prod/${producto.id}`}
                className="item-interaction"
              >
                <span class="icon-eye"></span>
              </Link>
              <Link
                to={`/gestion-prod/${producto.id}/edit`}
                className="item-interaction"
              >
                <span class="icon-pencil"></span>
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
