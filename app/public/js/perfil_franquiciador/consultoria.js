console.log(localStorage.getItem('username'));
var username = localStorage.getItem('username');
document.getElementById("username").innerHTML = username;

var id = localStorage.getItem('id');
document.getElementById("id").innerHTML = id;

var fecha = localStorage.getItem('fecha');
document.getElementById("fecha").innerHTML = fecha;

var estado = localStorage.getItem('estado');
document.getElementById("estado").innerHTML = estado;

var comentarios = localStorage.getItem('comentarios');
document.getElementById("comentarios").innerHTML = comentarios;