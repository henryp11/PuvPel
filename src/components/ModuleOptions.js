import React from "react";
import { Link } from "react-router-dom";

class ModuleOptions extends React.Component {
  render() {
    if (this.props.openOptions === false) return null;

    if (this.props.openOptions) {
      return (
        <>
          <div className="module-options">
            {this.props.pantallas.map((pantalla) => {
              return (
                <Link
                  to={"/gestion-prod"}
                  key={pantalla.idPant}
                  className="link_pantallas"
                >
                  {pantalla.descripPant}
                </Link>
              );
            })}
          </div>
        </>
      );
    }
  }
}

export default ModuleOptions;
