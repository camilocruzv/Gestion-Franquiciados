console.log(localStorage.getItem('username'));
var username = localStorage.getItem('username');
document.getElementById("username").innerHTML = username;

var id = localStorage.getItem('id');
document.getElementById("id").innerHTML = id;

var gerente = localStorage.getItem('gerenteFranquiciado');
document.getElementById("gerente").innerHTML = gerente;

var ubicacion = localStorage.getItem('ubicacionFranquiciado');
document.getElementById("ubicacion").innerHTML = ubicacion;

var telefono = localStorage.getItem('telefonoFranquiciado');
document.getElementById("telefono").innerHTML = telefono;

let verInfo = function () {
    window.location.replace('/perfil/franquiciado');
}