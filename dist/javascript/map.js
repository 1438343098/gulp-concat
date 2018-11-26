		$(function(){
	$.get("../../../customer/data/map.php",{type:"map",s:0},function(data){
		var points = [];
		var lolist = eval(data);
		c = lolist.length;
		for (var i = 0; i < c; i++) {
			var point = new BMap.Point(lolist[i].baidulng, lolist[i].baidulat);   
			points.push(point);
		}
		var options = {
			shape: BMAP_POINT_SHAPE_WATERDROP,
					}
		var pointCollection = new BMap.PointCollection(points, options);  // ��ʼ��PointCollection
		pointCollection.addEventListener('click', function (e) {			
			var imei = imeis(e,lolist);
			window.location.href = "../../../customer/user.php?imei=" + imei;
		});
		map.addOverlay(pointCollection);
	})
		
		
	$.get("../../../customer/data/map.php",{type:"ev",c:"1"},function(data) {
		var points = [];
		var list = eval(data);
		c = list.length;
		for (var i = 0; i < c; i++) {
			var point = new BMap.Point(list[i].baidulng, list[i].baidulat);   
			points.push(point);
		}
		var options = {
			size: BMAP_POINT_SIZE_BIG,
			shape: BMAP_POINT_SHAPE_STAR,
			color: 'red'
		}
		var pointCollection = new BMap.PointCollection(points, options);  // ��ʼ��PointCollection
		pointCollection.addEventListener('click', function (e) {			
			var user = users(e,list);
			window.location.href = "../../../customer/envoy.php?user=" + user;
		});
		pointCollection.addEventListener("mouseover",function(e) {	
			//openInfo(e,list);
		});
		pointCollection.addEventListener("mouseout",function() {
			map.closeInfoWindow();
		});
		
		map.addOverlay(pointCollection);
	})
	})

function openInfo(e,lolist) {
	var imei = "";
	var address = "";
	for (var i = 0; i < lolist.length; i++) {
		if(e.point.lng==lolist[i].baidulng&&e.point.lat==lolist[i].baidulat){
			imei= lolist[i].imei;
			address = lolist[i].address;
		}
	}	
    var opts = {
        width: 300,
        height: 252,
        title: imei,
        enableMessage: true
    };
    var content = "";
    $.get("../../../customer/get/map.php", {
        imei: imei
    },
    function(o) {
        content = o + "<br>��ַ:" + address + '&nbsp;&nbsp;<a href="../../customer/locationinfo.php?imei=' + imei + '">�����Ϣ</a>';
        var infoWindow = new BMap.InfoWindow(content, opts);
        map.openInfoWindow(infoWindow, e.point);
    });
}
function imeis(e,lolist){
	for (var i = 0; i < lolist.length; i++) {
		if(e.point.lng==lolist[i].baidulng&&e.point.lat==lolist[i].baidulat){
			return lolist[i].imei;
			break;
		}
	}
}
function users(e,list){
	for (var i = 0; i < list.length; i++) {
		if(e.point.lng==list[i].baidulng&&e.point.lat==list[i].baidulat){
			return list[i].user;
			break;
		}
	}
}