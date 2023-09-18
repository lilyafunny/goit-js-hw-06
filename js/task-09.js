const body = document.body;
const buttonEl = document.querySelector("button.change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(event) {
  body.style.background = getRandomHexColor();
  spanEl.textContent = body.style.background;
}
