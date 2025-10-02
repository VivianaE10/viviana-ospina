//objeto con las  propiedades y clave(url)

const cards = {
  cardDonaciones: "https://paginadonaciones.vercel.app/index.html",
  cardRick: "https://interfaz-rick-and-morty.vercel.app/",
  cardNetflix: "https://interfaz-de-netflix.vercel.app/",
};

// Recorremos el objeto y asignamos eventos dinámicamente
Object.entries(cards).forEach(([id, url]) => {
  const card = document.getElementById(id);

  if (card) {
    card.addEventListener("click", () => {
      window.open(url, "_blank");
    });
  }
});

const btn = document.getElementById("btn-container");

btn.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/vivianaoescobar/", "_blank");
});

//Object.entries(cards)transforma el objeto en un array de pares [clave, valor].
//.forEach recorre arreglo por id, url
//busca en el html el id
//if si encuntra el elemento en el html con el id reddirecciona a la pagina si no lo encuntra no pasa nada
//le agrega el evento clic
//abree una nueva pestaña con la url
