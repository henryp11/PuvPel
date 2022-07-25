import React from "react";
import axios from "axios"; //Dependendia para hacer peticiones a una API
import Cookies from "universal-cookie";
import md5 from "md5";
import "../styles/forms.css";

const cookies = new Cookies();
const baseUrl = "http://localhost:3001/usuarios";

class Login extends React.Component {
  state = {
    form: {
      username: "",
      password: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  //Verifico si el usuario esta logueado para que redirija al menú y vicesersa
  componentDidMount() {
    //Indico si existe la cookie username (puede ser cualquiera de referencia), redirija al menu
    if (cookies.get("usrId")) {
      window.location.href = `./home`;
    }
  }

  //Metodo para realizar petición http e iniciar sesión
  iniciarSesion = async () => {
    //Uso el método get de axios en donde paso la URL y luego los parámetros como objeto
    await axios
      .get(baseUrl, {
        params: {
          username: this.state.form.username,
          password: md5(this.state.form.password),
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuestaOk = response[0];
          cookies.set("usrId", respuestaOk.id, { path: "/" });
          cookies.set("usrName", respuestaOk.username, { path: "/" });
          window.location.href = "./home"; //aqui redirijo a una ruta una vez que inicio de sesión sea correcto
        } else {
          alert("Usuario o contraseña incorrecto");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <section className="mainForm">
          <form onSubmit={this.handleSubmit} className="loginForm">
            <h1 className="formTittle">Acceso</h1>
            <div className="formUserName">
              <label htmlFor="">Usuario:</label>
              <input
                className="inputUser"
                type="text"
                name="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="formUserPass">
              <label htmlFor="">Contraseña:</label>
              <input
                className="inputUser"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <button
              className="main-button"
              onClick={() => {
                this.iniciarSesion();
              }}
            >
              Ingresar
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default Login;
