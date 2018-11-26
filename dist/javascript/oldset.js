$(function() {
	function oldcancel() {
		window.location.href = "../templates/imei.html"
	}

	function oldconfirm() {
		window.location.href = "../templates/newimei.html"
	}

	function imeiadd() {
		window.location.href = "../templates/oldermsg.html"
	}

	function addmore() {
		window.location.href = "../templates/oldermsg.html"
	}
	
	//社区帮扶人设置
	$('.helpadd').click(function() {
		var content =
			'<div class="helpman">' +
			'<span  style="margin:0 20px 0 50px">姓名</span>' +
			'<input type="text" class="ipt helpt wtw "/>' +
			'<span class="green" style="margin-left:5px">联系电话 </span><input type="text" class="ipt mar15 wtw hphone"/>' +
			'<img src="../image/hclose.svg" class="sclose"/>' +
			'<img src="../image/对1.svg" class="scheck"/>' +
			'</div>'
		$('.squ').parent('div').append(content)
		$('.helpman').each(function(index) {
			var num = index + 1;
			$(this).addClass('.helpman' + num)
			$(this).children('.sclose').click(function() {
				$(this).parent('div').hide()
			})
			$(this).children('.scheck').click(function() {
				$(this).parent('div').children('.helpt,.hphone').attr('readonly', true)
				$(this).hide()
			})
		})
	})
	//挂钩特使设置
	$('.guadd').click(function() {
		var content =
			'<div class="guman">' +
			'<span  style="margin:0 20px 0 80px">姓名</span>' +
			'<input type="text" class="ipt gut wtw "/>' +
			'<span class="green" style="margin-left:70px">联系电话 </span><input type="text" class="ipt mar15 wtw guphone"/>' +
			'<img src="../image/hclose.svg" class="gclose"/>' +
			'<img src="../image/对1.svg" class="gcheck"/>' +
			'</div>'
		$('.tshi').parent('div').append(content)
		$('.guman').each(function(index) {
			var num = index + 1;
			$(this).addClass('.guman' + num)
			$(this).children('.gclose').click(function() {
				$(this).parent('div').hide()
			})
			$(this).children('.gcheck').click(function() {
				$(this).parent('div').children('.gut,.guphone').attr('readonly', true)
				$(this).hide()
			})
		})
	})
	//挂钩志愿者设置
	$('.gzadd').click(function() {
		var content =
			'<div class="gzman">' +
			'<span  style="margin:0 20px 0 80px">姓名</span>' +
			'<input type="text" class="ipt gzt wtw "/>' +
			'<span class="green" style="margin-left:70px">联系电话 </span><input type="text" class="ipt mar15 wtw gzphone"/>' +
			'<img src="../image/hclose.svg" class="gzclose"/>' +
			'<img src="../image/对1.svg" class="gzcheck"/>' +
			'</div>'
		$('.tzhi').parent('div').append(content)
		$('.gzman').each(function(index) {
			var num = index + 1;
			$(this).addClass('.gzman' + num)
			$(this).children('.gzclose').click(function() {
				$(this).parent('div').hide()
			})
			$(this).children('.gzcheck').click(function() {
				$(this).parent('div').children('.gzt,.gzphone').attr('readonly', true)
				$(this).hide()
			})
		})
	})
})