let texto = "Hola Javascript";

switch (texto) {
  case "Hola":
    console.log("El texto no es Hola");
    break;
  case "Hola Mundo":
    console.log("El texto no es Hola mundo");
    break;

  default:
    console.log("El texto no es otra cosa");
    break;
}

let comando = "alert";

switch (comando) {
  case "alert":
    alert("Esto es una alerta");
    break;
  case "consola":
    console.warn("Esto es un mensaje en consola");
    break;
  default:
    document.write(`Escribio "${comando}" pero ese comando no existe`);
    break;
}
