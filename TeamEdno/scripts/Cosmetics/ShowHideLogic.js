'use strict'
let showAdditionalCities= ()=>{
    $('#showAdditionalCities').hide();
    $('#hideAdditionalCities').show();
    $('#secondToForthRow').slideToggle( "medium" );
};

let hideAdditionalCities =()=>{
    $('#showAdditionalCities').show();
    $('#hideAdditionalCities').hide();
    $('#secondToForthRow').slideToggle( "medium" );
};

$("#showAdditionalCities").click(showAdditionalCities);

$("#hideAdditionalCities").click(hideAdditionalCities);
