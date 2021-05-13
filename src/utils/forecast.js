const request = require('request')

const forecast = (latitude, longtitude, callback)=>{
    url = 'http://api.weatherstack.com/current?access_key=42793f3d67517568d83ba8e3041c8987&query='+latitude+ ','+longtitude+ '&units=f'

    request({url, json: true}, (error, {body})=>{
        if (error){
            callback("Unable to connect to the location!", undefined)
        } else if(body.error){
            callback("Unable to finde location. Try another search!", undefined)
        }else{
            const data = 
                 body.current.weather_descriptions[0]+  ". It is cuurently "+ body.current.temperature + " temperature degres out. It feels like "+ body.current.feelslike+ " degress out." +
                 ". With wind speed "+ body.current.wind_speed + " and wind degree of "+ body.current.wind_degree +
                 " by cloud cover of "+ body.current.cloudcover + "." 

            callback(undefined, data)
        }
    })
}


module.exports = forecast