// document.body.innerHTML='Ejemplo' imprime en body la palabra Ejemplo.

// ---Traer datos capturando el elemento----
document.getElementById("id"); //traigo la etiqueta con el id
document.getElementsByClassName("classname"); //traigo la clase
document.getElementsByTagName("tag"); //traigo el elemento por su y tag ('p')
document.querySelector("#id");
document.querySelector(".clase");
document.querySelectorAll("p");

// ---crear elemento-------
let myp = document.createElement("p"); //creo el elemento p
myp.innerHTML = "yet another"; //le asigno el valor
document.body.appendChild(myp); //lo agrego como nodo hijo de body

// ----clonar nodo--------------
let el = document.getElementsByTagName("p")[1]; //asigno a el el elemento p de la posicion 1 en el documento.
document.body.appendChild(el.cloneNode(false)); //clono el elemento sin los datos
document.body.appendChild(el.cloneNode(true)); //clono el elemento con los datos.

document.body
  .insertBefore
  //elemento ,
  //elemento que pondre antes
  ();

document.body.removeChild("elemento a remover");
document.body.replaceChild("nuevo nodo", "nodo a reemplazar");

let coordX = document.getElementById("coordX");
document.addEventListener("mousemove", function (event) {
  coordX.innerText = event.x;
});

function cambiarColor() {
  document.body.bgColor = "lightgreen";
}
