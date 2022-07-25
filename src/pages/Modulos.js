import React, { useState } from "react";
import ModuleOptions from "../components/ModuleOptions";
import "../styles/modulosGen.css";

function Modulos() {
  const [openOptions, setopenOptions] = useState(false);
  const [modulId, setmodulId] = useState("");

  const moduls = [
    {
      id: "mod01",
      descrip: "Inventarios",
      pantallas: [
        { idPant: "M1-P1", descripPant: "Gestión de Productos" },
        { idPant: "M1-P2", descripPant: "Mantenimiento de Categorías" },
        { idPant: "M1-P3", descripPant: "Gestión de Compras" },
        { idPant: "M1-P4", descripPant: "Gestión de Inventarios" },
      ],
    },
    {
      id: "mod02",
      descrip: "Ventas",
      pantallas: [
        { idPant: "M2-P1", descripPant: "Gestión de Clientes" },
        { idPant: "M2-P2", descripPant: "Gestión de Precios" },
        { idPant: "M2-P3", descripPant: "Emisión de Facturas" },
      ],
    },
    {
      id: "mod03",
      descrip: "Pedidos Online",
      pantallas: [
        { idPant: "M3-P1", descripPant: "Gestión de Carritos de Compras" },
        { idPant: "M3-P2", descripPant: "Control de Pedidos" },
        { idPant: "M3-P3", descripPant: "Control de Despachos" },
      ],
    },
    {
      id: "mod04",
      descrip: "Reportes",
      pantallas: [
        { idPant: "M4-P1", descripPant: "Reporte de Kardex de Inventario" },
        { idPant: "M4-P2", descripPant: "Reporte Analítico de Ventas" },
        { idPant: "M4-P3", descripPant: "Reporte Control de Clientes" },
        { idPant: "M4-P4", descripPant: "Reporte Ventas mensuales" },
        { idPant: "M4-P5", descripPant: "Reporte Productos más Vendidos" },
      ],
    },
  ];

  return (
    <>
      <h1>Lista de Módulos</h1>
      <div className="module-list">
        {moduls.map((modulo) => {
          return (
            <div key={modulo.id} className="module">
              <button
                className="module-button"
                onClick={() => {
                  if (openOptions) {
                    setopenOptions(false);
                    setmodulId(modulo.id);
                    setopenOptions(true);
                  } else {
                    setopenOptions(!openOptions);
                    setmodulId(modulo.id);
                  }
                }}
              >{`Módulo de ${modulo.descrip}`}</button>
              {modulId === modulo.id && (
                <ModuleOptions
                  idModule={modulo.id}
                  descripModule={modulo.descrip}
                  pantallas={modulo.pantallas}
                  openOptions={openOptions}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Modulos;
