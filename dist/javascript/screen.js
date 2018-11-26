$(function() {
	if(screen.height <= 768 || screen.width <= 1280) {
		//		$('.itear').height('80px')
		//		$('.itear p').css('margin','35px auto 10px auto;')
		//		$('.side_sd,.side_fd,.side_yd,.side_td,.side_sqd,.side_zfd,.side_jd,.side_jgd,.side_tjd').addClass('side_fty')
		$('.side_sd,.side_fd,.side_yd,.side_td,.side_sqd,.side_zfd,.side_jd,.side_jgd,.side_tjd').css({
			'height': "35px",
			'line-height': '35px'
		})
		$('.menu>li>a>div>p').css({
			'font-size': '15px',
			'line-height': '35px'
		})
		//		$('.treeview-menu li a,.menu li').css('fontSize','14px')
		$('#searched').css({
			'font-size': '15px',
			'height': '32px',
			'line-height': '32px'
		})
		$('.menu li').css('minHeight','30px')
		$('.treeview-menu li a').css({
			'line-height':'30px'
//			'font-size':'14px'
		})
		$('.dentering span,.listshow div').css('fontSize', '15px')
		$('.popup').height('53px')
		$('.popup>div>a:nth-of-type(1)>p,.popup>div>a:nth-of-type(2)>p').css({
			'line-height': '36px',
			'height': '36px',
			'margin': '8px 10px 0 10px',
			'color': 'gray'
		})
		$('.pager div:nth-of-type(1)').css('marginLeft', '0')
		$('.entercont ul').css({
			'width': '366px',
			'padding': '5px'
		})
		$('.entercont ul li').css({
			'width': '100px',
			'padding': '6px',
			'border-radius': '5px'
		})
		$('.enterclose').css('margin', '0 0 3px 330px')
		$('.entercont ul li a').css('fontSize', '15px')
		$('#labelId3').css('fontSize', '15px')
		$('.header div:nth-of-type(1) img').css('width','30px')
		$('.AccountClose').addClass('mClose')
	}
})