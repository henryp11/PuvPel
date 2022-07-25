const BASE_URL = "http://localhost:3001";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  productos: {
    list() {
      // return []; //Simulo cuando está vacio todo
      // throw new Error("Error simulado!"); //Para simular error
      return callApi("/productos");
    },
    create(item) {
      // throw new Error("500: server error!"); //Simulando error
      return callApi(`/productos`, {
        method: "POST",
        body: JSON.stringify(item),
      });
    },
    read(itemId) {
      return callApi(`/productos/${itemId}`);
    },
    update(itemId, updates) {
      return callApi(`/productos/${itemId}`, {
        method: "PUT",
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(itemId) {
      return callApi(`/productos/${itemId}`, {
        method: "DELETE",
      });
    },
  },
};

export default api;
