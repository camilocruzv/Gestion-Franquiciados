var http = new XMLHttpRequest();
console.log(localStorage.getItem('id'));
var username = localStorage.getItem('id');
var joven = 0;
var adulto = 0;
var adultoMayor = 0;
var anciano = 0;
var params = 'username=' + username;
http.responseType = 'json';
http.open('GET', '/api/franquiciado/list' + '?' + params, true);
http.setRequestHeader("Content-type", "application/json");
http.send(null);
http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        var texto2 = http.response.info_franquiciado;
        gerente = texto2.gerente;
        joven = texto2.porcentajeEdad[0].joven;
        adulto = texto2.porcentajeEdad[0].adulto;
        adultoMayor = texto2.porcentajeEdad[0].adultoMayor;
        anciano = texto2.porcentajeEdad[0].anciano;
        console.log(gerente);
        console.log(joven);
        console.log(adulto);
        console.log(adultoMayor);
        console.log(anciano);
        //document.getElementById("nombreFranquiciador").innerHTML = gerente;
    }
}

setTimeout(function () {
    document.getElementById("texto_span").innerHTML = "Porcentaje de edades de los clientes";

    Highcharts.chart('container', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: ''
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        tooltip: {
            pointFormat: 'Porcentaje: <b>{point.y:.0f}%</b>'
        },
        series: [{
            name: 'Porcentaje',
            data: [
                ['18 - 24 años', parseInt(joven)],
                ['25 - 54 años', parseInt(adulto)],
                ['55 - 64 años', parseInt(adultoMayor)],
                ['65 o más años', parseInt(anciano)],
            ]
        }]
    });
}, 1000)