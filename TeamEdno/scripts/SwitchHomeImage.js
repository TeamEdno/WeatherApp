'use strict'
var images = new Array ('./images/backround-1.jpg', './images/backround-2.jpg');
var index = 1;
 
function RotateImages(){
    $('#home-text').fadeOut(650);
    $('#backround-home-image').fadeOut(650, function() {
        $(this).attr('src', images[index]);
        $('#home-text').fadeIn(300);
        $(this).fadeIn(300, function(){
            if (index == images.length-1){
                index = 0;
        	}
            else{
                index++;
            }
        });
    });
}
 
$(document).ready(function()
{
  setInterval (RotateImages, 7000);
});
