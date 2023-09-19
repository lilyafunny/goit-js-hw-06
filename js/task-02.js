const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
let arr2 = [];
function add(arr) {
  const markup = arr.map((text) => {
    const liEl = document.createElement("li");
    liEl.textContent = text;
    liEl.classList.add("item");
    arr2.push(liEl);
    return arr2;
  });

  ulEl.append(...arr2);
}

add(ingredients);
