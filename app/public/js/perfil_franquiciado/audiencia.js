document.getElementById("texto_span").innerHTML = "Porcentaje de audiencia alcanzada";

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
            ['Audiencia alcanzada', 64],
            ['Audiencia no alcanzada', 36],
        ]
    }]
});