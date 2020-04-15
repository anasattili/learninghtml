 
'use strict'
 alert('Welcome to Jordan');
 
 confirm('do you love jordan?');

 


var x ;

 x= prompt('enter a number greater than 0');

var greeting;


if (x > 0 && x <= 10) {
 greeting = 'Good';
 document.write('<h1>'+greeting+'</h1>')
 } else if (x > 10 && x<20) {
 greeting = 'Good morning';
 } else if (x >= 20) {
 greeting = 'Good night';
 } else {
 greeting = 'Good byu';
 }
document.write('<h1>'+greeting+'</h1>');

var showJor = function () {
var word = prompt('if you want to see the jordan flag or map type it ');
var picture;

if( word === 'flag')
{
    picture = '<img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Nuvola_Jordan_flag.svg/120px-Nuvola_Jordan_flag.svg.png">';
    }
    else if (word === 'map'){

        picture = '<img src ="http://ontheworldmap.com/jordan/administrative-map-of-jordan-max.jpg">';

        
    }
    else {
        picture = 'Thank you for visiting Jordan';
    }
    return picture;
    
}
document.write('<h1>'+showJor()+'</h1>');



//console.log('the greeting =',greeting);
//x===true// check value and data type
//x==true //check the value
//we can use document.write('<h1>'+greeting+'</h1>') in different place in add.js
//'2'+'4'="24"
//put js link in html without function after the footer
//inpur process output


