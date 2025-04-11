Highcharts.chart('container', {

    title: {
        text: 'U.S Solar Employment Growth',
        align: 'left'
    },

    subtitle: {
        text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '平均溫度'
        }
    },

    xAxis: {
      title: {
            text: '月份'
      },
        accessibility: {
            rangeDescription: 'Range: 1 to 12'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },

    series: [{
        name: '臺北',
        data: [
            16.4,16.9,18.8,22.3,25.6,28.2,29.9,29.5,27.7,24.6,21.9,18.2
        ]
    }, {
        name: '臺中',
        data: [
            17.0,17.7,20.1,23.5,26.4,28.1,28.9,28.4,27.8,25.5,22.6,18.7
        ]
    }, {
        name: '新竹',
        data: [
            15.7,16.0,18.0,21.9,25.2,27.9,29.3,28.9,27.3,24.4,21.5,17.7
        ]
    }], 
        
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
