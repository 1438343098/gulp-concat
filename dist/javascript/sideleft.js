$(function() {
	var heights=window.screen.availHeight
//	$('body').height(heights)
//	$('.sideright').height(heights)
	$('#map').height($('.sideright').height()-100)
//	alert()
	$('.side').click(function() {
		$('.sideleft').toggle()
		$('.sideright').toggleClass('width')
		$('.point span').toggleClass('newpospn')
		var rheight = $('.sideright').height()
//		$('.sideleft').height(rheight)
		$('.divr').css({
			width: document.documentElement.clientWidth - 200,
		})
		$('.sideright').css({
			width: document.documentElement.clientWidth - 200,
		})
	})
	$('.henter').click(function(){
		$('.entercont').toggle()
	})
	$('.alarms').click(function() {
		$(this).toggleClass('fixed')
	})
	$('.sideright').css({
		width: document.documentElement.clientWidth - 200,

	})
	$('.divr').css({
		width: document.documentElement.clientWidth - 200,

	})
//	$('.sideleft').height($('.sideright').height())
	$(window).resize(function() {
//		alert(document.documentElement.clientWidth+','+$('.sideright').width())
		$('.sideright').css({
			width: document.documentElement.clientWidth - 200,
		})
		$('.divr').css({
			width: document.documentElement.clientWidth - 200,
		})
		$('.sideleft').height($('.sideright').height())
	})
	$('.side').click(function() {
		$('.sideright').toggleClass('marz')
		$('.sideleft').toggleClass('undis')
	})
	$('.user').click(function() {
		$('.popup').toggle()
	})
	//点击当前父菜单只显示对应子菜单，其他菜单不显示
	function sidehid(i, classnames1, classnames2) {
		$('.slidtoggle' + i).click(function() {
			$(this).siblings('.tree_slid').slideToggle().parent('.lislide').siblings('.lislide').children('.tree_slid').hide()
			$(this).parent('.lislide').siblings('.lislide').children('.slidtoggle' + i).children('.imgtoggle').children('div:nth-of-type(2)').show()
			$(this).parent('.lislide').siblings('.lislide').children('.slidtoggle' + i).children('.imgtoggle').children('div:nth-of-type(3)').hide()
			$(this).parent('.lislide').siblings('.lislide').children('.' + classnames1).children('.' + classnames2).children('div:nth-of-type(2)').hide()
			$(this).parent('.lislide').siblings('.lislide').children('.' + classnames1).children('.' + classnames2).children('div:nth-of-type(3)').show()
		})
	}
	sidehid(0)
	sidehid(1, 'side_fhid', 'side_fdhid')
	sidehid(2, 'side_yhid', 'side_ydhid')
	sidehid(3, 'side_sqhid', 'side_sqdhid')
	//子菜单展开收缩箭头切换
	function sideclick(classnames) {
		$('.' + classnames).click(function() {
			$('.' + classnames + ' ' + 'div div:nth-of-type(2)').toggle()
			$('.' + classnames + ' ' + 'div div:nth-of-type(3)').toggle()
		})
	}
	sideclick('side_f')
	sideclick('side_y')
	sideclick('side_sq')

	function listarrow(classnames) {
		$('.' + classnames).click(function() {
			$(this).addClass('listfirst')
//			$(this).parent('a').parent('li').siblings('li').removeClass('listfirst')
			$(this).parent('a').parent('li').siblings('li').children('a').children('div').removeClass('listfirst')
			$('.tree_slid li').mouseover(function() {
				$('.' + classnames).removeClass('listfirst')
			})
		})
	}
	listarrow('side_fd')
	listarrow('side_yd')
	listarrow('side_sqd')
	//给父菜单添加背景色
	function listfirst(classnames) {
		$('.' + classnames).addClass('listfirst')
		$('.' + classnames).parent('a').parent('.lislide').siblings('.lislide').click(function() {
			$('.' + classnames).removeClass('listfirst')
		})
		$('.tree_slid li').mouseover(function() {
			$('.' + classnames).removeClass('listfirst')
		})
	}
	listfirst('sy')
	listfirst('zf')
	listfirst('ts')
	listfirst('data')
	listfirst('jg')
	listfirst('tj')
	listfirst('lr')
	//给子菜单添加背景色
	function listw(classnames, i) {
		$('.' + classnames + ' ' + 'li').eq(i).addClass('listw')
		$('.lislide a').click(function() {
			$(this).siblings('ul').children('li').removeClass('listw')
		})
		$('.' + classnames + ' ' + 'li').eq(i).siblings('li').hover(function() {
			$('.' + classnames + ' ' + 'li').eq(i).removeClass('listw')
		})
	}
	listw('falarm', 0)
	listw('fbase', 1)
	listw('fother', 2)
	listw('yimei', 0)
	listw('yapp', 1)
	listw('yadmin', 2)
	listw('sqsp', 0)
	listw('sqfg', 1)
	listw('sqyg', 2)
	listw('sqcg', 3)
})