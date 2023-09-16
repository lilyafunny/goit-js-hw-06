const inputEl = document.querySelector("#validation-input");

console.log(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", validation);

function validation(event) {
  const input = event.currentTarget;

  if (
    input.value.trim().length ===
    Number.parseInt(inputEl.getAttribute("data-length"))
  ) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
