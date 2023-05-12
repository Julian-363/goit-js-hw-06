// Seleccionar la lista de categorías
const categoriesList = document.querySelector("#categories");

// Contar el número de categorías
const numCategories = categoriesList.children.length;

// Mostrar el número de categorías en la consola
console.log(`Número de categorías: ${numCategories}`);

// Recorrer cada elemento li.item en la lista ul#categories
for (let i = 0; i < categoriesList.children.length; i++) {
  const categoria = categoriesList.children[i];

  // Encontrar y mostrar el título de la categoría y el número de artículos
  const titulo = categoria.querySelector("h2").textContent;
  const numArticulos = categoria.querySelectorAll("li").length;
  console.log(`${titulo}: ${numArticulos}`);
}