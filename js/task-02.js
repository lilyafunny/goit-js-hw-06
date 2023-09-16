const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

function add(arr) {
  const markup = arr.map((text) => {
    const liEl = document.createElement("li");
    liEl.textContent = text;
    liEl.classList.add("item");

    ulEl.append(liEl);
  });
}

add(ingredients);
