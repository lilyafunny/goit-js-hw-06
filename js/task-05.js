const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", userName);

function userName(event) {
  const input = event.currentTarget;
  if (input.value.trim() !== "") {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
}
