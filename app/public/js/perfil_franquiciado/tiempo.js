var http = new XMLHttpRequest();
console.log(localStorage.getItem('id'));
var username = localStorage.getItem('id');
var rango1 = 0;
var rango2 = 0;
var rango3 = 0;
var rango4 = 0;
var params = 'username=' + username;
http.responseType = 'json';
http.open('GET', '/api/franquiciado/list' + '?' + params, true);
http.setRequestHeader("Content-type", "application/json");
http.send(null);
http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        var texto2 = http.response.info_franquiciado;
        gerente = texto2.gerente;
        rango1 = texto2.tiempo[0].rango1;
        rango2 = texto2.tiempo[0].rango2;
        rango3 = texto2.tiempo[0].rango3;
        rango4 = texto2.tiempo[0].rango4;
        console.log(gerente);
        console.log(rango1);
        console.log(rango2);
        console.log(rango3);
        console.log(rango4);
        //document.getElementById("nombreFranquiciador").innerHTML = gerente;
    }
}

setTimeout(function () {
    document.getElementById("texto_span").innerHTML = "Porcentaje tiempos de anuncios que ven los clientes";

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
                ['Menos de 30 minutos', 27],
                ['Entre 30 minutos y 2 horas', 53],
                ['Entre 2 y 5 horas', 14],
                ['Más de 5 horas', 6],
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