$(function() {
	$('#container').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月21日血压</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">血压值 (kpa)</b>'
			}
//　　			tickPixelInterval: 1 
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px;">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + 'kpa' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px;">' + this.series.name + ':' +
				Highcharts.numberFormat(this.y, 2) + 'kpa' + '</b>' + '<br/>' +
				'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 1805450,
				pointStart: Date.UTC(2017, 7, 21, 0, 0, 0)
			}
		},
		series: [{
			name: '收缩压',
			data: [12, 11.5, 13, 17.4, 20, 18, 11, 19.8, 13.6, 14, 14.5, 15.9,
				12.1, 9.5, 10, 13.5, 17, 17.8, 14, 10, 11, 12.8, 19, 14.3,
				12.9, 15.8, 14.3, 11.9, 10, 10.4, 10.9, 12.4, 12.1, 15, 15,
				11, 15.8, 11.3, 18, 14, 11, 19, 28, 29, 13, 14, 15.3, 13.0
			]
		}, {
			name: '舒张压',
			data: [8.0, 8.6, 14, 16, 16, 15, 10.5, 14.6, 15, 22, 13, 15,
				14, 14.5, 16.6, 18.8, 16.3, 17.4, 14.9, 16.7, 15.9, 15.1, 17.8, 10.4,
				13.3, 16, 12.5, 10.7, 18.7, 11, 11.4, 10, 10.5, 11, 12.3, 13,
				10, 10.3, 11.8, 20, 18, 5, 9.6, 9, 6.9, 8.6, 11.3, 10.7
			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	$('#containerd').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月血压</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">血压值 (kpa)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px;">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + 'kpa' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + 'kpa' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 30 * 1830050,
				pointStart: Date.UTC(2017, 7, 1)
			}
		},
		series: [{
			name: '收缩压',
			data: [11, 11.5, 13, 17.4, 20, 18, 11, 19.8, 13.6, 14, 14.5, 15.9,
				12.1, 9.5, 10, 13.5, 17, 17.8, 14, 10, 11, 12.8, 19, 14.3,
				12.9, 15.8, 14.3, 11.9, 10, 10.4, 10.9, 12.4, 12.1, 15, 15,
				11, 15.8, 11.3, 18, 14, 11, 19, 28, 29, 13, 14, 15.3, 13.0
			]
		}, {
			name: '舒张压',
			data: [9.0, 8.6, 14, 16, 16, 15, 10.5, 14.6, 15, 22, 13, 15,
				14, 14.5, 16.6, 18.8, 16.3, 17.4, 14.9, 16.7, 15.9, 15.1, 17.8, 10.4,
				13.3, 16, 12.5, 10.7, 18.7, 11, 11.4, 10, 10.5, 11, 12.3, 13,
				10, 10.3, 11.8, 20, 18, 5, 9.6, 9, 6.9, 8.6, 11.3, 10.7
			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	$('#blsug').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月21日血糖</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">血糖值 (mmol/L)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + 'mmol/L' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + 'mmol/L' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 1805450,
				pointStart: Date.UTC(2017, 7, 21, 0, 0, 0)
			}
		},
		series: [{
			name: '空腹',
			data: [3.8, 5.5, 4.3, 5.4, 6.0, 3, 4.1, 2.8, 6.6, 7.4, 4.5, 4.9,
				6.1, 7.5, 5, 8.5, 4.7, 5.8, 3.4, 5, 5.1, 3.8, 4.9, 5.3,
				6.9, 5.8, 4.3, 5.9, 4, 3.4, 4.9, 5.4, 6.1, 6.5, 5.2,
				8.3, 7.8, 3.3, 4.2, 4.4, 4.1, 5.9, 2.8, 3.9, 3.3, 4.4, 5.3, 3.6
			]
		}, {
			name: '餐后',
			data: [9.0, 8.6, 14, 6.6, 7.6, 8.5, 9.5, 8.6, 9.5, 7.2, 7.3, 7.5,
				6.4, 7.5, 6.9, 8.8, 9.3, 7.4, 4.9, 6.7, 10.9, 11.1, 17.8, 9.4,
				13.3, 8.5, 7.5, 7.7, 8.7, 11, 9.4, 10, 9, 8.9, 10.3, 5.9,
				10, 10.3, 11.8, 9.5, 8, 9.5, 7.6, 6.8, 6.9, 8.6, 11.3, 10.7
			]
		}, {
			name: '服糖2小时',
			data: [6.1, 8, 7.8, 6.9, 6.5, 5.9, 9, 4.3, 5.2, 6.2, 4.3, 5,
				6.4, 7.5, 5.6, 7.8, 6.3, 5.4, 6.9, 6.7, 5.9, 3.1, 4.8, 6.4,
				6.3, 6.6, 7.5, 5.7, 7.7, 6.8, 6.4, 7, 7.5, 6.9, 7.3, 6.2,
				7.2, 7.3, 5.8, 6, 4.8, 5, 7.6, 9, 6.9, 8.6, 8.3, 7.7
			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	$('#blsugd').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月血糖</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">血糖值 (mmol/L)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + 'mmol/L' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + 'mmol/L' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 30 * 1804030,
				pointStart: Date.UTC(2017, 7, 1)
			}
		},
		series: [{
			name: '空腹',
			data: [4.8, 3.5, 4.3, 5.4, 6.0, 3, 4.1, 2.8, 6.6, 7.4, 4.5, 4.9,
				6.1, 7.5, 5, 8.5, 4.7, 5.8, 3.4, 5, 5.1, 3.8, 4.9, 5.3,
				6.9, 5.8, 4.3, 5.9, 4, 3.4, 4.9, 5.4, 6.1, 6.5, 5.2,
				8.3, 7.8, 3.3, 4.2, 4.4, 4.1, 5.9, 2.8, 3.9, 3.3, 4.4, 5.3, 3.6
			]
		}, {
			name: '餐后',
			data: [8.0, 7.6, 14, 6.6, 7.6, 8.5, 9.5, 8.6, 9.5, 7.2, 7.3, 7.5,
				6.4, 7.5, 6.9, 8.8, 9.3, 7.4, 4.9, 6.7, 10.9, 11.1, 17.8, 9.4,
				13.3, 8.5, 7.5, 7.7, 8.7, 11, 9.4, 10, 9, 8.9, 10.3, 5.9,
				10, 10.3, 11.8, 9.5, 8, 9.5, 7.6, 6.8, 6.9, 8.6, 11.3, 10.7
			]
		}, {
			name: '服糖2小时',
			data: [5.1, 9, 7.8, 6.9, 6.5, 5.9, 9, 4.3, 5.2, 6.2, 4.3, 5,
				6.4, 7.5, 5.6, 7.8, 6.3, 5.4, 6.9, 6.7, 5.9, 3.1, 4.8, 6.4,
				6.3, 6.6, 7.5, 5.7, 7.7, 6.8, 6.4, 7, 7.5, 6.9, 7.3, 6.2,
				7.2, 7.3, 5.8, 6, 4.8, 5, 7.6, 9, 6.9, 8.6, 8.3, 7.7
			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	$('#bheart').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月22日心率</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">心率值 (次/分)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '次/分' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '次/分' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 1805450,
				pointStart: Date.UTC(2017, 7, 22, 0, 0, 0)
			}
		},
		series: [{
			name: '心率',
			data: [68, 55, 103, 64, 70, 63, 81, 78, 66, 94, 45, 69,
				61, 75, 59, 85, 47, 58, 64, 58, 51, 68, 79, 73,
				69, 68, 63, 59, 64, 74, 69, 84, 91, 85, 62,
				83, 78, 63, 52, 64, 71, 79, 68, 79, 53, 64, 53, 66
			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	$('#bheartd').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
				text: '<span style="font-size:18px">8月心率</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">心率值(次/分)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '次/分' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '次/分' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 30 * 1805010,
				pointStart: Date.UTC(2017, 7, 1)
			}
		},
		series: [{
			name: '最高值',
			data: [88, 85, 103, 104, 90, 93, 81, 98, 96, 84, 105, 99,
				101, 85, 85, 105, 97, 108, 104, 95, 101, 88, 99, 83,
				99, 108, 93, 109, 94, 104, 89
			]
		}, {
			name: '平均值',
			data: [68, 65, 78, 79, 75, 68, 66, 78, 66, 64, 65, 74,
				81, 60, 65, 80, 72, 78, 79, 80, 66, 63, 74, 68,
				79, 78, 68, 74, 74, 74, 69
			]
		}, {
			name: '最低值',
			data: [48, 45, 53, 54, 60, 43, 51, 58, 36, 44, 55, 49,
				61, 35, 45, 55, 47, 48, 54, 65, 31, 38, 49, 53,
				59, 48, 43, 39, 54, 44, 49
			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});

	$('#boxygen').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月22日血氧</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">血氧饱和度(%)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '%' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '%' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 1805450,
				pointStart: Date.UTC(2017, 7, 22, 0, 0, 0)
			}
		},
		series: [{
			name: '血氧',
			data: [90, 95, 92, 84, 97

			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	$('#boxygend').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月血氧</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">血氧饱和度(%)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '%' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '%' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 30 * 1810170,
				pointStart: Date.UTC(2017, 7, 1)
			}
		},
		series: [{
			name: '血氧',
			data: [95, 90, 84, 84, 91, 95, 90, 87, 87, 97, 97, 90, 91, 92,
				95, 96, 92, 93, 90, 98, 94, 95, 96, 90, 90, 91, 93, 98, 97, 90,
				89
			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	$('#btem').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月22日体温</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">体温(℃)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '℃' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '℃' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 1805450,
				pointStart: Date.UTC(2017, 7, 22, 0, 0, 0)
			}
		},
		series: [{
			name: '体温',
			data: [35.9, 36, 37.2, 36.5, 37

			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	$('#btemd').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月体温</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">体温(℃)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '℃' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '℃' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 30 * 1830090,
				pointStart: Date.UTC(2017, 7, 1)
			}
		},
		series: [{
			name: '体温',
			data: [35, 35.5, 36.2, 36.1, 36.4, 36.2, 37, 35.9, 36.2, 36.4, 35.5, 36.7, 37.8, 34,
				34.8, 35.2, 35.6, 35.4, 36.2, 38, 35, 36.5, 36.4, 36.7, 37.8, 35.9, 36.8, 37.2, 37, 36.9,
				36.3
			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	$('#bstep').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月22日计步</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">计步(步)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '步' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '步' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 1805450,
				pointStart: Date.UTC(2017, 7, 22, 0, 0, 0)
			}
		},
		series: [{
			name: '步数',
			data: [1000, 3000, 1050, 2000, 1074

			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	$('#bstd').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月计步</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">计步(步)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '步' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '步' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 30 * 1803090,
				pointStart: Date.UTC(2017, 7, 1)
			}
		},
		series: [{
			name: '步数',
			data: [952, 1035, 5002, 3611, 3644, 3022, 3700, 3593, 3602, 3647, 1065, 2357, 2958, 3069,
				1789, 2639, 3516, 3000, 800, 49630, 2053, 3032, 9538, 6000, 10000, 1030, 2891, 3055, 7463, 3696,
				7633
			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	$('#bsleep').highcharts({
		chart: {
			zoomType: 'xy'
		},
		title: {
			text: '<span style="font-size:18px">8月23日睡眠</span>'
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		xAxis: [{
			type: 'datetime',
			labels: {
				overflow: 'justify'
			},
		}],
		plotOptions: {
			column: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 2
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 7605450, // one hour
				pointStart: Date.UTC(2017, 7, 23, 0, 0, 0)
			},
			spline: {
				lineWidth: 2,
				states: {
					hover: {
						lineWidth: 2
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 7605450, // one hour
				pointStart: Date.UTC(2017, 7, 23, 0, 0, 0)
			}
		},
		yAxis: [{ // Primary yAxis
			labels: {
				format: '{value}h',
				style: {
					color: Highcharts.getOptions().colors[2]
				}
			},
			title: {
				text: '小时(h)',
				style: {
					color: Highcharts.getOptions().colors[1]
				}
			}
		}, { // Secondary yAxis
			title: {
				text: '睡眠 (%)',
				style: {
					color: Highcharts.getOptions().colors[0]
				}
			},
			labels: {
				format: '{value} %',
				style: {
					color: Highcharts.getOptions().colors[0]
				}
			},
			opposite: true
		}],
		tooltip: {
			shared: true,
			formatter: function() {
				return '<b style="font-size:14px">' + this.points[0].series.name + ':' + Highcharts.numberFormat(this.points[0].y, 2) + '%' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + this.points[2].series.name + ':' + Highcharts.numberFormat(this.points[2].y, 2) + '%' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + this.points[1].series.name + ':' + Highcharts.numberFormat(this.points[1].y, 2) + 'h' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
//		legend: {
//			layout: 'vertical',
//			align: 'left',
//			x: 60,
//			verticalAlign: 'top',
//			y: 0,
//			floating: true,
//			backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
//		},
		series: [{
				name: '安静睡眠',
				type: 'column',
				yAxis: 1,
				data: [90, 95, 94, 92, 92, 96, 93, 90, 92, 94, 95, 90],
				tooltip: {
					valueSuffix: '%'
				}
			},
			{
				name: '小时',
				type: 'spline',
				data: [1.2, 6.9, 9.5, 14.5, 15.2, 5.3, 4.2, 10.5, 9.3, 8.3, 9.9, 9.6],
				tooltip: {
					valueSuffix: 'h'
				}
			},
			{
				name: '深度睡眠',
				type: 'column',
				yAxis: 1,
				data: [90, 92, 91, 92, 97, 93, 96, 94, 94, 96, 95.6, 92.5],
				tooltip: {
					valueSuffix: '%'
				}
			}
		]
	});
	$('#bsleepd').highcharts({
		chart: {
			zoomType: 'xy'
		},
		title: {
			text: '<span style="font-size:18px">8月睡眠</span>'
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		xAxis: [{
			type: 'datetime',
			labels: {
				overflow: 'justify'
			},
		}],
		plotOptions: {
			column: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 2
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 130 * 1830050, // one hour
				pointStart: Date.UTC(2017, 7, 1)
			},
			spline: {
				lineWidth: 2,
				states: {
					hover: {
						lineWidth: 2
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 130 * 1830050, // one hour
				pointStart: Date.UTC(2017, 7, 1)
			}
		},
		yAxis: [{ // Primary yAxis
			labels: {
				format: '{value}h',
				style: {
					color: Highcharts.getOptions().colors[2]
				}
			},
			title: {
				text: '小时 (h)',
				style: {
					color: Highcharts.getOptions().colors[2]
				}
			}
		}, { // Secondary yAxis
			title: {
				text: '睡眠 (%)',
				style: {
					color: Highcharts.getOptions().colors[0]
				}
			},
			labels: {
				format: '{value} %',
				style: {
					color: Highcharts.getOptions().colors[0]
				}
			},
			opposite: true
		}],
		tooltip: {
			shared: true,
			formatter: function() {
				return '<b style="font-size:14px">' + this.points[0].series.name + ':' + Highcharts.numberFormat(this.points[0].y, 2) + '%' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + this.points[2].series.name + ':' + Highcharts.numberFormat(this.points[2].y, 2) + '%' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + this.points[1].series.name + ':' + Highcharts.numberFormat(this.points[1].y, 2) + 'h' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
//		legend: {
//			layout: 'vertical',
//			align: 'left',
//			x: 60,
//			verticalAlign: 'top',
//			y: 0,
//			floating: true,
//			backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
//		},
		series: [{
				name: '安静睡眠',
				type: 'column',
				yAxis: 1,
				data: [95, 90, 94, 91, 92, 96, 93, 90, 92, 94, 90, 95],
				tooltip: {
					valueSuffix: '%'
				}
			},
			{
				name: '小时',
				type: 'spline',
				data: [6.9, 1.2, 7.5, 9.5, 15.2, 5.3, 4.2, 10.5, 9.3, 8.3, 9.6, 9.9],
				tooltip: {
					valueSuffix: 'h'
				}
			},
			{
				name: '深度睡眠',
				type: 'column',
				yAxis: 1,
				data: [90, 92, 91, 92, 97, 93, 96, 94, 94, 96, 95.6, 92.5],
				tooltip: {
					valueSuffix: '%'
				}
			}
		]
	});

	$('#bweight').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月23日体重</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">体重(公斤)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '公斤' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '公斤' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 10*1805450,
				pointStart: Date.UTC(2017, 7, 23, 0, 0, 0)

			}
		},
		series: [{
			name: '公斤',
			data: [50, 51.5, 50, 51.2, 53]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	$('.1').css('color','red')
	$('#bweightd').highcharts({
		chart: {
			backgroudColor: 'white',
			type: 'spline'
		},
		title: {
			text: '<span style="font-size:18px">8月体重</span>'
		},
		xAxis: {
			type: 'datetime',
			labels: {
				overflow: 'justify'
			}
		},
		yAxis: {
			title: {
				text: '<b style="font-size:14px">体重(公斤)</b>'
			}
		},
		tooltip: {
			formatter: function() {
				if(screen.height<=768||screen.width<=1280)
				{
					return '<b style="font-size:14px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '公斤' + '</b>' + '<br/>' +
					'<b style="font-size:13px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
				}
				return '<b style="font-size:15px">' + this.series.name + ':' +
					Highcharts.numberFormat(this.y, 2) + '公斤' + '</b>' + '<br/>' +
					'<b style="font-size:14px">' + Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x) + '</b>';
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		exportChart: {
			enabled: false
		},
		plotOptions: {
			spline: {
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				marker: {
					enabled: true
				},
				pointInterval: 102 * 1803090,
				pointStart: Date.UTC(2017, 7, 1)
			}
		},
		series: [{
			name: '体重',
			data: [46.8, 52, 53.2, 54, 52, 53.2, 53.6, 52.5, 50.2, 50, 52, 55, 52, 58

			]
		}],
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});

	function charts(classname1, classname2, classname3, classname4, classname5) {
		var html = '<button class="' + classname1 + '">日</button>'
		var htmls = '<button class="' + classname2 + '">月</button>'
		$('#' + classname3).append(html)
		$('#' + classname4).append(htmls)
		$('.' + classname1).click(function() {
			$('#' + classname3).hide()
			$('.' + classname5).show()
		})
		$('.' + classname2).click(function() {
			$('#' + classname3).show()
			$('.' + classname5).hide()
		})
	}
	charts('days', 'month', 'container', 'containerd', 'blday')
	charts('bsdays', 'bsmonth', 'blsug', 'blsugd', 'bsday')
	charts('bhdays', 'bhmonth', 'bheart', 'bheartd', 'bhday')
	charts('bodays', 'bomonth', 'boxygen', 'boxygend', 'boday')
	charts('btdays', 'btmonth', 'btem', 'btemd', 'btday')
	charts('bstdays', 'bstmonth', 'bstep', 'bstd', 'bstday')
	charts('bsldays', 'bslmonth', 'bsleep', 'bsleepd', 'bslday')
	charts('bwhdays', 'bwhmonth', 'bweight', 'bweightd', 'bwhday')

	function imshow() {
		$('.flft').parent('div').addClass('imlist')
		$('.imlist').each(function(index) {
			var num = index + 1;
			$(this).addClass('imlist' + num)
			$('.imlist' + num).hide()
			$('.imlist1').show()
		})
		$('.imebldbtn button').each(function(index) {
			var num = index + 1;
			$(this).addClass('imblt' + num)
			$(this).click(function() {
				$('.imlist' + num).show()
				$('.imlist' + num).siblings('.imlist').hide()
			})
		})
	}
	imshow()
})