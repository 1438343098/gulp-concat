$(function(){
//	alert('-----------')
	var content=
	'<div class="clear" style="position:relative">'+
								'<div class="martri clear" style="position:relative">'+
									'<div style="width: 850px;background: white;border-radius: 10px;right:110px;top:80px;position:absolute">'+
										'<div  class="marquee" >'+
											'<ul class="clear odd ulHeader">'+
												'<li class="lio aleft">IMEI</li>'+
												'<li class="lio">警报内容</li>'+
												'<li class="lio">警报时间</li>'+
												'<li class="lio">处理时间</li>'+
											'</ul>'+
											'<ul class="clear even">'+
												 '<li class="lio aleft">860015629635011</li>'+
											     '<li class="txt">收缩压过高,舒张压过高</li>'+
											     '<li class="lio">2015-06-08 17:26:50</li>'+
											     '<li class="lio">等待处理</li>'+
											'</ul>'+
											'<ul class="clear odd">'+
												 '<li class="lio aleft">860015629635011</li>'+
											     '<li class="txt">目前收缩压为<b style="color: red">154</b>，舒张压100</li>'+
											     '<li class="lio">2015-06-08 17:26:50</li>'+
											     '<li class="lio">等待处理</li>'+
											'</ul>'+
											'<ul class="clear even">'+
												 '<li class="lio aleft">860015629635011</li>'+
											     '<li class="txt">收缩压过高</li>'+
											     '<li class="lio">2015-06-08 17:26:50</li>'+
											     '<li class="lio">处理中</li>'+
											'</ul>'+
											'<ul class="clear odd">'+
												 '<li class="lio aleft">860015629635011</li>'+
											     '<li class="txt">目前收缩压为<b style="color: red">156</b>，舒张压102</li>'+
											     '<li class="lio">2015-06-08 17:26:50</li>'+
											     '<li class="lio">等待处理</li>'+
											'</ul>'+
										'</div>'+
										'<div class="pages">'+
											'<div style="width:90%;margin: 0 auto;text-align: center;font-size: 14px;">'+
												'<a href="" class="firstpage">首页</a>'+
												'<a href="" class="leftpage"><</a>'+
												'<a href="">1</a>'+
												'<a href="">2</a>'+
												'<a href="">3</a>'+
												'<a href="">4</a>'+
												'<a href="">5</a>'+
												'<a href="" class="rightpage">></a>'+
												'<a href="" class="lastpage">尾页</a>'+
												'<span>第<input type="text" value="5" />页</span>'+
												'<button class="toPage">Go</button>'+
											'</div>'+
										'</div>'+
									'</div>'+
									'<div style="float: left;border-top:12px solid rgba(255,255,255,0.1);border-bottom:12px solid rgba(255,255,255,0.1);border-left: 22px solid white;width: 0px;height:0px;position:absolute;right:90px;top:130px;" class="trangle"></div>'+
								'</div>'+
								'<div style="width: 60px;height: 60px;background: white;border-radius: 50%;position: absolute;top: 120px;right: 20px;cursor:pointer" class="alarms";>'+
									'<img src="../image/alarm.png" style="padding:10px 13px;"/>'+
								'</div>'+
							'</div>'
		$('#map').append(content)
		$('.alarms').click(function(){
				$('.martri').toggle()
			})
})
