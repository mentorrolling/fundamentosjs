import { Usuarios, Persona } from "./modulos/clases.js";
import { saludar } from "./modulos/funciones.js";

let pablo = new Usuarios("Pablo", "pmarino@gmail.com", "12345678");
console.log(pablo);

let daniel = new Persona("Daniel", "Montero", 25, 26350147);
console.log(daniel);

saludar(daniel.nombre);
