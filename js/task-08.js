const form = document.querySelector("form.login-form");

form.addEventListener("submit", login);

function login(event) {
  event.preventDefault();
  const inform = event.currentTarget;
  const emailEL = inform.elements.email.value;
  const passwordEl = inform.elements.password.value;

  if (emailEL === "" || passwordEl === "") {
    return alert("Please fill in all the fields!");
  }

  let user = {
    password: passwordEl,
    email: emailEL,
  };

  console.log(user);
  form.reset();
}
