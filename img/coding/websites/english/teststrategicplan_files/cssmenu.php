


/* GET INTERNET EXPLORER TO WORK WITH LI:HOVER */
body
{	behavior:url("/website-look/php/javascript/csshover.htc");
}
/* PUT THE MENU ABOVE EVERYTHING ELSE */
div#header2menus, div#globalnav
{z-index:10;}

/*********************************************************/
/*************** GOLD MENU SECTION ***********************/
/*********************************************************/

/******************* GENERAL BEHAVIORS *******************/

.globalnav {position:relative;z-index:5;padding:0em;margin:0em;overflow:visible;white-space:nowrap;z-index:15;}

div#gold-menu *
{	padding:0em;			margin:0px; 
}
div#gold-menu{z-index:80;height:2.083em;overflow:visible;white-space:nowrap;/*margin:0em;float:left;
	padding-left:0.667em;position:relative;*/ display:block;margin-left:0px; margin-right:auto;padding-bottom:0px;
	/*pmj 06/23/2011 added to stop the wrapping on zoom */
	font-size:  99.9%;
	width:99.9%;
	/*width: 1020px;*/
	clear: both;
}
/** html div#gold-menu
{	width:85.333em;
}*/
div#gold-menu ul
{	list-style:none;white-space:nowrap;}

div#gold-menu a
{	color:#870023;			font-family: Arial, Helvetica, sans-serif;
	font-size:.99em;
	text-decoration:none;	display:block;
}
div#gold-menu a:hover
{	color:#990033;	}
div#gold-menu img#expand
{	display:inline;			
	border:none;
	float:right;
	position:relative;		
	margin-top:5px; 
	z-index:100;
}
/******************* MENU FUNCTION ***********************/
/* HIDE MENUS NOT IN USE */
div#gold-menu ul ul, div#gold-menu li:hover ul ul
{	display:none;	}
/* SHOW MENUS IN USE */
div#gold-menu li:hover ul, div#gold-menu li:hover li:hover ul
{	display:block;	}
/****************** LEVEL 1 MENU (HEADERS) **************/
div#gold-menu ul li
{	float:left;	position:relative;	z-index:80;}
div#gold-menu ul li a
{	padding:0.417em 0.917em 0.333em 1.31em;
	background-image:url("/website-look/php/images/yellow.jpg");
	background-position:0em 0.833em; background-repeat:no-repeat;
	line-height:1.333em;
}
/*pmj 07082011 added this to keep the menu from wrapping */
div#gold-menu ul li:last-child a
{	padding:0.417em 0em 0.333em 1.31em;
}

/****************** LEVEL 2 MENUS ***********************/
div#gold-menu ul ul 
{	position:absolute;		z-index:80;
	/*margin-left:-1.083em;*/				top:1.667em;
	
}
div#gold-menu ul ul a
{	background-color:#fff;	background-image:none;
	width:8.333em;	line-height:1.5em;	overflow:hidden;
	height:1.5em;
	padding:0em 0.417em 0.167em 0.833em;
	/*opacity:0.9;		 CSS3 standard */
	/*-moz-opacity:0.9;	 for Mozilla */
	position:relative;		z-index:80;
}
/* * html div#gold-menu ul ul a
{	filter:alpha(opacity=90);	IE transparency 
}*/
/*pmj 07082011 added this to keep the menu from wrapping on main categories, added this to override padding for second level menus*/
div#gold-menu ul li ul li:last-child a
{	padding:0em 0.417em 0.167em 0.833em;
}
div#gold-menu ul li:last-child ul li a
{	padding:0em 0.417em 0.167em 0.833em;
}
/****************** LEVEL 3 MENUS ***********************/
div#gold-menu ul ul ul
{	/*margin-left:-15px;	*/	top:0em;	border-top:none;	}
/****************** SPECIAL MENUS ***********************/
div#gold-menu ul#aboutgpc
{	left:1.5em;z-index:20;}
div#gold-menu ul#insideGPC
{	left:-7.75em;	}
div#gold-menu ul#academics
{	left:1.5em;	}
div#gold-menu ul#admissions
{	left:1.5em;	}
div#gold-menu ul#financial
{	left:1.5em;	}
div#gold-menu ul#campus
{	left:1.5em;	}
div#gold-menu ul#online
{	left:1.5em;	}
div#gold-menu ul#news
{	left:1.5em;	}
div#gold-menu ul#student
{	left:1.5em;	}
div#gold-menu ul#insideGPC ul#openLeft
{	left:-9.583em !important;	}
/****************** IE HACKS FOR FRONT PAGE ************
* html div#homepagewrapper div#gold-menu
{ width:63.917em;}*/
/****************** IE HACKS FOR SUBPAGES **************
* html div#pagewrapper div#gold-menu ul ul a
{height:1.75em;}
* html div#pagewrapper div#gold-menu ul ul ul a
{left:-1.25em;}
* html div#pagewrapper div#gold-menu ul#insideGPC ul#openLeft
{left:-7.083em !important;}
* html div#pagewrapper div#gold-menu ul#insideGPC
{left:-4.833em;}*/

/*********************************************************/
/**************** RED MENU SECTION ***********************/
/*********************************************************/

/******************* GENERAL BEHAVIORS *******************/

div#red-menu{position:relative;z-index:100;
    padding:0em;margin:0px;overflow:visible;white-space:nowrap;
	width:20em;}
div#red-menu ul{list-style:none;margin-left:-0.833em;margin-top:0.917em;}
div#red-menu a{color:#FFFFFF;font-family: "Trebuchet MS";text-decoration:none;display:block;}
div#red-menu a:link{color:#ffffff;font-size:1em;}
div#red-menu a:visited{color:#ffffff;}
div#red-menu a:hover{color:#FFCC33;}
div#red-menu img#expand{display:inline;	border:none;float:right;position:relative;top:-0.917em;}

/******************* MENU FUNCTION ***********************/
/* HIDE MENUS NOT IN USE */
div#red-menu ul ul, div#red-menu li:hover ul ul
{	display:none;	}
/* SHOW MENUS IN USE */
div#red-menu li:hover ul, div#red-menu li:hover li:hover ul
{	display:block;	}
/****************** LEVEL 1 MENU (HEADERS) **************/
div#red-menu ul li
{	float:left;	position:relative;
		/*z-index:15;*/	}
div#red-menu ul li a
{	margin-top:0.417em;
    padding: 0em 0.7em 0.167em 0.833em;
	/*background-image:url(/StyleGuide/php/css/images/vertical-bar-white.gif);*/
	background-position:left center; background-repeat:no-repeat;
	line-height:0.833em;
}
div#red-menu ul li:last-child a
{	padding: 0em 0em 0.167em 0.833em;
}
/****************** LEVEL 2 MENUS ***********************/
div#red-menu ul ul
{	position:absolute;		z-index:100;
	left:0em;				top:0.333em;
}
div#red-menu ul ul a
{	margin-top:0em;
	background-color:#870023;	background-image:none;
	width:8.333em;	height:1.5em;	overflow:hidden;
	line-height:1.5em;
	padding:0.167em 0.417em 0.167em 0.833em;
	/* opacity:0.9;		CSS3 standard */
	/*-moz-opacity:0.9;	 for Mozilla */
	z-index:90;
	
}
/** html div#red-menu ul ul a
{	filter:alpha(opacity=90);	 IE transparency 
}*/ 
/****************** LEVEL 3 MENUS ***********************/
div#red-menu ul ul ul
{	left:10.833em;			top:0px;
	border-top:none;
}
/****************** SPECIAL MENUS ***********************/


/****************** IE HACKS FOR FRONT PAGE ************
* html div#homepagewrapper div#red-menu
{ width:27.333em;}*/
/****************** IE HACKS FOR SUBPAGES **************
* html div#pagewrapper div#red-menu ul ul a
{ height:1.75em; }
* html div#pagewrapper div#red-menu ul ul ul a
{	position:relative;
	left:-1.25em; 
}*/


/*********************************************************/
/*************** DEPT MENU SECTION ***********************/
/*********************************************************/

/******************* GENERAL BEHAVIORS *******************/

.globalnav {position:relative;z-index:5;padding:0px;margin:0px;overflow:visible;white-space:nowrap;z-index:15;}

div#dept-menu *
{	padding:0px;			margin:0px;
}
div#dept-menu{position:relative;z-index:5;padding:0px;margin:0px;width:1045px;height:25px;overflow:visible;white-space:nowrap;float:left;padding-left:10px;padding-bottom:5px;z-index:15;background:#ffffff;margin-top:5px; margin-left:5px;
}
/* html div#dept-menu
{	width:100%;
}*/
div#dept-menu ul
{	list-style:none; margin-top:2px;	}

div#dept-menu a
{	color:#870023;			font-family: Arial, Helvetica, sans-serif;
	font-size:1em;
	text-decoration:none;	display:block;
}
div#dept-menu a:hover
{	color:#990033;	}
div#dept-menu img#expand
{	display:inline;			border:none;
	float:right;
	/*position:relative;	*/	top:-1em; z-index:100;
}
/******************* MENU FUNCTION ***********************/
/* HIDE MENUS NOT IN USE */
div#dept-menu ul ul, div#dept-menu li:hover ul ul
{	display:none;	}
/* SHOW MENUS IN USE */
div#dept-menu li:hover ul, div#dept-menu li:hover li:hover ul
{	display:block;	}
/****************** LEVEL 1 MENU (HEADERS) **************/
div#dept-menu ul li
{	float:left;	position:relative;	/*z-index:15;*/}
div#dept-menu ul li a
{	padding: 5px 22px 4px 22px;
    border-right:1px solid #870023;
	/*background-image:url(http://www.gpc.edu/DEVELOP-SB/gpc-look/images/yellow.jpg);
	background-position:left center; background-repeat:no-repeat;*/
	line-height:16px;
}
div#dept-menu ul li a.first
{	padding: 5px 22px 4px 22px;
	line-height:16px;
}

/****************** LEVEL 2 MENUS ***********************/
div#dept-menu ul ul
{	position:absolute;		z-index:1000;
	left:0px;				top:25px;
	
}
div#dept-menu ul ul a
{	background-color:#fff;	background-image:none;
	width:100px;	line-height:1.5em;	overflow:hidden;
	height:18px;
	padding:2px 5px 2px 10px;
	/*opacity:0.9;		 CSS3 standard */
	/* -moz-opacity:0.9;	for Mozilla */
	position:relative;		z-index:10;
}
/** html div#dept-menu ul ul a
{	filter:alpha(opacity=90);	 IE transparency 
}*/
/****************** LEVEL 3 MENUS ***********************/
div#dept-menu ul ul ul
{	left:130px;	top:0px;	border-top:none;	}
/****************** SPECIAL MENUS ***********************/
div#dept-menu ul#aboutgpc
{	left:0px;z-index:20;}
div#dept-menu ul#insideGPC
{	left:-73px;	}
div#dept-menu ul#insideGPC ul#openLeft
{	left:-115px !important;	}
/****************** IE HACKS FOR FRONT PAGE ************
* html div#homepagewrapper div#dept-menu
{ width:767px;}*/
/****************** IE HACKS FOR SUBPAGES **************
* html div#pagewrapper div#dept-menu ul ul a
{height:21px;}
* html div#pagewrapper div#dept-menu ul ul ul a
{left:-15px;}
* html div#pagewrapper div#dept-menu ul#insideGPC ul#openLeft
{left:-85px !important;}
* html div#pagewrapper div#dept-menu ul#insideGPC
{left:-58px;}*/

/*********************************************************/
div#side-menu ul{list-style:none;}

/****************AUDIENCE-NAV***************************/
ul.audience-nav {list-style-type:none;white-space:nowrap;padding-left:0px;font-size:17px;}
li.audience-nav {display:inline;list-style-type: none;font-family:'Trebuchet MS', Helvetica, sans-serif;color:#FFFFFF;font-size:17px;}
li.audience-nav-last {display:inline;list-style-type: none;padding-right: 20px;font-family:'Trebuchet MS', Helvetica, sans-serif;color:#FFFFFF;border-right:#870023 solid 1px;font-size:19.3px;}
li.audience-nav a{padding:0px 0px 0px 0px;color:#FFFFFF;text-decoration:none;font-size:17px;}
li.audience-nav a.first{padding-left:0px;font-size:17px;}
li.audience-nav a:link{color:#ffffff;font-size:17px;}
li.audience-nav a:visited{color:#ffffff;font-size:17px;}
li.audience-nav a:hover{color:#ffcc33;font-size:17px;}


/*********************breadcrumbs**************************/
#bread ul{margin: 0;padding: 0;list-style-type: none;}

#bread ul li { display: inline;padding-bottom: 10px; color:#7c6a54; }

#bread a{color:#7c6a54; margin-left:5px; }

#bread a.first{margin-left:10px; }