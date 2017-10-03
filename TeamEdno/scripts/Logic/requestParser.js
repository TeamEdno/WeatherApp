'use strict'
let parseGetRequest=((getRequest)=>{

    return{
        cityName:getRequest.responseJSON.name,
        wind:getRequest.responseJSON.wind.speed,
        clouds:getRequest.responseJSON.clouds.all,
        temperature:(getRequest.responseJSON.main.temp-273).toFixed(1),
        pressure:getRequest.responseJSON.main.pressure,
        humidity:getRequest.responseJSON.main.humidity,
        sky:getRequest.responseJSON.weather.description,
    }
})