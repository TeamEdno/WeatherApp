'use strict'
let showAdditionalCities= ()=>{
    $('#showAdditionalCities').hide();
    $('#hideAdditionalCities').show();
    $('#secondToForthRow').show();
};

let hideAdditionalCities =()=>{
    $('#showAdditionalCities').show();
    $('#hideAdditionalCities').hide();
    $('#secondToForthRow').hide();
};

$("#showAdditionalCities").click(showAdditionalCities);

$("#hideAdditionalCities").click(hideAdditionalCities);
