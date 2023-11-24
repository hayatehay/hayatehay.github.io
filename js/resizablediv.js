	$ = function(idName){ return document.getElementById(idName); }
	getWindowSize = function(){
		var ua = navigator.userAgent;
		var nHit = ua.indexOf("MSIE");
		var bIE = (nHit >= 0);
		var obj = new Object()
		var bVer6 = (bIE && ua.substr(nHit+5, 1) == "6");
		var bStd = (document.compatMode && document.compatMode=="CSS1Compat");
		if (bIE) {
			if (bVer6 && bStd) {
				obj.width = document.documentElement.clientWidth;
				obj.height = document.documentElement.clientHeight;
			} else {
				obj.width = document.body.clientWidth;
				obj.height = document.body.clientHeight;
			}
		} else {
			obj.width = window.innerWidth;
			obj.height = window.innerHeight;
		}
		return obj;
	}
	resize = function(){
//		var fh = bIE ? 136 : 136;
		$("main").style.height=getWindowSize().height -116 + "px";
	}
	window.onload  = resize;
	window.onresize = resize;
	a = function(src){ return eval("String.fromCharCode("+src+")"); }
	f = function(idName){
		$(idName).style.backgroundColor = "#602030";
		setTimeout("$('" +idName +"').style.backgroundColor = ''" ,50);
	}
