const request = require('request')

module.exports = (address = 'Sao paulo', callback) => {
    const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoianVsaW9wM3AiLCJhIjoiY2s2ZjR2NTA3MjU4YTNtcWpvMmMxNWp0OSJ9.XQUdIxFGy7hZMX0MlnfkdA`

    request({ url: geoUrl, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to get your location!')
        } else if(body.features.length < 1) {
            callback('Location not found!')
        } else {
            const [ longitude, latitude ] = body.features[0].center
            const { place_name } = body.features[0]
            callback(null, { latitude, longitude, location: place_name })
        }
    })
}