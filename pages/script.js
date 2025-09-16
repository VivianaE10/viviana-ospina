//objeto con las  propiedades y clave(url)

const cards = {
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
