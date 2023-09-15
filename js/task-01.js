const categoriesEl = document.querySelectorAll("#categories li.item");
const h2El = document.querySelectorAll("h2");
const ulEl = document.querySelector("li.item ul");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(function (categorie) {
  console.log(`Category: ${categorie.firstElementChild.textContent}
Elements: ${categorie.lastElementChild.childElementCount}`);
});
