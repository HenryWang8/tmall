function createXhr(){
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();	
	}else{
		return new ActiveXObject("Microsoft.XMLHttp");	
	}
}

$(document).ready(function(){
	$("#username").blur(function(){
		var xhr = createXhr();
		var name = $("#username").val();
		var url = "checkname.php?name="+name;
		xhr.open("get",url,true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				var resText = xhr.responseText;
				$("#retuser").html(resText);
			}	
		}
		xhr.send(null);
	});
	$("#password").blur(function(){
		var pwdlength=$("#password").val().length;
		if(pwdlength>=6 && pwdlength<=10){
			$("#retpwd").html('<p style="color:green;">通过！</p>');
		}else{
			$("#retpwd").html('<p style="color:red;">密码由6-10位字母、数字组成！</p>');
		}
	});
	$("#password1").blur(function(){
		if($("#password").val()==$("#password1").val()){
			$("#retpwd1").html('<p style="color:green;">通过！</p>');
		}else{
			$("#retpwd1").html('<p style="color:red;">两次输入的密码不一样！</p>');
		}
	});
	$("#phone").blur(function(){
		if(/^1[3|4|5|7|8]\d{9}$/.test($("#phone").val())){
			$("#retphone").html('<p style="color:green;">通过！</p>');
		}else{
			$("#retphone").html('<p style="color:red;">手机号码有误，重填！</p>');
		}
	});
	$("#regis").click(function(){
		if($("#retuser").val()=="恭喜您，可以注册!"){
			alert(1);
		}	
	});
});