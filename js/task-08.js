const form = document.querySelector("form.login-form");
console.log(form);

form.addEventListener("submit", login);

function login(event) {
  event.preventDefault();
  const inform = event.currentTarget;
  const emailEL = inform.elements.email.value;
  const passwordEl = inform.elements.password.value;

  if (emailEL === "" || passwordEl === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(`Email: ${emailEL}, Password: ${passwordEl}`);
  form.reset();
}
