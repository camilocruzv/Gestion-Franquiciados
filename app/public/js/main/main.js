let ingresar = function () {
    var username = document.getElementById("first-name").value;
    var password = document.getElementById("password").value;;
    if (username != "" && password != "") {
        window.location.replace('/perfil/franquiciado');
    } else {
        window.location.replace('/perfil/franquiciado');
    }
}