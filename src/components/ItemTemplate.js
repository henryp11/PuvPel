import React from "react";

class ItemTemplate extends React.Component {
  render() {
    const {
      nameItem,
      detailItem,
      category,
      cant,
      price,
      mainImage,
      alterImage,
    } = this.props;
    return (
      <>
        {/* <h1>{`Editando datos del item ${nameItem}`} </h1> */}
        <div className="item_detail item_detail--edit">
          {/* Con el condicional or " || " Le doy un valor por defecto para que
          no quede en blanco */}
          <img
            src={
              mainImage ||
              "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=26ae4573-be17-4936-933b-496a28cca220&width=250&height=250&qa=75&ext=.jpg"
            }
            alt="img"
            className="item_main_image"
          />
          <div className="item_information">
            <span>
              <label>Nombre:</label>
              <p>{nameItem || "Nombre"}</p>
            </span>
            <span>
              <label>Detalle:</label>
              <p>{detailItem || "Detalle del Item"}</p>
            </span>
            <span>
              <label>Categoria:</label>
              <p>{category || "Categoría"}</p>
            </span>
            <span>
              <label>Cantidad Inicial:</label>
              <p>{cant || "Cantidad"} Unidades.</p>
            </span>
            <span>
              <label>Precio:</label>
              <p>{price || "Precio de Venta"}$</p>
            </span>
            <span>
              <label>Otras Imagenes:</label>
              <p>{alterImage || "Imagenes Alternas"}</p>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default ItemTemplate;
