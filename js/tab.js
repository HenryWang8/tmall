window.onload=function()
{	

	//选项卡
	var onearr=[];
	var twoarr=[];
	var threearr=[];
	var fourarr=[];
	var remenlistcenteroneone=$(".remenlist-center-oneone");
	var title=$(".rementitle-center-li");
	var huanyipizi=$(".huanyipizi")[0];
	for(var i=1;i<25;i++)
	{
		onearr.push("./images/"+i+".png");
		twoarr.push("./images/"+i+".png");
		threearr.push("./images/"+i+".png");
		fourarr.push("./images/"+i+".png");
	}
	function randomimg(arr)
	{
		var newarr=[];
		for(var i=0;i<24;i++)
		{
			var dizhi=arr[parseInt(Math.random()*24)];
			newarr.push(dizhi);
		}
		return newarr;
	}
	var arr=[onearr,twoarr,threearr,fourarr];
	// var divs;
	// var imgss;
	function show(num)
	{
		var imgarr=randomimg(arr[num]);
		for(var i=0;i<imgarr.length;i++)
		{
			var divs=document.createElement("div");
			var as=document.createElement("a");
			var imgs=document.createElement("img");
			var imgss=document.createElement("img");
			as.href="#";
			imgss.src="./images/pinpaibj.png";
			imgs.src=imgarr[i];
			imgss.style.cssText="width:15px;height:12px;position:absolute;top:5px;right:5px;display:none;"
			imgs.style.cssText="width:88px;height:53px;position:absolute;top:13px;left:22px;"
			divs.style.cssText="width:132px;height:79px;margin-right:2px;margin-bottom:2px;float:left;background:white;position:relative"
			divs.appendChild(as);
			as.appendChild(imgs);
			divs.appendChild(imgss);
			remenlistcenteroneone[num].appendChild(divs);

			// alert(imgss)
		}
	}
	show(0);
	for(var i=0;i<title.length;i++)
	{
		title[i].index=i;
		title[i].flag=true;
		title[0].flag=false;
		var now=0;
		title[i].onclick=function()
		{	
			now=this.index;
			for(var j=0;j<remenlistcenteroneone.length;j++)
			{
				remenlistcenteroneone[j].style.display="none";
				title[j].style.fontWeight="normal";
				title[j].style.textDecoration="none";
			}
			remenlistcenteroneone[this.index].style.display="block";
			title[this.index].style.fontWeight="bold";
			title[this.index].style.textDecoration="underline";
			if(this.flag)
			{
				show(this.index);
				this.flag=false;
			}
			
		}
	}
	huanyipizi.onclick=function()
	{
		remenlistcenteroneone[now].innerHTML="";
		show(now);
	}
	//滑上显示桃心（有问题）
	var taoxinhezi=$(".taoxinhezi");
	var taoxin=$(".taoxin");
	for(var i=0;i<taoxinhezi.length;i++)
	{	
		taoxinhezi[i].index=i;
		hover(taoxinhezi[i],function()
		{
			taoxin[this.index].style.display="block";
		},function()
		{
			taoxin[this.index].style.display="none";
		})
	}
	/*alert(divs.length)
			 for(var j=0;j<divs.length;j++)
	{	
		divs[j].index=j;
		divs[j].onmouseover=function()
				 {
				 	imgss[this.index].style.display="block";
				 }
		divs[j].onmouseout=function()
				 {
				 	imgss[this.index].style.display="none";
				 }
	}	*/
	//鼠标滑上显示桃心
	// var remenlistcenter1li=getclass("remenlist-center1li");
	// var remenxiaotaohong=getclass("remenxiaotaohong");
	// for(var i=0;i<remenlistcenter1li.length;i++)
	// {	
	// 	remenlistcenter1li[i].index=i;
	// 	remenlistcenter1li[i].onmouseover=function()
	// 	{
	// 		remenxiaotaohong[this.index].style.display="block";
	// 	}
	// 	remenlistcenter1li[i].onmouseout=function()
	// 	{
	// 		remenxiaotaohong[this.index].style.display="none";
	// 	}
	// }
	//文本框默认值消失和显示
	var shurukuang=$(".shurukuang")[0];
	shurukuang.onfocus=function()
	{
		if(shurukuang.value=="猫猫狗狗购物狂欢，给它最好的")
		{
			shurukuang.value="";
		}
	}
	shurukuang.onblur=function()
	{
		if(shurukuang.value=="")
		{
			shurukuang.value="猫猫狗狗购物狂欢，给它最好的";
		}
	}
	//顶部文本框默认值消失和显示
	var dingsousuoyou=$(".dingsousuoyou")[0];
	dingsousuoyou.onfocus=function()
	{
		if(dingsousuoyou.value=="魅力惠入驻！时尚轻奢首选")
		{
			dingsousuoyou.value="";
		}
	}
	dingsousuoyou.onblur=function()
	{
		if(dingsousuoyou.value=="")
		{
			dingsousuoyou.value="魅力惠入驻！时尚轻奢首选";
		}
	}
	//banner图轮播
	var bannerbox=$(".bannerbox")[0];
	var banner1jpg=$(".banner1jpg");
	var bannerqiehuan=$(".bannerqiehuan");
	var num=1;
	var colorarr=["#dcdcdc","#bc12fb","#63ccad","#fff701","#dedede","#63ccad"]
	function move()
	{
		if(num==6)
		{
			num=0;
		}
		for(var i=0;i<banner1jpg.length;i++)
		{
			banner1jpg[i].style.zIndex=2;
			bannerqiehuan[i].style.background="black";
		}
		banner1jpg[num].style.zIndex=3;
		bannerqiehuan[num].style.background="red";
		bannerbox.style.background=colorarr[num];
		num++;
	}
	var t=setInterval(move,2000);
	for(var i=0;i<bannerqiehuan.length;i++)
	{	
		bannerqiehuan[i].index=i;
		bannerqiehuan[i].onmouseover=function()
		{
			clearInterval(t);
			for(var j=0;j<banner1jpg.length;j++)
			{
				banner1jpg[j].style.zIndex=2;
				bannerqiehuan[j].style.background="black";
			}
			banner1jpg[this.index].style.zIndex=3;
			bannerqiehuan[this.index].style.background="red";
			bannerbox.style.background=colorarr[this.index];
		}
		bannerqiehuan[i].onmouseout=function()
		{
			t=setInterval(move,2000);
			num=this.index+1;
		}
	}
	//右侧固定导航动效
	var cenavlist=$(".cenavlist");
	var yinxiao=$(".yinxiao");
	var cenavlistdalibao=$(".cenavlistdalibao")[0];
	var yinerweima=$(".yinerweima")[0];
	var fanhuidingbu=$(".fanhuidingbu")[0];
	/*var cedegouwu=$(".cedegouwu")[0];
	cedegouwu.onmouseover=function()
	{
		cedegouwu.style.background="red";
	}
	cedegouwu.onmouseout=function()
	{
		cedegouwu.style.background="black";
	}*/
	for(var i=0;i<cenavlist.length;i++)
	{	
		cenavlist[i].index=i;
		cenavlist[i].onmouseover=function()
		{
			cenavlist[this.index].style.background="red";
			animate(yinxiao[this.index],{opacity:1,width:76},300,Tween.Linear);
			yinxiao[this.index].style.display="block";
		}
		cenavlist[i].onmouseout=function()
		{	
			/*for(var j=0;j<yinxiao.length;j++)
			{	
				yinxiao[j].index=j;*/
				cenavlist[this.index].style.background="black";
				animate(yinxiao[this.index],{opacity:0,width:0},200,Tween.Linear/*,function()
					{
						yinxiao[this.index].style.display="none";
					}*/);
				
			// }
				
		}
	}
	cenavlistdalibao.onmouseover=function()
	{
		cenavlistdalibao.style.background="red";
		yinerweima.style.display="block";
	}
	cenavlistdalibao.onmouseout=function()
	{
		cenavlistdalibao.style.background="black";
		yinerweima.style.display="none";
	}
	//楼层跳转
	var leftloucengtiaozhuan=$(".leftloucengtiaozhuan")[0];
	var btn=$("li",leftloucengtiaozhuan);
	var floors=$(".louceng");
	var dingsousuo=$(".dingsousuo")[0];
	var flag1=true;
	var flag2=true;
	var guanggao1=$(".guanggao11");//按需加载图片
	var cw=getCW();
	var ch=getCH();
	var cenav=$(".cenav")[0];//侧导航的高度
	window.onresize=function()
	{
		cw=getCW();
		ch=getCH();
	}
	cenav.style.height=ch+"px";
	window.onscroll=function()
	{	
		var scrollT=getScrollT();
		if(scrollT>=1000&&scrollT<=6700)
		{
			leftloucengtiaozhuan.style.display="block";
		}
		else
		{
			leftloucengtiaozhuan.style.display="none";
		}
		for(var i=0;i<floors.length;i++)
		{
			if(scrollT>=(floors[i].offsetTop-130))
			{
				for(var j=0;j<btn.length;j++)
				{
					btn[j].style.background="white";
				}
				btn[i].style.background="red";
			}
		}
		if(scrollT>=700)//顶部搜索栏出现与消失
		{
			if(flag1)
			{
				animate(dingsousuo,{top:0},600,Tween.Linear);
				flag1=false;
				flag2=true;
			}
		}	
		else
		{	
			if(flag2)
			{
				animate(dingsousuo,{top:-50},600,Tween.Linear)
				flag2=false;
				flag1=true;
			}
			
		}
		if(scrollT>=40)//右侧返回顶部的
		{
			fanhuidingbu.style.display="block";
		}
		else
		{
			fanhuidingbu.style.display="none";
		}
		fanhuidingbu.onclick=function()
		{
			var obj=document.documentElement.scrollTop?document.documentElement:document.body;
			animate(obj,{scrollTop:0})
		}
		//按需加载图片
		for(var i=0;i<guanggao1.length;i++)
		{
			if(guanggao1[i].offsetTop<(scrollT+ch))
			{
				var guanggao1tu=$("img",guanggao1[i]);
				for(var j=0;j<guanggao1tu.length;j++)
				{
					guanggao1tu[j].src=guanggao1tu[j].getAttribute("aa");
				}	
			}
		}
	}	
	
	
	for(var i=0;i<btn.length;i++)
	{	
		btn[i].index=i;
		btn[i].onclick=function()
		{
			var obj=document.documentElement.scrollTop?document.documentElement:document.body;
			animate(obj,{scrollTop:floors[this.index].offsetTop-100})
		}
	}

	//楼层左边的轮播图
	var xiaobannerbox=$(".xiaobannerbox");
	for(var i=0;i<xiaobannerbox.length;i++)
	{
		xiaolunbo(i);
	}
	

	//鼠标滑上移动
	var yidong=$(".yilouright-top1");
	for(var i=0;i<yidong.length;i++)
	{	
		yidong[i].index=i;
		yidong[i].onmouseover=function()
		{
			yidong[this.index].style.left=-2+"px";
			yidong[this.index].style.top=-2+"px";
			// yidong[this.index].style.boxShadow=0+"px";5+"px";20+"px";"red";
		}
		yidong[i].onmouseout=function()
		{
			yidong[this.index].style.left=0+"px";
			yidong[this.index].style.top=0+"px";
		}
	}
	var yidongtwo=$(".yilouright-bottom1");
	for(var i=0;i<yidongtwo.length;i++)
	{	
		yidongtwo[i].index=i;
		yidongtwo[i].onmouseover=function()
		{
			yidongtwo[this.index].style.left=-2+"px";
			yidongtwo[this.index].style.top=-2+"px";
		}
		yidongtwo[i].onmouseout=function()
		{
			yidongtwo[this.index].style.left=0+"px";
			yidongtwo[this.index].style.top=0+"px";
		}
	}
	//banner图左边导航第一行拓展
	var bannerleftdaohang1=$(".bannerleftdaohang1")[0];
	var navtuozhan=$(".navtuozhan")[0];
	bannerleftdaohang1.onmouseover=function()
		{	
			navtuozhan.style.display="block";
			animate(navtuozhan,{left:182,opacity:1},1,Tween.Linear);
		}
		bannerleftdaohang1.onmouseout=function()
		{	
			animate(navtuozhan,{left:225,opacity:0},1,Tween.Linear);

		}
	//banner图左边导航第一行下面的拓展
	var bannertu2dingwei=$(".bannertu2dingwei")[0];
	var youbianimg=$("img",bannertu2dingwei);
	var bannerleftdaohang=$(".bannerleftdaohang");
	var bannerkuozhande=$(".bannerkuozhande");
	var tupianhezi=$(".tupianhezi");
	var colorchang=["#dcdcdc","#bc12fb","#63ccad","#fff701","#dedede","#63ccad","#dcdcdc","#bc12fb","#63ccad","#fff701","#dedede","#63ccad","#fff701","#dedede","#63ccad"]
	for(var i=0;i<bannerleftdaohang.length;i++)
	{	
		bannerleftdaohang[i].index=i;
		bannerleftdaohang[i].onmouseover=function()
		{
			// var ev=e||window.event;
			// if(ev.stopPropagation)
			// {
			// 	return ev.stopPropagation;
			// }
			// else
			// {
			// 	return ev.cancleBubble=true;
			// }
			for(var j=0;j<tupianhezi.length;j++)
			{
				tupianhezi[j].style.display="none";
				youbianimg[j].style.display="none";
			}
			youbianimg[this.index].style.display="block";
			bannerbox.style.background=colorchang[this.index];
			tupianhezi[this.index].style.display="block";
			animate(bannerkuozhande[this.index],{width:720},10);
			bannerleftdaohang[this.index].style.width="180px";
			bannerleftdaohang[this.index].style.paddingLeft="10px";
			clearInterval(t);
		}
		bannerleftdaohang[i].onmouseout=function()
		{	
			for(var j=0;j<tupianhezi.length;j++)
			{
				tupianhezi[j].style.display="none";
			}
			animate(bannerkuozhande[this.index],{width:0},10);
			bannerleftdaohang[this.index].style.width="190px";
			bannerleftdaohang[this.index].style.paddingLeft="0px";
			t=setInterval(move,2000);
		}
	}
	// for(var i=0;i<bannerkuozhande.length;i++)
	// {	
	// 	bannerkuozhande[i].onmouseover=function()
	// 	{
	// 		t=setInterval(move,2000);
	// 	}
	// }
		
	//下拉菜单
	var mainnavrightliimg22=$(".mainnavright-liimg22");
	var taobaoxiala=$(".taobaoxiala");
	var shangjiaxiala=$(".shangjiaxiala")[0];
	for(var i=0;i<mainnavrightliimg22.length;i++)
	{	
		mainnavrightliimg22[i].index=i;
		mainnavrightliimg22[i].onmouseover=function()
		{	
			var taobaoxialatop=$(".taobaoxialatop");
			var len=taobaoxialatop.length/mainnavrightliimg22.length;
			var hh=taobaoxialatop[0].offsetHeight;
			mainnavrightliimg22[this.index].style.background="white";
			animate(taobaoxiala[this.index],{height:len*hh},200,Tween.Linear)
		}
		mainnavrightliimg22[i].onmouseout=function()
		{
			mainnavrightliimg22[this.index].style.background="#f2f2f2";
			animate(taobaoxiala[this.index],{height:0},200,Tween.Linear)
		}
	}
	//商家支持下拉菜单
	var mainnavrightliimgshang=$(".mainnavright-liimgshang")[0];
	var shangjiaxiala=$(".shangjiaxiala")[0];
	hover(mainnavrightliimgshang,function()
	{
		mainnavrightliimgshang.style.background="white";
		animate(shangjiaxiala,{height:172},200,Tween.Linear)
	},function()
	{
		mainnavrightliimgshang.style.background="#ecf2f0";
		animate(shangjiaxiala,{height:0},200,Tween.Linear)
	})
	//网站导航下拉菜单
	var mainnavrightdaohangtuo=$(".mainnavrightdaohangtuo")[0];
	var maindaohangzhan=$(".maindaohangzhan")[0];
	hover(mainnavrightdaohangtuo,function()
	{
		animate(maindaohangzhan,{height:256},200,Tween.Linear)
	},function()
	{
		animate(maindaohangzhan,{height:0},200,Tween.Linear)
	})
	var shoujibanbenli=$(".shoujibanbenli")[0];
	var shoujibanbenerweima=$(".shoujibanbenerweima")[0];
	hover(shoujibanbenli,function()
	{
		animate(shoujibanbenerweima,{height:230},200,Tween.Linear)
	},function()
	{
		animate(shoujibanbenerweima,{height:0},200,Tween.Linear)
	})


}