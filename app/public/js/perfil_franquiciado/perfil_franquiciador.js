var http = new XMLHttpRequest();
console.log(localStorage.getItem('username'));
var username = localStorage.getItem('username');
var gerente = "";
document.getElementById("username").innerHTML = username;
var params = 'username=' + username;
http.responseType = 'json';
http.open('GET', '/api/franquiciador/list' + '?' + params, true);
http.setRequestHeader("Content-type", "application/json");
http.send(null);
http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        var texto2 = http.response.info_franquiciador;
        gerente = texto2.gerente;
        var email = texto2.email;
        console.log(gerente);
        console.log(email);
        document.getElementById("nombreFranquiciador").innerHTML = gerente;
    }
}
