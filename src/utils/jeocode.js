const request = require("request")

const geocode= (address, callback)=>{
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoibmF3cm96MSIsImEiOiJja29lYzI0OG8wYXNkMm9zOWNpaXEyb3ZmIn0.4LNePq90_KyNtj_ZA5rHRA'
    request({url, json: true}, (error, {body})=>{
        if(error){
            callback("Unable to connect to the urle services!", undefined)
        } else if(body.features.length === 0){
            callback("Unabel to finde the location. Try to anothe search!", undefined)
        } else{
            callback(undefined,{
                atitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geocode