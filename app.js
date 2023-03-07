const loginForm = document.querySelector("#Login-form");
const loginInput = document.querySelector("#Login-form input");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}
loginForm.addEventListener("submit", onLoginSubmit);
