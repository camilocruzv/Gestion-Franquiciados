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
                localStorage.setItem("id", id);
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
    if (ubicacion == "") {
        alertify.set('notifier', 'position', 'bottom-center')
        alertify.notify('No se han completado el campo "Ubicación de la franquicia"', 'error', 3);
    } else {
        var http2 = new XMLHttpRequest();
        var gerente = "";
        var telefono = "";
        var params = 'ubicacion=' + ubicacion;
        http2.responseType = 'json';
        http2.open('GET', '/api/franquiciado/list2' + '?' + params, true);
        http2.setRequestHeader("Content-type", "application/json");
        http2.send(null);
        http2.onreadystatechange = function () {
            if (http2.readyState == 4 && http2.status == 200) {
                var texto2 = http2.response.info_franquiciado2;
                console.log(texto2);
                username = texto2.username;
                gerente = texto2.gerente;
                telefono = texto2.telefono;
                console.log(gerente);
                console.log(telefono);
                localStorage.setItem("id", username);
                localStorage.setItem("gerenteFranquiciado", gerente);
                localStorage.setItem("telefonoFranquiciado", telefono);
                localStorage.setItem("ubicacionFranquiciado", ubicacion);
                window.location.replace('/perfil/franquiciador/franquicia_encontrada');
            }
        }
        setTimeout(function () {
            if (http2.response.status == 'failed') {
                alertify.set('notifier', 'position', 'bottom-center')
                alertify.notify('No se ha encontrando la franquicia', 'error', 3);
            }
        }, 2000)
    }
}