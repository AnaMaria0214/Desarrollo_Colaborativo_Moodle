const formLogin = document.querySelector("#formLogin");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  verification();
});

function verification() {
  if (userEmail.value == "prueba@prueba" && userPassword.value == "prueba") {
    localStorage.setItem("authorized", true);
    window.location.href = "landingPage.html";
  } else {
    alert("Contraseña incorrecta");
  }
}
