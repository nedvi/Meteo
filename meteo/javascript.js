
async function getActualWeather() {
    const requestURL = "https://api.weatherapi.com/v1/current.json?key=6713db4b439848a197b83550231705&q=Plzeň&lang=cs";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const actualWeather = await response.json();

    document.getElementById("favicon").href = "https:" + actualWeather.current.condition.icon;

    document.getElementById("city").innerHTML = actualWeather.location.name;
    document.getElementById("temp").innerHTML = actualWeather.current.temp_c + "°C";
    document.getElementById("feelslikeTemp").innerHTML = "Pocitově: " + actualWeather.current.feelslike_c + "°C";
    document.getElementById("weatherText").innerHTML = actualWeather.current.condition.text;
    document.getElementById("icon").src = "https:" + actualWeather.current.condition.icon;
    document.getElementById("lastUpdated").innerHTML = "Poslední aktualizace: " + actualWeather.current.last_updated;
}

getActualWeather();