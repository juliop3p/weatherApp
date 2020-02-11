const getWeather = (location, callback) => {
    fetch(`/weather?address=${location}`)
        .then(response => response.json())
        .then(json => callback(json))
}
    
const weatherForm = document.querySelector('form')
const search = document.querySelector('form input')
const weatherDiv = document.querySelector('#weather')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    weatherDiv.innerHTML = `<h3>Loading...</h3>`

    const location = search.value

    getWeather(location, (weather) => {        
        !weather.error ?
            weatherDiv.innerHTML = 
            `
                <h3>${weather.location}</h3>
                <h4>${weather.forecast}</h4>
            `
        :
            weatherDiv.innerHTML = 
            `
                <h3>${weather.error}</h3>
            `
    })
})