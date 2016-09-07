<?php 
	//1、连接数据库
	$host="localhost";
	$uname="root";
	$upwd="";
	$db="tianmao";
	$link=mysqli_connect($host,$uname,$upwd,$db);
	//2、查询数据表
		//2.1 获取用户请求提交数据
		$name=$_REQUEST["name"];
		//2.2 拼sql语句
		$sql="select * from emp where name='$name'";
		//2.3 查询
		$result=mysqli_query($link,$sql);
	//3、获取查询记录数
	$result_count = mysqli_num_rows($result);
	//4、根据查询结果响应数据给客户端
	if($result_count > 0)
		echo "<p style='color:red;'>用户名称已经存在!</p>";
	else
		echo "<p style='color:green;'>恭喜您，可以注册!</p>";
?>