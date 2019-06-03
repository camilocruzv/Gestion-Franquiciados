var http = new XMLHttpRequest();
console.log(localStorage.getItem('id'));
var username = localStorage.getItem('id');
var gerente = "";
var ciudad = "";
var params = 'username=' + username;
http.responseType = 'json';
http.open('GET', '/api/franquiciado/list' + '?' + params, true);
http.setRequestHeader("Content-type", "application/json");
http.send(null);
http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        var texto2 = http.response.info_franquiciado;
        gerente = texto2.gerente;
        ciudad = texto2.ubicacion;
        rango1 = texto2.tiempo[0].rango1;
        rango2 = texto2.tiempo[0].rango2;
        rango3 = texto2.tiempo[0].rango3;
        rango4 = texto2.tiempo[0].rango4;
        console.log(gerente);
        console.log(rango1);
        console.log(rango2);
        console.log(rango3);
        console.log(rango4);
        document.getElementById("nombre").innerHTML = gerente;
        document.getElementById("identificacion").innerHTML = username;
        document.getElementById("ciudad").innerHTML = ciudad;
    }
}