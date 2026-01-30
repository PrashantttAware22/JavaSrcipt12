let CityInput = document.querySelector(".city-input");
let searchBtn = document.querySelector(".searchBtn");
let notFoundSection = document.querySelector(".not-found");
let searchCitySection = document.querySelector(".search-city");
let weatherInfoSection = document.querySelector(".WeatherInfoContainer");
let countryName = document.querySelector("#CountryName");
let TemperatureVal = document.querySelector("#TemperatureVal");
let WeatherStatus = document.querySelector("#WeatherStatus");
let HumidityPercentage = document.querySelector("#Humidity-Percentage");
let WindSpeed = document.querySelector("#Wind-SpeedVal");
let weatherSummaryImg = document.querySelector("#weatherSummaryImg");
let CurrentDate = document.querySelector("#CurrentDate");
let forecastItemsContainer = document.querySelector(".forecast-Container") ; 

/* USER API KEY */
const ApiKey = "ffdec49ba053075c1243e532eaa82aca";


/* SEARCH BUTTON CLICK */
searchBtn.addEventListener("click", () => {
  if (CityInput.value.trim() != "") {
    updateWeatherInfo(CityInput.value);
    CityInput.value = "";
  }
});


/* ENTER BUTTON CLICK */
CityInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter" && CityInput.value.trim() != "") {
    updateWeatherInfo(CityInput.value);
    CityInput.value = "";
  }
});


/* FETCH WEATHER APP DATA FROM ENDPOINT URL*/
async function getFetchData(endPoint, city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${ApiKey}&units=metric`;

  //Units=matric is used to convert temperature into celsius format

  const response = await fetch(apiUrl);

  return response.json();
}

/* UPDATE WEATHER APP INFO */
async function updateWeatherInfo(city) {

  const weatherData = await getFetchData("weather", city);

  if (weatherData.cod != 200) {
    showDisplaySection(notFoundSection);
    return;
  }

  // Require info from API OBJECT
  const {
    name: country,
    main: { temp, humidity },
    weather: [{ id, main }],
    wind: { speed },
  } = weatherData;

  countryName.innerText = country;
  TemperatureVal.innerText = Math.round(temp) + " °C";
  WeatherStatus.innerText = main;
  HumidityPercentage.innerText = humidity + "%";
  WindSpeed.innerText = speed + "M/s";
  weatherSummaryImg.src = `./assets/weather/${getWeatherIcon(id)}`;
  CurrentDate.innerText = getCurrentDate();

  await updateForecastInfo(city);
  showDisplaySection(weatherInfoSection);
}

async function updateForecastInfo(city) {
  const forecastData = await getFetchData("forecast", city);

  const timeTaken = "12:00:00";
  const todayDate = new Date().toISOString().split("T")[0];
  
  forecastItemsContainer.innerText = '' ; 
  forecastData.list.forEach((forecastWeather) => {
    if (
      forecastWeather.dt_txt.includes(timeTaken) &&
      !forecastWeather.dt_txt.includes(todayDate)
    ) {
      updateForecastItems(forecastWeather);
    }
  })
}

function updateForecastItems(weatherData) {
    const {
        dt_txt: date ,
        weather: [{ id }] ,
        main: { temp }
    } = weatherData  ;

    const dateToken  = new Date(date) ;
    const dateOption = {
        day: '2-digit',
        month: 'short',

    }

    const dateResult = dateToken.toLocaleDateString('en-US',dateOption)  ;

    const forecastItem = `
      <div class="forecast-Item">
            <h3 id="day1" style="font-weight: 400">${dateResult}</h3>
            <img src="./assets/weather/${getWeatherIcon(id)}" alt="" />
            <h3 id="day1-Temp" style="font-weight: 400">${Math.round(temp)} °C</h3>
          </div>
    `
    forecastItemsContainer.insertAdjacentHTML('beforeend' , forecastItem) ; 
}

function getCurrentDate() {
  let currentDate = new Date();
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };
  return currentDate.toLocaleDateString("en-GB", options);
}

function getWeatherIcon(id) {
  if (id <= 232) return "thunderstorm.svg";
  if (id <= 321) return "drizzle.svg";
  if (id <= 531) return "rain.svg";
  if (id <= 622) return "snow.svg";
  if (id <= 781) return "atmosphere.svg";
  if (id <= 800) return "clear.svg";
  else return "clouds.svg";
}


function showDisplaySection(section) {
  [weatherInfoSection, searchCitySection, notFoundSection].forEach(
    (section) => (section.style.display = "none"),
  );

  section.style.display = "flex";
}
