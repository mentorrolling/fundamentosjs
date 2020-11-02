const data = [
  { id: 1, nombre: "Spiderman", poder: "Arácnido" },
  { id: 2, nombre: "Superman", poder: "super fuerza" },
  { id: 3, nombre: "Batman", poder: "Lógica y artes marciales" },
  { id: 4, nombre: "Iron-Man", poder: "Tecnológico y mucho dinero" },
  { id: 5, nombre: "Literna Verde", poder: "Anillo de poder" },
  { id: 6, nombre: "Wonder Woman", poder: "Fuerza amazonica" },
  { id: 7, nombre: "Pantera Negra", poder: "Poder de Wakanda" },
];

const getHeroe = (id) => {
  return data.find(function (item) {
    return item.id === id;
  });
};

// son asincronas
// Se ejecuta primero lo sincrono y la promesa se ejecuta en una pila de procesos.

const findHeroe = (id) => {
  // Reciben un callback con dos argumentos resolve y reject.
  // Cuando la promesa es exitosa se ejecuta el resolve.
  // Cuando no se pudo hacer se ejecuta un reject.
  return (promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      let heroe = getHeroe(id);
      if (heroe === undefined) {
        return reject("id no existe");
      }
      resolve(heroe);
    }, 2000);
  }));
};

// Cuando la promesa termine
// then => la promesa se hizo efectivamente
// catch => cuando la promesa da un error
findHeroe(4)
  .then((heroe) => {
    console.log("Heroe: ", heroe);
  })
  .catch((err) => console.warn(err));

// promesa.then((heroe) => {
//   console.log("Heroe: ", heroe);
// });
