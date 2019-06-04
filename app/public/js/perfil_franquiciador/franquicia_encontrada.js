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

let verConsultorias = function () {
    var id = localStorage.getItem('id');
    console.log(id);
    var http = new XMLHttpRequest();
    var fecha = "";
    var estado = "";
    var comentarios = "";
    var params = 'id_franquicia=' + id;
    http.responseType = 'json';
    http.open('GET', '/api/consultoria/list' + '?' + params, true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(null);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            var texto2 = http.response.info_consultoria;
            fecha = texto2.fecha;
            estado = texto2.estado;
            comentarios = texto2.comentarios;
            console.log(fecha);
            console.log(estado);
            console.log(comentarios);
            localStorage.setItem("id", id);
            localStorage.setItem("fecha", fecha);
            localStorage.setItem("estado", estado);
            localStorage.setItem("comentarios", comentarios);
            window.location.replace('/perfil/franquiciado/consultoria_encontrada');
        }
    }
    setTimeout(function () {
        if (http.response.status == 'failed') {
            alertify.set('notifier', 'position', 'bottom-center')
            alertify.notify('No se encontraron consultorías', 'error', 3);
        }
    }, 2000)
}