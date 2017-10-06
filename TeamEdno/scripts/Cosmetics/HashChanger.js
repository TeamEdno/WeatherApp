//changes the hash
$('.nav-button-click').click( function(){
let hashCode=$(this).attr("id");
window.location.hash=hashCode;
if($("#secondToForthRow").css("display")!="none"){
    hideAdditionalCities();
    $(document).scrollTop( $("header").height() + $("nav").height() - $("#secondToForthRow").height() );
}
else{
    $(document).scrollTop( $("header").height() + $("nav").height() );
}
});