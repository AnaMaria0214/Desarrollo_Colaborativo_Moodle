(() => {
  const access = localStorage.getItem("authorized");
  const path = window.location.pathname;
  const pathAct = path.substring(path.lastIndexOf("/") + 1);
  const privateList = ["landingPage.html", "gallery.html"];
  if (privateList.includes(pathAct) && !access) {
    alert("Acceso denegado");
    window.location.href = "index.html";
  }
})();
