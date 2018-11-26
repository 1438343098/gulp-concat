 $(function() {
 $('.bloodovtxt').click(function() {
 	$(this).toggleClass('ovtxt')
 })
 $('.payrecord').click(function() {
 	$('.paycont').show()
 	$('.familycont').hide()
 })
 $('.family').click(function() {
 	$('.paycont').hide()
 	$('.familycont').show()
 })

 function indent(class1, class2, class3, class4, class5) {
 	$('.' + class1).click(function() {
 		$('.' + class2).show()
 		$('.' + class3).hide()
 		$('.' + class4).hide()
 		$('.' + class5).hide()
 	})
 }
 indent('unindent', 'unindentcont', 'cancelindentcont', 'indentingcont', 'finishindentcont')
 indent('imeunindent', 'imeunindentcont', 'imecancelindentcont', 'imeindentingcont', 'imefinishindentcont')
 indent('cancelindent', 'cancelindentcont', 'unindentcont', 'indentingcont', 'finishindentcont')
 indent('imecancelindent', 'imecancelindentcont', 'imeunindentcont', 'imeindentingcont', 'imefinishindentcont')
 indent('indenting', 'indentingcont', 'unindentcont', 'cancelindentcont', 'finishindentcont')
 indent('imeindenting', 'imeindentingcont', 'imeunindentcont', 'imecancelindentcont', 'imefinishindentcont')
 indent('finishindent', 'finishindentcont', 'unindentcont', 'cancelindentcont', 'indentingcont')
 indent('imefinishindent', 'imefinishindentcont', 'imeunindentcont', 'imecancelindentcont', 'imeindentingcont')

 function comments(i) {
 	$('.alarmimg' + i).click(function() {
 		var rheight = $('.sideright').height()
 		//			alert(rheight)
 		$('.sideleft').height(rheight)
 		$('.divr').css({
 			width: document.documentElement.clientWidth - 200,
 		})
 		$('.sideright').css({
 			width: document.documentElement.clientWidth - 200,
 		})
 		$(this).hide()
 		$('.comment' + i).show()
 	})
 	$('.comment' + i).click(function() {
 		var rheight = $('.sideright').height()
 		$('.sideleft').height(rheight)
 		$('.divr').css({
 			width: document.documentElement.clientWidth - 200,
 		})
 		$('.sideright').css({
 			width: document.documentElement.clientWidth - 200,
 		})
 		$(this).hide()
 		$('.alarmimg' + i).show()
 	})
 }
 comments(1)
 comments(2)
 comments(3)
 comments(4)
 comments(5)
 //鼠标放上去显示全部警报信息
 $('.overflow').mousemove(function() {
 	$(this).css('white-space', 'normal')
 })
 $('.overflow').mouseout(function() {
 	$(this).css('white-space', 'nowrap')
 })
 //所有警报评价内容
 function alarmcomments(i) {
 	$('.alarmimgs' + i).click(function() {
 		var rheight = $('.sideright').height()
 		$('.sideleft').height(rheight)
 		$('.divr').css({
 			width: document.documentElement.clientWidth - 200,
 		})
 		$('.sideright').css({
 			width: document.documentElement.clientWidth - 200,
 		})
 		$(this).hide()
 		$('.comments' + i).show()
 	})
 	$('.comments' + i).click(function() {
 		var rheight = $('.sideright').height()
 		$('.sideleft').height(rheight)
 		$('.divr').css({
 			width: document.documentElement.clientWidth - 200,
 		})
 		$('.sideright').css({
 			width: document.documentElement.clientWidth - 200,
 		})
 		$(this).hide()
 		$('.alarmimgs' + i).show()
 	})
 }
 alarmcomments(1)
 //警报已处理评论
 function alarmcommented(i) {
 	$('.alarmimged' + i).click(function() {
 		var rheight = $('.sideright').height()
 		$('.sideleft').height(rheight)
 		$('.divr').css({
 			width: document.documentElement.clientWidth - 200,
 		})
 		$('.sideright').css({
 			width: document.documentElement.clientWidth - 200,
 		})
 		$(this).hide()
 		$('.commented' + i).show()
 	})
 	$('.commented' + i).click(function() {
 		var rheight = $('.sideright').height()
 		$('.sideleft').height(rheight)
 		$('.divr').css({
 			width: document.documentElement.clientWidth - 200,
 		})
 		$('.sideright').css({
 			width: document.documentElement.clientWidth - 200,
 		})
 		$(this).hide()
 		$('.alarmimged' + i).show()
 	})
 }
 alarmcommented(1)
 alarmcommented(2)
 alarmcommented(3)
 alarmcommented(4)
 alarmcommented(5)
 alarmcommented(6)
 alarmcommented(7)
 alarmcommented(8)
 alarmcommented(9)
 alarmcommented(10)

 var rheight = $('.sideright').height()
 $('.sideleft').height(rheight)
 $('.divr').css({
 	width: document.documentElement.clientWidth - 200,
 })
 $('.sideright').css({
 	width: document.documentElement.clientWidth - 200,
 })
 $(window).resize(function() {
 	var rheight = $('.sideright').height()
 	$('.sideleft').height(rheight)
 })
 //警报所有
 function alarmessage(i) {
 	$('.alarmessagedet' + i).click(function() {
 		$('.alarmessage' + i).toggleClass('undis')
 		var rheight = $('.sideright').height()
 		$('.sideleft').height(rheight)
 	})
 	$('.divr').css({
 		width: document.documentElement.clientWidth - 200,
 	})
 	$('.sideright').css({
 		width: document.documentElement.clientWidth - 200,
 	})
 }
 alarmessage(1)
 alarmessage(2)
 alarmessage(3)
 alarmessage(4)
 alarmessage(5)
 alarmessage(6)
 alarmessage(7)
 alarmessage(8)
 alarmessage(9)
 alarmessage(10)

 //警报已处理
 function alarmessages(i) {
 	$('.alarmessagedets' + i).click(function() {
 		$('.alarmessages' + i).toggleClass('undis')
 		var rheight = $('.sideright').height()
 		$('.sideleft').height(rheight)
 	})
 	$('.divr').css({
 		width: document.documentElement.clientWidth - 200,
 	})
 	$('.sideright').css({
 		width: document.documentElement.clientWidth - 200,
 	})
 }
 alarmessages(1)
 alarmessages(2)
 alarmessages(3)
 alarmessages(4)
 alarmessages(5)
 alarmessages(6)
 alarmessages(7)
 alarmessages(8)
 alarmessages(9)
 alarmessages(10)
 })


