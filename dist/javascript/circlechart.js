 var chart;
        $(document).ready(function () {
        //饼状图初始化
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container3',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: '<b style="color:red;font-weight:bold">'+'服务收益'+'</b>'
            },
            tooltip: {
                formatter: function () {
                    return '<b style="font-size:15px">' + this.point.name + '</b>: ' + this.percentage.toFixed(2) + ' %';
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function () {
                            return '<b style="font-size:15px;font-weight:normal">'+this.point.name + '</b>'+'<b style="color:red;font-size:15px">'+this.point.y+'元'+'</b>';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'pie',
                data: [
				['基础服务', 58],
				['服务奖励', 40],
				{
				    name: '商品推荐',
				    y: 60,
				    sliced: true,
				    selected: true
				},
				['衍生服务',10],
				['其他服务',30]
			]
            }]
        });
    });