let tarjeta = document.getElementById("tarjeta");

ropa.map(function (ropa, i) {
  let elemento = document.createElement("div");
  elemento.className += "col-md-6";
  let card = `  
   
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${ropa.producto}</h5>
            <p class="card-text"><strong>Detalle: </strong>${ropa.detalle}</p>
            <p class="card-text"><strong>Importe: </strong>$${ropa.precio}</p>
            <button class="btn btn-warning float-right" onclick="mostrarDato(${i})">Agregar</button>
          </div>
        </div>
     
      `;

  elemento.innerHTML = card;
  tarjeta.appendChild(elemento);
});

const mostrarDato = function (index) {
  console.log(ropa[index].producto);
};
