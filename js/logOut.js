const btnLogOut = document.querySelector("#logOut")

btnLogOut.addEventListener("click", () => {
    localStorage.removeItem("authorized")
    window.location.href = "index.html"
})