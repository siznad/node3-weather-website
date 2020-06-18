const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6f6d3c7526c43eb04ad7bdffb227d7ce&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        }
        else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                current_temp: body.current.temperature,
                feels_like: body.current.feelslike,
                humidity: body.current.humidity
            })        
        }
    })
}

module.exports = forecast