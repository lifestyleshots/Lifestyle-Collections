
const API_KEY = "WEATHER_API_KEY";
console.log("Look, I'm just trying to get by right now");
//using concatenation
"https://api.openweathermap.org/data/2.5/weather?zip=" + 10023
// using string templating
'https://api.openweathermap.org/data/2.5/weather?zip=${10023}'
fetch('http://api.openweathermap.org/data/2.5/weather?zip=10023&APPID=${WEATHER_API_KEY}')
.then(response => response.json())
.then(data => console.log(data));