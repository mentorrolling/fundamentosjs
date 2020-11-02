// let frutas = ["Banana", "Manzana", "Pera"];
let ropa = [
  {
    id: 1,
    producto: "Camisa",
    precio: 2500,
    detalle: "Camisa a cuadros con estampa de colores",
  },
  {
    id: 2,
    producto: "Pantalon",
    precio: 5600,
    detalle: "Pantalon azul jean master class",
  },
  {
    id: 3,
    producto: "Corbata",
    precio: 565,
    detalle: "Corbata italiana color roja",
  },
];

let tarjeta = document.getElementById("tarjeta");

ropa.map(function (item) {
  let elemento = document.createElement("div");
  elemento.className = "col-md-4";

  let card = `<div class="card mb-3">
  <div class="card-body">
  <h5 class="card-title">${item.producto}</h5>
  <p class="card-text"><strong>Detalle: </strong>${item.detalle}</p>
  <p class="card-text"><strong>Importe: </strong>$${item.precio}</p>
  <a id="btnAdd" class="btn btn-warning float-right">Agregar</a>
  </div>
  </div>`;

  elemento.innerHTML = card;
  tarjeta.appendChild(elemento);
});

// document.body.appendChild(tarjeta);
