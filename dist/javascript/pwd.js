			
		$(function(){
			function isIE() 
			{ //ie?
				 if (!!window.ActiveXObject || "ActiveXObject" in window)
				  return true;
				  else
				  return false;
			}
	        if(isIE())
	        {	
	        	//alert(isIE())
	        	function IsPlaceholderSupport(txtId) 
				{	
			         $('#'+txtId).removeAttr('placeholder');  
			   	}
				IsPlaceholderSupport("passport")
				IsPlaceholderSupport("password")
				IsPlaceholderSupport("searched")
				IsPlaceholderSupport("admin")
				IsPlaceholderSupport("mima")
				IsPlaceholderSupport("addinput")
				IsPlaceholderSupport("oldpwd")
				IsPlaceholderSupport("newpwd")
				IsPlaceholderSupport("pwdconfirm")
				IsPlaceholderSupport("modadmin")
				IsPlaceholderSupport("modpwd")
				IsPlaceholderSupport("pwdagain")
				IsPlaceholderSupport("findpwd")
				IsPlaceholderSupport("addfindpwd")
				IsPlaceholderSupport("remarks")
				IsPlaceholderSupport("cityname")
				IsPlaceholderSupport("addcityname")
	        	function CopyPlaceholder(txtId,labelId,text)  
		   	 	{  
			        $("#"+txtId).after("<span id="+labelId+">"+text+"</span>");  
					$("#"+labelId).click(function(){
						$("#"+txtId).focus()
					})
					$('#'+txtId).keydown(function(){
						$('#'+labelId).hide()
						
					})
			        $("#"+txtId).keyup(function(){  
					        if($(this).val()!='')
								{
									$('#'+labelId).hide()
								}else
								{
									$("#"+labelId).show(); 
								}
					})
//			        
		   		 } 
		   		CopyPlaceholder("passport","labelId","请输入账号");  
			    CopyPlaceholder("password","labelId2","请输入密码"); 
			    CopyPlaceholder("searched","labelId3","IMEI/手机/姓名/身份证"); 
			    CopyPlaceholder("pointSearch","labelId4","请输入地理位置");
			    CopyPlaceholder("admin","labelId5","管理员账号(只能是中文)");
			    CopyPlaceholder("mima","labelId6","密码");
			    CopyPlaceholder("addinput","labelId7","请输入...")
			    CopyPlaceholder("oldpwd","labelId8","请输入旧密码")
			    CopyPlaceholder("newpwd","labelId9","请输入新密码")
			    CopyPlaceholder("pwdconfirm","labelId10","请确认新密码")
			    CopyPlaceholder("modadmin","labelId11","管理员账号")
			    CopyPlaceholder("modpwd","labelId12","请输入密码")
			    CopyPlaceholder("pwdagain","labelId13","请再次输入密码")
			    CopyPlaceholder("findpwd","labelId14","请输入邮箱")
			    CopyPlaceholder("remarks","labelId15","请输入...")
			    CopyPlaceholder("cityname","labelId16","请输入城市名称")
			    CopyPlaceholder("addfindpwd","labelId17","请输入邮箱")
			    CopyPlaceholder("addcityname","labelId18","请输入城市名称")
		    }
	        
        	function isTypeText(txtId)
        	{
	        	if($('#'+txtId+'[type="text"]'))
	        	{
	        		$('#'+txtId+'[type="text"]').after('<img class="AccountClose NewClose" src="../image/关闭.svg">')
	        	}
	        	$('#'+txtId+'[type="text"]').keydown(function(){
	        			if($('#'+txtId+'[type="text"]').val()=='')
						{
							document.querySelector('.AccountClose').style.cssText="display: none!important;"
						}
						if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0") 
						{
							$('.imesch').css('position','relative')
							$('.ie9_close').show()
							$('.ie9_close').click(function(){
								$('#searched').val('')
		  						$(this).hide()
		  						$('#labelId3').show()
							})
							$('#searched').keyup(function(){
								if($(this).val()=='')
								{
									$('.ie9_close').hide()
								}
							})
						}else
						{
			  				document.querySelector('.AccountClose').style.cssText='display: inline!important;'
			  				$('.AccountClose').click(function(){
			  					$('#passport').val('')
			  					$('#searched').val('')
			  				document.querySelector('.AccountClose').style.cssText='display: none!important;'
			  					$('#labelId').show()
			  					$('#labelId3').show()
			  				})
				        	$('#'+txtId+'[type="text"]').keyup(function(){
				        		
				        		if($('#'+txtId+'[type="text"]').val()=='')
				        		{
					        			document.querySelector('.AccountClose').style.cssText='display: none!important;'
				        		}
							})
						}
	        	})
        	}
        	isTypeText('passport')
        	isTypeText('searched')
        	function isTypePassword(txtId)
        	{
	  			if($('#'+txtId+'[type="password"]'))
		  			{
						$('#'+txtId+'[type="password"]').after('<img class="pwdSee Newpwd" src="../image/密码.svg">')
						$('#'+txtId+'[type="password"]').keydown(function(){
							if($('#'+txtId+'[type="password"]').val()=='')
							{
								$('.pwdSee').hide()
							}
							if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0")
							{
								document.querySelector('.Newpwd').style.cssText='left:-1000px;'
							}
			  				$('.pwdSee').show()
							$('.pwdSee').mousedown(function(){
								var passId=document.getElementById('password')
								passId.type='text'
							})
							$('.pwdSee').mouseup(function(){
								var passId=document.getElementById('password')
								passId.type='password'
							})
			  			})
						$('#'+txtId+'[type="password"]').keyup(function(){
							if($('#'+txtId+'[type="password"]').val()=='')
							{
								$('.pwdSee').hide()
							}
						})
	  				}
	  		}	
  			isTypePassword('password')
		})