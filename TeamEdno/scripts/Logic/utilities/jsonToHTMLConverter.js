'use strict'

let jsonToHTML=(data)=>{
    let name=data.name;
    let temperature=(data.main.temp -273.8).toFixed(1);
    let claudiness=data.weather[0].description;
    let humidity=data.main.humidity;
    let pressure=data.main.pressure;
    let wind = data.wind.speed;
    let img;
    if(temperature>22){
        img="hot-image"; 
    }
    else{
        img="cold-image"; 
    }
    
    $('main').html(
        `<div id="page-container">
                        <div class="inline">
                            <p class="city-name">` + name + `</p>
                        </div>
                        <div id="city-data">
                            <table id="city-info-table">
                                <tr>
                                    <td>
                                        <p>Temperature</p>
                                    </td>
                                    <td>
                                        <div id="temperature">
                                            <p>`+temperature +  `°C</p> <img id="temerature-img" src="./images/`+ img +`.jpg">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Cloudiness</p>
                                    </td>
                                    <td>
                                        <p>`+ claudiness +`</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Humidity</p>
                                    </td>
                                    <td>
                                        <p>`+ humidity+`%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Pressure</p>
                                    </td>
                                    <td>
                                        <p>`+ pressure+` hPa</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Wind</p>
                                    </td>
                                    <td>
                                        <p>` + wind+` m/s</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                </div>`
    )
}