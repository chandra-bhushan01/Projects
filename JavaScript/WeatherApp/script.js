const apikey = "a7be62789ef45004afd2339402629a00";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



// const iconURL = "https://openweathermap.org/img/wn/";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


const defaultCity = "delhi";
getWeather(defaultCity)





searchBtn.addEventListener("click", (e) => {
  getWeather(searchBox.value);
});

async function getWeather(city) {
  try {
    const response = await fetch(apiURL + city + `&appid=${apikey}`);
    const  data = await response.json();
    // console.log(data);


    const w = document.querySelector(".weather-icon")
    w.src = `img/${data.weather[0].description}`+".png"
    
    
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".air-pressure").innerHTML = data.main.pressure + "mb";
    document.querySelector(".visiblity").innerHTML =
      parseFloat(data.visibility)/1000 + "Km";

    document.querySelector(".desc").innerHTML = data.weather[0].description;



  } catch (error) {
    document.querySelector(".desc").innerHTML = "City not Found!"
  }

  
}
