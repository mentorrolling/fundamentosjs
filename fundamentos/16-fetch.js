//https://developers.giphy.com/docs/api/endpoint#random

const api_key = "yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
);

peticion
  .then((resp) => resp.json()) //promesa encadenada
  .then(({ data }) => {
    // console.log(data.images.original.url);

    const { url } = data.images.original;

    const imagen = document.createElement("img");
    imagen.src = url;

    document.body.append(imagen);
  })
  .catch((err) => console.warn(err));
