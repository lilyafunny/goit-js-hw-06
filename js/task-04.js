const buttonMinEl = document.querySelector('button[data-action="decrement"]');
const buttonMaxEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

const handleClick = () => {
  counterValue--;
  valueEl.textContent = counterValue;
};

const handleClick2 = () => {
  counterValue++;
  valueEl.textContent = counterValue;
};

buttonMinEl.addEventListener("click", handleClick);
buttonMaxEl.addEventListener("click", handleClick2);
