//changes the hash
$('.nav-button-click').click( function(){
let hashCode=$(this).attr("id");
window.location.hash=hashCode;
});