import "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //Usando BrowserRouter
import Home from "../pages/Home";
import Login from "../pages/Login";
import Modulos from "../pages/Modulos";
import Layout from "./Layout";
import MantProductos from "../pages/MantProductos";
import ItemNew from "../pages/ItemNew";
import ItemDetails from "../pages/ItemDetails";
import ItemEdit from "../pages/ItemEdit";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/modulos" element={<Modulos />} />
          <Route exact path="/gestion-prod" element={<MantProductos />} />
          <Route exact path="/gestion-prod/new" element={<ItemNew />} />
          <Route exact path="/gestion-prod/:itemId" element={<ItemDetails />} />
          <Route
            exact
            path="/gestion-prod/:itemId/edit"
            element={<ItemEdit />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
