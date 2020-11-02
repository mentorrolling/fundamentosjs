// const saludar = function () {
//   return "Hola mundo";
// };

// function saludar() {
//      return "Hola mundo";
// }

const saludar = () => "Hola mundo";

let mensaje = saludar();

const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar2("Fabrizio"));

const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

const user = getUser();
