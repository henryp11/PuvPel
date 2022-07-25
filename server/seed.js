const fs = require("fs");
const path = require("path");
const faker = require("@faker-js/faker");
// const md5 = require("md5");

function createItem(limit = 50) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const nombre = faker.word.noun();
    const descripcion = faker.word.noun();
    const categoria = faker.word.noun();

    result.push({
      id: faker.datatype.uuid(),
      nombre,
      descripcion,
      categoria,
      cantidad: 0,
      precio: 0,
      imagenPrincipal: faker.image.technics(),
      otrasImagenes: [],
    });
  }

  return result;
}

function main() {
  const data = {
    productos: createItem(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, "db.json"),
    JSON.stringify(data, null, 4)
  );
}

main();
