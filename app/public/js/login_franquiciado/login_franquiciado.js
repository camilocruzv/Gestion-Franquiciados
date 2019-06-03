function ingresar() {
    var username = document.getElementById("first-name").value;
    console.log(username);
    localStorage.setItem("id", username);
}