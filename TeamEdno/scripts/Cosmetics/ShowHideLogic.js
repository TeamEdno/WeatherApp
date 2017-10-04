'use strict'
$("#showAdditionalCities").click(()=>{
    $('#showAdditionalCities').hide();
    $('#hideAdditionalCities').show();
    $('#secondToForthRow').show();
});

$("#hideAdditionalCities").click(()=>{
    $('#showAdditionalCities').show();
    $('#hideAdditionalCities').hide();
    $('#secondToForthRow').hide();
});