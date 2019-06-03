var http = new XMLHttpRequest();
console.log(localStorage.getItem('id'));
var username = localStorage.getItem('id');
var internet = 0;
var fachada = 0;
var otro = 0;
var params = 'username=' + username;
http.responseType = 'json';
http.open('GET', '/api/franquiciado/list' + '?' + params, true);
http.setRequestHeader("Content-type", "application/json");
http.send(null);
http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        var texto2 = http.response.info_franquiciado;
        gerente = texto2.gerente;
        internet = texto2.anuncio[0].internet;
        fachada = texto2.anuncio[0].fachada;
        otro = texto2.anuncio[0].otro;
        console.log(gerente);
        console.log(internet);
        console.log(fachada);
        console.log(otro);
        //document.getElementById("nombreFranquiciador").innerHTML = gerente;
    }
}

setTimeout(function () {
    document.getElementById("texto_span").innerHTML = "¿Cómo se enteraron los clientes de la marca? ";

    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Porcentaje: <b>{point.y:.0f}%</b>'
        },
        series: [{
            name: 'Porcentaje',
            data: [
                ['Internet', parseInt(internet)],
                ['Fachada', parseInt(fachada)],
                ['Radio o televisión', parseInt(otro)],
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.0f}', // one decimal
                y: 17, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}, 1000)