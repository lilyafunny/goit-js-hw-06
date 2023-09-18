const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", size);

function size(event) {
  const input = event.currentTarget.value;
  textEl.style.fontSize = `${input}px`;
}
