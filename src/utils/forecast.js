const request = require('request')
 
module.exports = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/978588183c116d0f386af57ad7674a24/${latitude},${longitude}?units=si`

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!')
        } else if(body.error) {
            callback('Unable to find location!')
        } else {
            const { temperature, precipProbability } = body.currently
            const { summary: wheaterStatus } = body.daily.data[0]
            
            callback(null, { wheaterStatus, temperature, precipProbability })
        }
    })
}
