let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let form = document.querySelector("form");
let image = document.querySelector("img");

let CITY_NAME = document.querySelector(".city-name");
let CITY_TEMP = document.querySelector(".temperature");

// Store your open weather API Key
const API_KEY = "WEATHER_API_KEY";
// Store the API endpoint and API key
const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather?zip={zip}&APPID=${API_KEY}'

fetch(API_KEY)
    .then((response => response.json())
    .then((data => {
        // store the data in a variable of choice
        let local_weather_data = data;
        // manipulate the city name content
        CITY_NAME.textContent = local_weather_data.name;
        // process the temperature data before manipulating the content
        let weather_in_celsius = Math.round(
            local_weather_data.main.temp - 273
        );
        // Manipulate the temperature content
        CITY_TEMP.textContent = weather_in_celsius + " C"
    })));

const getZipCode = (e) => {
    e.preventDefault();
    let ZIP_CODE = input.value;
    getWeatherData(ZIP_CODE);
}

// write a function to get weather data
getWeatherData = (zip) => {
    let API_KEY = config.WEATHER_API_KEY
    let API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather?zip={zip}&APPID=${API_KEY}'
// log the data to the browser console
            console.log(local_weather_data);
})));
}

const getWeatherData = () => {
    fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
        // store the data in a variable
        let local_weather_data = data;
        console.log(local_weather_data);
        let WEATHER_ICON = local_weather_data.weather[0].icon

        image.setAttribute('src' 'https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png')
        form.reset();
    });
}

btn.addEventListener('click', getZipCode);
input.focus();

function getWeatherData(zip) {
    const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather?zip={ZIP_CODE}&APPID=${WEATHER_API_KEY}'
}