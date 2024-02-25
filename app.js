const key = '5f1d6ccbe5f1f8b8e83aff6769b1c204';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let city_name = document.querySelector(".city");
let temp = document.querySelector(".temp");
let wind_speed = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let search_box = document.querySelector(".search input");
let search_btn = document.querySelector(".search button");
let weather_icon = document.querySelector(".weather-icon");

async function checkWeather(city){

    const response = await fetch(apiURL+ city + `&appid=${key}`);
    const data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
     else{
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        
     }
    city_name.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + " °C";
    wind_speed.innerHTML = data.wind.speed + " km/h";
    humidity.innerHTML= data.main.humidity + " %";

    console.log(data);

    document.querySelector(".weather").style.display = "block";
    if(data.weather[0].main == 'Clouds'){
        weather_icon.src = "clouds.png";
    }

    else if(data.weather[0].main == 'Clear'){
        weather_icon.src = "clear.png";
    }

    else if(data.weather[0].main == 'Drizzle'){
        weather_icon.src = "drizzle.png";
    }

    else if(data.weather[0].main == 'Rain'){
        weather_icon.src = "rain.png";
    }

    else if(data.weather[0].main == 'Mist'){
        weather_icon.src = "mist.png";
    }

    else if(data.weather[0].main == 'Snow'){
        weather_icon.src = "snow.png";
    }
}

search_btn.addEventListener('click', ()=>{
    
    console.log('pressed');
    checkWeather(search_box.value);
})