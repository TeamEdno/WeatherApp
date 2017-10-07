'use strict'

let jsonToHTML=(data)=>{
    let name=data.name;
    let temperature=(data.main.temp -273.8).toFixed(1);
    let claudiness=data.weather[0].description;
    let humidity=data.main.humidity;
    let pressure=data.main.pressure;
    let wind = data.wind.speed;
    let img_temp;
    let img_cloud;
    if(temperature>22){
        img_temp="hot-image"; 
    }
    else{
        img_temp="cold-image"; 
    }

    if(claudiness.includes("light rain")){
        img_cloud="lightRain-image";
    }
    else if(claudiness.includes("moderate rain")){
        img_cloud="moderateRain-image";
    }
    else if(claudiness.includes("heavy") && claudiness.includes("rain")){
        img_cloud="heavyRain-image";
    }
    else if(claudiness.includes("cloud")){
        img_cloud="cloudy-image";
    }
    else{
        img_cloud="hot-image";
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
                                            <p>`+temperature +  `°C</p> <img id="temerature-img" src="./images/`+ img_temp +`.jpg">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Cloudiness</p>
                                    </td>
                                    <td>
                                        <div id = "claudiness">
                                            <p>`+ claudiness +`</p> <img id="temerature-img" src="./images/`+ img_cloud +`.jpg">
                                        </div>
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