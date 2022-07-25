import React from "react";
import "../styles/forms.css";

class ItemForm extends React.Component {
  handleClick = (e) => {
    console.log("Se clickeo");
  };

  render() {
    return (
      <div className="form">
        <h2>Ingrese los datos en los campos Solicitados</h2>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <label htmlFor="">Nombre de Item: </label>
            <input
              type="text"
              name="nombre"
              onChange={this.props.onChange}
              value={this.props.formValues.nombre}
            />
          </div>
          <div>
            <label htmlFor="">Descripcion detallada: </label>
            <input
              type="textarea"
              rows="2"
              cols="3"
              name="descripcion"
              onChange={this.props.onChange}
              value={this.props.formValues.descripcion}
            />
          </div>
          <div>
            <label htmlFor="">Categoria: </label>
            {/* <input
              type="text"
              name="categoria"
              onChange={this.props.onChange}
              value={this.props.formValues.categoria}
            /> */}
            <select name="categoria" id="" onChange={this.props.onChange}>
              <option value="Equipos Computación">Equipos Computación</option>
              <option value="Juguetes">Juguetes</option>
              <option value="Electrodomésticos">Electrodomésticos</option>
              <option value="Ropa">Ropa</option>
              <option value="Accesorios">Accesorios</option>
              <option value="Celulares">Celulares</option>
              <option value="Otros">Otros</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Cantidad Inicial: </label>
            <input
              type="number"
              name="cantidad"
              onChange={this.props.onChange}
              value={this.props.formValues.cantidad}
            />
          </div>
          <div>
            <label htmlFor="">Precio de Venta:</label>
            <input
              type="number"
              name="precio"
              onChange={this.props.onChange}
              value={this.props.formValues.precio}
            />
          </div>
          <div>
            <label htmlFor="">Imagen Principal:</label>
            <input
              type="url"
              name="imagenPrincipal"
              onChange={this.props.onChange}
              value={this.props.formValues.imagenPrincipal}
            />
          </div>
          <div>
            <label htmlFor="">Imagen Secundarias:</label>
            <input
              type="text"
              name="otrasImagenes"
              onChange={this.props.onChange}
              value={this.props.formValues.otrasImagenes}
            />
          </div>
          <button
            onClick={this.handleClick}
            className="item-interaction item-interaction--button"
          >
            <span class="icon-floppy-disk"></span>
          </button>
          {this.props.error && <p>{this.props.error.message}</p>}
        </form>
      </div>
    );
  }
}

export default ItemForm;
