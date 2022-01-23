


const cityInput = document.querySelector('#cityInput')
const logoDisplay = document.querySelector('.logo-box')
const tempDisplay = document.querySelector('.current-temp-box')
const submitArrow = document.querySelector('#submitCity')

submitArrow.addEventListener('click', function(e){
    e.preventDefault()

    getCityWeatherJsonData(cityInput.value)
    
})

function getCityWeatherJsonData(city){
    //Fetch weather url
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3087394c3003121d002911f1a3ecfd93&units=metric`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data)
        // Display logo in logo box
        displayLogo(data.weather[0].icon)
        // Display temp in current temp box
        displayCurrentTemp(data.main.temp)
    
    })
    .catch((err) => {
         alert('City name cannot be found in openweather database.')
    })
}

function displayLogo(logoId){
    logoDisplay.innerHTML = ""
    let content = `
        <img src="http://openweathermap.org/img/wn/${logoId}@2x.png" alt="weather conditions logo"/>
    `

    logoDisplay.insertAdjacentHTML('afterbegin', content)
}

function displayCurrentTemp(currentTemp){
    tempDisplay.innerHTML = ""
    let content = `
        <p>${currentTemp}</p>
        <p>&deg;</p>
        <p class="celcius">C</p>
    `

    tempDisplay.insertAdjacentHTML('afterbegin', content)
}




  