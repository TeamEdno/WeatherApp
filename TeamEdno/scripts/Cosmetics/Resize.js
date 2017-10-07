let resize = () => {
    let windowWidth = $("html").width();
    if ($(document).scrollTop() >= $('header').height()) {
        if ($('#nav-wrap').length === 0) {
            $("nav").wrap("<div id='nav-wrap'></div>");
        }                                                                               // makes the nav bar and search 
        $("#nav-wrap").css({                                                                //get a position:fixed when scrolled under
            'width': $("nav").width(),                                                      //and puts a div in its place so the page  
            'height': $("nav").height()                                                     //doesnt change sizes
        })
        $("nav").css({
            'position': 'fixed',
            'top': '0px',
            'width': windowWidth,
            'z-index': '100'
        })
    }
    else {
        let navigation = $("#nav-wrap").contents();
        $("#nav-wrap").replaceWith(navigation);
        $("nav").css({
            'position': 'relative',
            'top': '',
            'width': "100%"
        })
    }
}


$("#hideAdditionalCities").click(() =>{
    $('nav').unwrap();
})

$(window).resize(resize);
$(window).scroll(resize);