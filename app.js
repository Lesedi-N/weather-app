function displayTemp(response) {
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "e5d59a8b6235a1f821f95b35ab5b2c07";
let apiUrl =
  "http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=e5d59a8b6235a1f821f95b35ab5b2c07&units=metric";


axios.get(apiUrl).then(displayTemp);


