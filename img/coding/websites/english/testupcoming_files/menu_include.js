
function JAS_get_menu() {

   function JAS_initArray() {
     this.length = JAS_initArray.arguments.length;
     for (var i = 0; i < this.length; i++) { 
          this[i] = JAS_initArray.arguments[i];
     }
   }

image = new JAS_initArray(
"/webpage_files/images/menu/Web_ready/darkrushmenu.jpg",
"/webpage_files/images/menu/Web_ready/robelmenu.jpg",
"/webpage_files/images/menu/Web_ready/brianmenu.jpg",
"/webpage_files/images/menu/Web_ready/arnazmenu.jpg",
"/webpage_files/images/menu/Web_ready/tylermenu.jpg",
"/webpage_files/images/menu/Web_ready/kofimenu.jpg",
"/webpage_files/images/menu/Web_ready/amouzou.jpg",
"/webpage_files/images/menu/Web_ready/awellsmenu.jpg",
"/webpage_files/images/menu/Web_ready/bshannonmenu.jpg",
"/webpage_files/images/menu/Web_ready/emadutmenu.jpg",
"/webpage_files/images/menu/Web_ready/nnyokmenu.jpg",
"/webpage_files/images/menu/Web_ready/hcareymenu2.jpg"
);


text = new JAS_initArray(
'\"I did better in these classes. The classes weren\'t just about reading from a book.\"',
'\"Come to the office of Student Life. They can help you get to know the school better.\"',
'\"It gave me a great foundation for what I want to do.\"',
'\"Everyone is so helpful. They make college so much easier.\"',
'\"I\'ll remember the different opportunities and experiences I would not have gotten anywhere else.\"',
'\"It was the best decision I made concerning my education.\"',
'\"GPC\'s strong English as a Second Language (ESL) program helped me through my difficulties speaking English.\"',
'\"I returned when my health improved and adjusted my schedule by how long I could sit in a class.\"',
'Dual Enrollment helped Brooke Shannon reach her dream faster. \"Ever since I was 5, I always wanted to become a doctor.\"',
'\"I want to thank all of you who have helped make this dream come true.\" GPC also helped build his house.',
'\"I decided the only way I can give back to the community is to help build a school.\" His GPC professor encouraged him.',
'\"I found GPC\'s Theatre Department more comprehensive and advanced than I expected. I got to do many different things.\"'
);


var core=Math.round(Math.random() * (image.length -1))
var ranimage = image[core];
var rantext  = text[core];

stuff = new JAS_initArray(
ranimage,
rantext);

return(stuff);
}//endof

