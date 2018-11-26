$(function() {
	$('.datasetting li').each(function(index) {
		var num = index + 1;
		$(this).addClass('dst' + num)
		$('.dst'+num).click(function(){
			$(this).children('button').css('color','red')
			$(this).siblings('li').children('button').css('color','black')
		})
	})
	$('.stchild').each(function(index) {
		var num = index + 1;
		$(this).addClass('stchild' + num);
		$('.stchild1').show();
		$('.dst' + num).click(function() {
			$('.stchild' + num).show();
			$('.stchild' + num).siblings('div').hide()
		})
	})
	$('.stconts').each(function(index) {
		var num = index + 1;
		$(this).addClass('stconts' + num)
	})

	//select下上限选择框切换显示隐藏
	function stoggle(classname1, classname2) {
		$('.' + classname1).click(function() {
			$('.' + classname2).toggle()
			if(classname2 == 'fencecontent') {
				setTimeout(function() {
					var fencemap = new BMap.Map("fencemap");
					var fpoint = new BMap.Point(116.404, 39.915);
					fencemap.centerAndZoom(fpoint, 12);
					fencemap.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
					fencemap.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
					var top_left_control = new BMap.NavigationControl({
						anchor: BMAP_ANCHOR_TOP_LEFT,
						type: BMAP_NAVIGATION_CONTROL_LARGE
					})
					fencemap.addControl(top_left_control)
					fencemap.addEventListener('tilesloaded', function() {
						$('.BMap_cpyCtrl').remove();
						$('.anchorBL').remove();
					})
					fencemap.enableScrollWheelZoom(true)
					fencemap.enableKeyboard()

					//点击地图获取电子围栏中心点

					//	$('#fencemap').append()
					//圆形覆盖
					var myIcon = new BMap.Icon("../image/circle.svg", new BMap.Size(32, 32));
					var marker2 = new BMap.Marker(fpoint, { icon: myIcon }); // 创建标注
					fencemap.addOverlay(marker2);
					var radius = 5000
					var circle = new BMap.Circle(fpoint, radius, { fillColor: "green", strokeWeight: 1, fillOpacity: 0.3, strokeOpacity: 0.3, enableEditing: true });
					fencemap.addOverlay(circle);
				}, 1000)
			}
		})
	}
	stoggle('stconts1', 'lvcontent')
	stoggle('stconts9', 'bloodct')
	stoggle('stconts4', 'spcontent')
	stoggle('stconts6', 'fencecontent')
	stoggle('stconts11', 'bsgcontent')
	stoggle('stconts13', 'tempcontent')
	stoggle('stconts15', 'stphonect')
	stoggle('stconts17', 'soscontent')


	//各取消按钮赋值
	$('.none1').click(function() {
		$('.lvcontent').hide()
	})
	$('.none2').click(function() {
		$('.spcontent').hide()
		$('#sttepcont').val('')
	})
	$('.none3').click(function() {
		$('.bloodct').hide()
	})
	$('.none4').click(function() {
		$('.bsgcontent').hide()
	})
	$('.none5').click(function() {
		$('.tempcontent').hide()
	})
	$('.none6').click(function() {
		$('.stphonect').hide()
	})
	$('.fencecancel').click(function() {
		$('.fencecontent').hide()
		$('.fenradius div:first-child input').val('')
	})
	$('.none7').click(function() {
		$('.soscontent').hide()
		$('.phonetext').val('')
	})

	//各确认按钮赋值
	$('.stconfirm1').click(function() {
		document.querySelector('.lowheart').innerHTML = o.innerText
		document.querySelector('.higheart').innerHTML = s.innerText
		$('.lvcontent').hide()
	})
	$('.stconfirm2').click(function() {
		$('.spcontent').hide()
		$('.stnum').html($('#sttepcont').val())
		$('#sttepcont').val('')
	})
	$('.stconfirm3').click(function() {
		document.querySelector('.lminbld').innerHTML = a.innerText
		document.querySelector('.lmaxbld').innerHTML = b.innerText
		document.querySelector('.hminbld').innerHTML = c.innerText
		document.querySelector('.hmaxbld').innerHTML = d.innerText
		$('.bloodct').hide()
	})
	$('.stconfirm4').click(function() {
		document.querySelector('.lminbsg').innerHTML = e.innerText
		document.querySelector('.lmaxbsg').innerHTML = f.innerText
		$('.bsgcontent').hide()
	})
	$('.stconfirm5').click(function() {
		document.querySelector('.tpmin').innerHTML = t.innerText
		document.querySelector('.tpmax').innerHTML = h.innerText
		$('.tempcontent').hide()
	})
	$('.stconfirm6').click(function() {
		$('.num1').html($('.pnum1 input').val())
		$('.num2').html($('.pnum2 input').val())
		$('.num3').html($('.pnum3 input').val())
		$('.num4').html($('.pnum4 input').val())
		$('.stphonect').hide()
	})
	$('.stconfirm7').click(function() {
		$('.sosnum1').html($('.sosconts1 input').val())
		$('.sosnum2').html($('.sosconts2 input').val())
		$('.sosnum3').html($('.sosconts3 input').val())
		$('.soscontent').hide()
		$('.phonetext').val('')
	})

	//快速拨号,sos警告框赋初始值
	$('.pnum1 input').val(document.querySelector('.num1').innerHTML)
	$('.pnum2 input').val(document.querySelector('.num2').innerHTML)
	$('.pnum3 input').val(document.querySelector('.num3').innerHTML)
	$('.pnum4 input').val(document.querySelector('.num4').innerHTML)
	$('.sosconts1 input').val(document.querySelector('.sosnum1').innerHTML)
	$('.sosconts2 input').val(document.querySelector('.sosnum2').innerHTML)
	$('.sosconts3 input').val(document.querySelector('.sosnum3').innerHTML)

	//计步,快速拨号,sos警告框enter键赋值
	$('#sttepcont').keydown(function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode == 13) { // 按 Esc 
			$('.spcontent').hide()
			$('.stnum').html($('#sttepcont').val())
			$('#sttepcont').val('')
		}
	})
	$('.pnum input').keydown(function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode == 13) { // 按 Esc 
			$('.stphonect').hide()
			$('.num1').html($('.pnum1 input').val())
			$('.num2').html($('.pnum2 input').val())
			$('.num3').html($('.pnum3 input').val())
			$('.num4').html($('.pnum4 input').val())
			$('.stnum').html($('#sttepcont').val())
		}
	})
	$('.sosconts input').keydown(function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode == 13) { // 按 Esc 
			$('.stphonect').hide()
			$('.sosnum1').html($('.sosconts1 input').val())
			$('.sosnum2').html($('.sosconts2 input').val())
			$('.sosnum3').html($('.sosconts3 input').val())
			$('.soscontent').hide()
			$('.phonetext').val('')
		}
	})
	$('.phonetext').keydown(function() {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode == 13) { // 按 Esc 
			$('.stphonect').hide()
			$('.sosnum1').html($('.sosconts1 input').val())
			$('.sosnum2').html($('.sosconts2 input').val())
			$('.sosnum3').html($('.sosconts3 input').val())
			$('.soscontent').hide()
			$('.phonetext').val('')
		}
	})
	//血压下上限4个选择框点击只显示当前一个选择框
	function layer(classname1, classname2, classname3, classname4) {
		$('#' + classname1).click(function() {
			$('#' + classname2).hide()
			$('#' + classname3).hide()
			$('#' + classname4).hide()
		})
	}
	layer('layer5', 'layer8', 'layer10', 'layer12')
	layer('layer7', 'layer6', 'layer10', 'layer12')
	layer('layer9', 'layer6', 'layer8', 'layer12')
	layer('layer11', 'layer6', 'layer8', 'layer10')

	//点击tab栏头部，不让时间设定页面显示
	function laydate(classname1, classname2, classname3, classname4, classname5) {
		$('#' + classname1).click(function() {
			$('#' + classname2).hide()
			$('#' + classname3).hide()
			$('#' + classname4).hide()
			$('#' + classname5).hide()
		})
	}
	laydate('listhead1', 'layui-laydate1', 'layui-laydate2', 'layui-laydate3', 'layui-laydate4')
	laydate('listhead2', 'layui-laydate1', 'layui-laydate2', 'layui-laydate3', 'layui-laydate4')
	laydate('listhead3', 'layui-laydate1', 'layui-laydate2', 'layui-laydate3', 'layui-laydate4')
	laydate('listhead4', 'layui-laydate1', 'layui-laydate2', 'layui-laydate3', 'layui-laydate4')
	laydate('listhead5', 'layui-laydate1', 'layui-laydate2', 'layui-laydate3', 'layui-laydate4')
	laydate('listhead6', 'layui-laydate1', 'layui-laydate2', 'layui-laydate3', 'layui-laydate4')

	//点击select框，隐藏其他select框
	$('.stconts1').click(function() {
		$('.layui-laydate').hide()
		$('.bloodct').hide()
		$('.bsgcontent').hide()
		$('.tempcontent').hide()
		$('.fencecontent').hide()
		$('.spcontent').hide()
		$('.stphonect').hide()
		$('.soscontent').hide()
	})
	$('.stconts4').click(function() {
		$('.lvcontent').hide()
		$('.bloodct').hide()
		$('.bsgcontent').hide()
		$('.tempcontent').hide()
		$('.stphonect').hide()
		$('.soscontent').hide()
		$('.layui-laydate').hide()
		$('.fencecontent').hide()
	})
	$('.stconts6').click(function() {
		$('.lvcontent').hide()
		$('.spcontent').hide()
		$('.bloodct').hide()
		$('.bsgcontent').hide()
		$('.tempcontent').hide()
		$('.layui-laydate').hide()
		$('.stphonect').hide()
		$('.soscontent').hide()
	})
	//点击时间插件,其他select框消失
	function dateset(classname) {
		$('.' + classname).click(function() {
			$('.lvcontent').hide()
			$('.spcontent').hide()
			$('.bloodct').hide()
			$('.bsgcontent').hide()
			$('.tempcontent').hide()
			$('.stphonect').hide()
			$('.soscontent').hide()
			$('.fencecontent').hide()
		})
	}
	dateset('stconts2')
	dateset('stconts5')
	dateset('stconts7')

	//设置页面点击左侧tab切换,右侧设定选择框消失
	function dst(classname) {
		$('.' + classname).click(function() {
			$('.lvcontent').hide()
			$('.spcontent').hide()
			$('.bloodct').hide()
			$('.bsgcontent').hide()
			$('.tempcontent').hide()
			$('.stphonect').hide()
			$('.soscontent').hide()
			$('.layui-laydate').hide()
			$('.fencecontent').hide()
			$('.fenradius div:first-child input').val('')
			$('#sttepcont').val('')
		})
	}
	dst('dst1')
	dst('dst2')
	dst('dst3')
	dst('dst4')
	dst('dst5')
	dst('dst6')
	dst('dst7')
	dst('dst8')
	dst('dst9')
	dst('dst10')
})