const apiKey = "d7c8b70747304e637ea3b04beb697bab";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "WA-img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "WA-img/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "WA-img/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "WA-img/dirzzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "WA-img/mist.png";
    }
    else if(data.weather[0].main == "Smoke"){
        weatherIcon.src = "WA-img/smoke.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
