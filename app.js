function displayTemp(response) {
    console.log(response.data);
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.name;
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = response.data.weather[0].description;
let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = response.data.main.humidity;
let windElement = document.querySelector("#wind");
windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "e5d59a8b6235a1f821f95b35ab5b2c07";
let apiUrl =
  "http://api.openweathermap.org/data/2.5/weather?q=London&appid=e5d59a8b6235a1f821f95b35ab5b2c07&units=metric";


axios.get(apiUrl).then(displayTemp);


