document.getElementById("texto_span").innerHTML = "Porcentaje posicionamiento de marcas en el mercado";

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
            ['Farmatodo', 10],
            ['Plenia Locatel', 40],
            ['Farmahorro', 15],
            ['Farmacias Saas', 15],
            ['Farmaplus', 20],
        ]
    }]
});