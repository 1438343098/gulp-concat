
	function wpdmodi() {
		window.location.href = "../templates/changepwd.html"
	}
	
	function exit() {
		r = confirm("是否退出登录?")
		if(r == true) {
			window.location.href = "login.html"
		}
	}
	function search(){
		window.location.href='../templates/search.html'
	}
$(function(){
	$('.enterclose').click(function(){
		$('.entercont').hide()
	})
})

