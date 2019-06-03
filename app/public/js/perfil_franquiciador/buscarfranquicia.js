console.log(localStorage.getItem('username'));
var username = localStorage.getItem('username');
document.getElementById("username").innerHTML = username;

let buscarPorId = function () {
    var id = document.getElementById("id").value;
    console.log(id);
    if (id == "") {
        alertify.set('notifier', 'position', 'bottom-center')
        alertify.notify('No se han completado el campo "Identificación de la franquicia"', 'error', 3);
    } else {
        var http = new XMLHttpRequest();
        var gerente = "";
        var telefono = "";
        var ubicacion = "";
        var params = 'username=' + id;
        http.responseType = 'json';
        http.open('GET', '/api/franquiciado/list' + '?' + params, true);
        http.setRequestHeader("Content-type", "application/json");
        http.send(null);
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                var texto2 = http.response.info_franquiciado;
                gerente = texto2.gerente;
                telefono = texto2.telefono;
                ubicacion = texto2.ubicacion;
                console.log(gerente);
                console.log(telefono);
                console.log(ubicacion);
                localStorage.setItem("gerenteFranquiciado", gerente);
                localStorage.setItem("telefonoFranquiciado", telefono);
                localStorage.setItem("ubicacionFranquiciado", ubicacion);
                window.location.replace('/perfil/franquiciador/franquicia_encontrada');
            }
        }
        setTimeout(function () {
            if (http.response.status == 'failed') {
                alertify.set('notifier', 'position', 'bottom-center')
                alertify.notify('No se ha encontrando la franquicia', 'error', 3);
            }
        }, 2000)
    }
}

let buscarPorUbi = function () {
    var ubicacion = document.getElementById("ubicacion").value;
    console.log(ubicacion);
}