// https://get.geojs.io/v1/ip/geo.json
// киньте fetch по адресу и получите данные по широте (latitude), долготе (longitude) и городу
// сделайте используя async / await асинхронные функции
// cсылки на api в чате zoom

// ! до 10-10

async function getWeather() {
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const data = await res.json();
    // * работа с данными из объекта без деструктуризации
    // * объявили переменные и присвоили им значения из объекта
    // const city = data.city
    // const latitude = data.latitude
    // const longitude = data.longitude
    // * работа с данными из объекта с деструктуризацией
    // мы в одну строчку объявляем переменные с именами совпадающими с именем нужных нам ключей и передаем им соответствующее значение
    const { city, latitude, longitude } = data;
    console.log(city, latitude, longitude);
  }

  // сделайте fetch запрос по адресу:
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  // вам нужно заменить координаты в строке на данные выше
  // получите данные погоды: температуру, скорость ветра и.т.д
  // также заберите weathercode - он вам понадобится

  // Асинхронная функция для получения данных о погоде
async function getWeather() {
    try {
        // Запрос на получение данных о местоположении
        const resLocation = await fetch("https://get.geojs.io/v1/ip/geo.json");
        const locationData = await resLocation.json();
        
        // Извлекаем необходимые данные (город, широта, долгота)
        const { city, latitude, longitude } = locationData;
        console.log(`City: ${city}, Latitude: ${latitude}, Longitude: ${longitude}`);
        
        // Запрос на получение данных о погоде, подставляем координаты
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData = await weatherRes.json();
        
       // Извлекаем необходимые данные о погоде
        const { temperature, wind_speed, weathercode } = weatherData.current_weather;
        
        // Выводим данные о погоде
        console.log(`Temperature: ${temperature}°C, Wind Speed: ${wind_speed} km/h, Weather Code: ${weathercode}`);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// напишите функцию расшифровщик для кода погоды
  // выведите данные на странице, используйте current_weather_units
  // задеплойте на git pages
  // скиньте ссылку на код и на деплой

// https://open-meteo.com/en/docs

function decodeWeatherCode(code) {
    switch (code) {
      case 0:
        return { description: "Clear", icon: "☀️" };
      case 1:
        return { description: "Few clouds", icon: "🌤️" };
      case 2:
        return { description: "Partly cloudy", icon: "⛅" };
      case 3:
        return { description: "Cloudy", icon: "☁️" };
      case 45:
        return { description: "Fog", icon: "🌫️" };
      case 48:
        return { description: "Frozen fog", icon: "🌫️❄️" };
      case 51:
        return { description: "Light rain", icon: "🌧️" };
      case 53:
        return { description: "Moderate rain", icon: "🌧️" };
      case 55:
        return { description: "Heavy rain", icon: "🌧️" };
      case 56:
        return { description: "Freezing rain", icon: "❄️🌧️" };
      case 57:
        return { description: "Heavy freezing rain", icon: "❄️🌧️" };
      case 61:
        return { description: "Light rain with thunder", icon: "🌧️⚡" };
      case 63:
        return { description: "Moderate rain with thunder", icon: "🌧️⚡" };
      case 65:
        return { description: "Heavy rain with thunder", icon: "🌧️⚡" };
      case 66:
        return { description: "Freezing rain with thunder", icon: "❄️🌧️⚡" };
      case 67:
        return { description: "Heavy freezing rain with thunder", icon: "❄️🌧️⚡" };
      case 71:
        return { description: "Light snow", icon: "❄️" };
      case 73:
        return { description: "Moderate snow", icon: "❄️" };
      case 75:
        return { description: "Heavy snow", icon: "❄️" };
      case 77:
        return { description: "Hail", icon: "🌨️" };
      case 80:
        return { description: "Light rain with thunder", icon: "🌧️⚡" };
      case 81:
        return { description: "Moderate rain with thunder", icon: "🌧️⚡" };
      case 82:
        return { description: "Heavy rain with thunder", icon: "🌧️⚡" };
      case 85:
        return { description: "Light snow with thunder", icon: "❄️⚡" };
      case 86:
        return { description: "Heavy snow with thunder", icon: "❄️⚡" };
      default:
        return { description: "Unknown weather code", icon: "❓" };
    }
  }
  async function getWeather() {
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const data = await res.json();
    const { city, latitude, longitude } = data;
  
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();
    const { temperature, windspeed, weathercode } = weatherData.current_weather;
    const { temperature: temperatureUnit, windspeed: windspeedUnit } =
      weatherData.current_weather_units;
  
    
    const { description, icon } = decodeWeatherCode(weathercode);
  
    
    document.body.innerHTML = `
      <h1>Weather in ${city}</h1>
      <p>Temperature: ${temperature} ${temperatureUnit}</p>
      <p>Wind speed: ${windspeed} ${windspeedUnit}</p>
      <p>Weather: ${description} ${icon}</p>
    `;
  }
  

getWeather();
