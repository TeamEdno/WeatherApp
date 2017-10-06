'use strict'

let getCityUrl= ((city)=>{
    let cities={
    sofia:'https://api.openweathermap.org/data/2.5/weather?id=727011&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    plovdiv:'https://api.openweathermap.org/data/2.5/weather?id=728193&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    varn:'https://api.openweathermap.org/data/2.5/weather?id=726050&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    burgas:'https://api.openweathermap.org/data/2.5/weather?id=732770&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    ruse:'https://api.openweathermap.org/data/2.5/weather?id=727523&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    staraZagora:'https://api.openweathermap.org/data/2.5/weather?id=726848&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    pleven:'https://api.openweathermap.org/data/2.5/weather?id=728203&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    sliven:'https://api.openweathermap.org/data/2.5/weather?id=727079&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    dobrich:'https://api.openweathermap.org/data/2.5/weather?id=726418&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    shumen:'https://api.openweathermap.org/data/2.5/weather?id=727233&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    pernik:'https://api.openweathermap.org/data/2.5/weather?id=728330&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    haskovo:'https://api.openweathermap.org/data/2.5/weather?id=730435&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    yambol:'https://api.openweathermap.org/data/2.5/weather?id=725578&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    pazardzhik:'https://api.openweathermap.org/data/2.5/weather?id=728378&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    blagoevgrad:'https://api.openweathermap.org/data/2.5/weather?id=733191&APPID=0d8a1438b002e51fd716aa4e4acafdd7',

    velikoTurnovo:'https://api.openweathermap.org/data/2.5/weather?id=725993&APPID=0d8a1438b002e51fd716aa4e4acafdd7',
    }

    return cities[city];

});