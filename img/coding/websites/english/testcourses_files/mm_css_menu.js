
var mmOpenContainer = null;
var mmOpenMenus = null;
var mmHideMenuTimer = null;
// Extended CSSMenu v. 0.9b (www.zaporozhye.org/dreamworld/)
// modification begin
var pref="progid:DXImageTransform.Microsoft."
var sngs=[10,135,85,0,"#7B869A",1];
var ieStyle=false;
var mozStyle=false;
function setFilter(opObj,ieStyle,mozStyle){
	var f;
	if(ieStyle){
		if(sngs[3]>0)f = pref+"Shadow(Color="+sngs[4]+",direction="+sngs[1]+",strength="+sngs[3]+")";
		else if(sngs[3]<0)f = pref+"Glow(Color="+sngs[4]+",strength="+(-sngs[3])+")";
	opObj.style.filter=(sngs[5]?"alpha(opacity="+sngs[2]+")":"")+" "+f;
	}else if(mozStyle)opObj.style.MozOpacity=(sngs[5]&&sngs[2]!=100)?(sngs[2]/100):"0.999";
}
// Extended CSSMenu v. 0.9b modification end

function MM_menuStartTimeout(hideTimeout) {
	mmHideMenuTimer = setTimeout("MM_menuHideMenus()", hideTimeout);
}

function MM_menuHideMenus() {
	MM_menuResetTimeout();
	if(mmOpenContainer) {
		var c = document.getElementById(mmOpenContainer);
		c.style.visibility = "inherit";
		mmOpenContainer = null;
	}
	if( mmOpenMenus ) {
		for(var i in mmOpenMenus) {
			var m = document.getElementById(mmOpenMenus[i]);
			m.style.visibility = "hidden";
		}
		mmOpenMenus = null;
	}
}

function MM_menuHideSubmenus(menuName) {
	if( mmOpenMenus ) {
		var h = false;
		var c = 0;
		for(var i in mmOpenMenus) {
			if( h ) {
				var m = document.getElementById(mmOpenMenus[i]);
				m.style.visibility = "hidden";
			} else if( mmOpenMenus[i] == menuName ) {
				h = true;
			} else {
				c++;
			}
		}
		mmOpenMenus.length = c+1;
	}
}

function MM_menuOverMenuItem(menuName, subMenuSuffix) {
	MM_menuResetTimeout();
	MM_menuHideSubmenus(menuName);
	if( subMenuSuffix ) {
		var subMenuName = "" + menuName + "_" + subMenuSuffix;
		MM_menuShowSubMenu(subMenuName);
	}
}

function MM_menuShowSubMenu(subMenuName) {
	MM_menuResetTimeout();
	var e = document.getElementById(subMenuName);
// Extended CSSMenu v. 0.9b (www.zaporozhye.org/dreamworld/)
// modification begin
	ieStyle=(e.style.filter!=undefined);
	mozStyle=(e.style.MozOpacity!=undefined);
	if(ieStyle||mozStyle)setFilter(e,ieStyle,mozStyle);
// Extended CSSMenu v. 0.9b modification end
	e.style.visibility = "inherit";
	if( !mmOpenMenus ) {
		mmOpenMenus = new Array;
	}
	mmOpenMenus[mmOpenMenus.length] = "" + subMenuName;
}

function MM_menuResetTimeout() {
	if (mmHideMenuTimer) clearTimeout(mmHideMenuTimer);
	mmHideMenuTimer = null;
}

function MM_menuShowMenu(containName, menuName, xOffset, yOffset, triggerName) {
	MM_menuHideMenus();
	MM_menuResetTimeout();
	MM_menuShowMenuContainer(containName, xOffset, yOffset, triggerName);
	MM_menuShowSubMenu(menuName);
}

function MM_menuShowMenuContainer(containName, x, y, triggerName) {
	var c = document.getElementById(containName);
	var s = c.style;
	s.visibility = "inherit";
	mmOpenContainer = "" + containName;
}
function MM_findObj(n, d) { //v4.01
	var p,i,x;
	if(!d) d=document;
	if((p=n.indexOf("?"))>0&&parent.frames.length){d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	if(!(x=d[n])&&d.all) x=d.all[n];
	for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	if(!x && d.getElementById) x=d.getElementById(n);
	return x;
}
function MM_swapImage() { //v3.0
	var i,j=0,x,a=MM_swapImage.arguments;
	document.MM_sr=new Array;
	for(i=0;i<(a.length-2);i+=3)
		if ((x=MM_findObj(a[i]))!=null)
		{document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_swapImgRestore() { //v3.0
	var i,x,a=document.MM_sr;
	for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
	var d=document;
	if(d.images)
	{	if(!d.MM_p) d.MM_p=new Array();
		var i,j=d.MM_p.length,a=MM_preloadImages.arguments;
		for(i=0; i<a.length; i++)
			if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}
	}
}
