function recarga()
{
    var options = {
        chart: {
            renderTo: 'container',
            type: 'column',
            margin: [ 50, 50, 120, 80]
        },
        title: {
            text: 'Población en Bolivia'
        },
        xAxis: [],
        yAxis: {
            min: 0,
            title: {
                text: 'Número de habitantes'
            }
        },
        legend: {
            layout: 'vertical',
            backgroundColor: '#FFFFFF',
            align: 'left',
            verticalAlign: 'top',
            x: 80,
            y: 40,
            floating: true,
            shadow: true
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.x +'</b><br/>' + this.series.name + ': ' + this.y + ' habitantes';
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: []
    }
    var url = 'ajax_json.php?caso=grafico1';
    var xAxis = {
        categories: [],
        labels: {
            rotation: -45,
            align: 'right',
            style: {
                fontSize: '12px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    };
    var seriesTotal = {
        data: []
    };
    seriesTotal.name = 'Total';
    var seriesMasculino = {
        data: []
    };
    seriesMasculino.name = 'Masculino';
    var seriesFemenino = {
        data: []
    };
    seriesFemenino.name = 'Femenino';
    jQuery.getJSON(url, function(data) {
        jQuery.each(data, function(key1,val1) {
            xAxis.categories.push(key1);
            jQuery.each(val1, function(key2,val2) {
                if(key2 == 0){
                    seriesTotal.data.push(val2);
                }
                else if(key2 == 1){
                    seriesMasculino.data.push(val2);
                }
                else if(key2 == 2){
                    seriesFemenino.data.push(val2);
                }
            });
        });
        options.xAxis.push(xAxis);
        options.series.push(seriesTotal);
        options.series.push(seriesMasculino);
        options.series.push(seriesFemenino);
        var chart = new Highcharts.Chart(options);
    });
    return false;
}