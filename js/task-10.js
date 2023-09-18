const inputEl = document.querySelector("input");
const buttonCreatEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");
const boxEl = document.querySelector("#boxes");

inputEl.addEventListener("input", number);
function number(event) {
  return Number(event.currentTarget.value);
}

buttonCreatEl.addEventListener("click", createBoxes);

function createBoxes(amount) {
  for (let i = 0; i <= amount; i++) {
    const divEl = document.createElement("div");
    array.push(divEl);
  }
  boxEl.append(...array);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBoxes(number);
