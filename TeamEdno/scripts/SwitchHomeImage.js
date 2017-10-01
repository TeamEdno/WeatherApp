'use strict'
var images = new Array 
(
    './images/backround-1.jpg',
    './images/backround-2.jpg'
);                                                  //should work on making this better this is just for show
var index = 1;                                      /*starts from 1 so that it selects the second picture 
                                                    from the array if we want we can add more*/
 
function RotateImages(){
    $('#home-text').fadeOut(750);                   //fade out is a function that makes an element disapear over a period of time
    $('#backround-home-image').fadeOut(750, function() {
        $(this).attr('src', images[index]);                           
        $('#home-text').fadeIn(400);
        $(this).fadeIn(400, function(){             // fade int makes it apear, the number is the microsecs it takes
            if (index == images.length-1){
                index = 0;
        	}
            else{
                index++;
            }
        });
    });
}
 
$(document).ready(function()                        //starts when the document is loaded  
{                                                   //set interval makes a function repeat every x miliseconds
  setInterval (RotateImages, 6000);                 //we are currently loading pictures every time its called, should fix
});
