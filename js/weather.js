// Check the API doc of openweathermap
// https://openweathermap.org/current
const API_KEY = "d61cce78874fb8fb84f652cbf25f238c";
const language = "en";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${language}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");

        const cityName = data.name;
        const cityWeather = data.weather[0].main;
        const cityTemp = data.main.temp;
        city.innerText = cityName;
        weather.innerText = `${cityWeather} / ${cityTemp}˚C`;
    });
}

function onGeoError() {
    alert("Can't find your location. No weather information for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);