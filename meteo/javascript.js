const API_KEY = "6713db4b439848a197b83550231705";
let city = "Plzeň";

async function getCurrentWeather() {
    const requestURL = "https://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q="+ city + "&lang=cs";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const currentWeather = await response.json();

    document.getElementById("favicon").href = "https:" + currentWeather.current.condition.icon;

    document.getElementById("city").innerHTML = currentWeather.location.name;
    document.getElementById("temp").innerHTML = currentWeather.current.temp_c + "°C";
    document.getElementById("feelslikeTemp").innerHTML = "Pocitově: " + currentWeather.current.feelslike_c + "°C";
    document.getElementById("weatherText").innerHTML = currentWeather.current.condition.text;
    document.getElementById("icon").src = "https:" + currentWeather.current.condition.icon;
    document.getElementById("lastUpdated").innerHTML = "Poslední aktualizace: " + currentWeather.current.last_updated;

}

async function getForecastWeather() {
    const requestURL = "https://api.weatherapi.com/v1/forecast.json?key=" + API_KEY + "&q=" + city + "&days=" + 7;
    const request = new Request(requestURL);

    const response = await fetch(request);
    const forecastWeather = await response.json();

    document.getElementById("currentRain").innerHTML = forecastWeather.current.precip_mm + " mm";
    document.getElementById("currentSunrise").innerHTML = (forecastWeather.forecast.forecastday[0].astro.sunrise);
    document.getElementById("currentSunset").innerHTML = (forecastWeather.forecast.forecastday[0].astro.sunset);
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }  // add zero in front of numbers < 10
    return i;
}

getCurrentWeather();
getForecastWeather();
function autoUpdateCurrentWeather() {
    setInterval(getCurrentWeather, 5 * 60 * 1000)
    setInterval(getForecastWeather, 5 * 60 * 1000)
}
