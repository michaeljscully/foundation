// Plugin created by Brock Nusser - http://brocknusser.com
// Demo site: http://mlamenu.brocknusser.com/index.htm
// Download: http://mlamenu.brocknusser.com/mlamenu.zip

/*
SETUP
*/
var navWidth = 180;         //in pixels
var ulIndent = 15;          //in pixels
var slideSpeed = 'medium';    // 'slow', 'normal', 'fast', or miliseconds 
//end setup

var pathname = window.location.pathname;

$(function() {


    $('#nav').css('width', navWidth + 'px');
    $('#nav ul').css('width', navWidth + 'px');
    $('#nav ul').css('margin-left', ulIndent + 'px');

    $('#nav a').each(function() {
    var level = $(this).parents('ul').length;
    var liWidth = navWidth - (ulIndent * level) + 30;
    $(this).parent('li').css('width', liWidth + 'px');
    });    

    /*
        add 'Current' class to the current page
    */
    $('#nav a').each(function() {
        var thisHref = $(this).attr('href')
//CHANGED pathname TO href        if ((window.location.pathname.indexOf(thisHref) == 0) || (window.location.pathname.indexOf('/' + thisHref) == 0)) {
        if ((window.location.href.indexOf(thisHref) == 0) || (window.location.href.indexOf('/' + thisHref) == 0)) {
        $(this).addClass('Current');
    }
    });

    /*
        display the current page
    */
    $('.Current').parent('li').children('ul').show();
    $('.Current').parents('ul').show();
//    $('.Current').parent('li').children('ul').slideDown();
//    $('.Current').parents('ul').slideDown();


    /*
        add expand/collapse icons
    */
//    $('#nav li').each(function () {
//        if ($(this).children('ul').length > 0) {
//            if ($(this).children('ul').is(":visible")) {
//                $(this).prepend('<img src="images/imgOnOpen.gif" />');
//            }
//            else {
//                $(this).prepend('<img src="images/imgOffClosed.gif" />');
//            }
//        }
//    });
    
    /*
        open/close current each list on click
    */
//    $('#nav img').click(function() {
    $('#nav a').click(function() {
//added in to make nested links clickable
        if($(this).attr('href') == '#') {
// end changes
        if ($(this).parent('li').children('ul').html() != null) {
//            $(this).parent('li').parent('ul').children('li').children('ul').hide(slideSpeed);
//UNCOMMENTING NEXT LINE CHANGES IT FROM SLIDING MENU TO ACCORDION-STYLE
            $(this).parent('li').parent('ul').children('li').children('ul').slideUp(slideSpeed);
            $(this).parent('li').parent('ul').children('li').children('img').attr('src', 'images/imgOffClosed.gif');
            $(this).delay(100).is(':hidden');
            if ($(this).parent('li').children('ul').css('display') == "block") {
//                $(this).parent('li').children('ul').hide(slideSpeed);
                $(this).parent('li').children('ul').slideUp(slideSpeed);
                $(this).attr('src', 'images/imgOffClosed.gif');
            } else {
//                $(this).parent('li').children('ul').show(slideSpeed);
                $(this).parent('li').children('ul').slideDown(slideSpeed);
                $(this).attr('src', 'images/imgOnOpen.gif');
            }
            return false;
        }
		}
    });

    //End Required Section
    
    //Optional Section - Show Carrots
    var imgOffClosed = "url(images/imgOffClosed.gif) no-repeat 5px ";
    var imgOnClosed = "url(images/imgOnClosed.gif) no-repeat 5px ";
    var imgOnOpen = "url(images/imgOnOpen.gif) no-repeat 5px ";
    var charBeforeLB = 23; //characters before line break - you must calculate this - based on font-size and LI width;
    var paddingBig = 12; //push carrot arrow down (in pixels) when no there is a line break in the LI
    var paddingSmall = 8;  //push carrot arrow down (in pixels) when no there is no line break in the LI
    var maxLIHeight = 50; // max height of LI when list is closed

    /*
        Logic to decide whether current list is open,
        and determine how much padding to give the expand/collapse icons .  
    */
    $('#nav > li').each(function() {
        var childText = $(this).children('a').text();
        var topPadding = paddingBig;
        if (childText.length < charBeforeLB) {
            topPadding = paddingSmall; 
        }
        //if list is closed
        if ($(this).height() < maxLIHeight) {
            if ($(this).children('a').attr('class') == "Current") {
                $(this).parent('li').children('img').attr('src', 'images/imgOnOpen.gif');
            } else {
                $(this).parent('li').children('img').attr('src', 'images/imgOffClosed.gif');
            }
        }
        //if list is open
        else {
            $(this).children('img').attr('src', 'images/imgOnOpen.gif');
        }
    });
    
    //End Optional Section
});

function ExpandAll() {
    $('#nav ul').each(function () {
        $(this).show(slideSpeed);
    });
}

function CollapseAll() {
    $('#nav ul').each(function () {
        $(this).hide(slideSpeed);
    });
}