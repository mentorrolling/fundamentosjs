let ropa = ["Camisa", "pantalon", "Medias"];

// let lista = document.createElement("li");

for (let i = 0; i < ropa.length; i++) {
  let lista = document.createElement("li");
  lista.innerHTML = ropa[i];
  document.body.appendChild(lista);
}

//con getElementByTagName('elemento')[posicion]
//puedo acceder a un elemento que no tiene id
let el = document.getElementsByTagName("p")[0];

//Para clonar un nodo sin los nodos hijos y contenido
let el2 = document.body.appendChild(el.cloneNode(false));
//Para clonar un nodo completo
let el3 = document.body.appendChild(el.cloneNode(true));

//para agregar un nodo delante de otro
document.body.insertBefore(
  document.createTextNode("Soy un nodo incrustado"),
  document.body.getElementsByTagName("p")[1]
);

//Remover un nodo
document.body.removeChild(el3);

//Reemplazar un nodo
let myh2 = document.createElement("h2"); //creo el elemento nodo
myh2.innerHTML = "Esto es un reemlazo"; // le doy un valor
document.body.replaceChild(myh2, el); //reemplazo mandando el nuevo nodo
//y luego el que quiero reemplazar
