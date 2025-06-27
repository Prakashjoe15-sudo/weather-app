async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "2a5fabf1dcbf937daeddd7ae135ee772"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=&appid=&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const result = `
        <p><strong>${data.name}</strong></p>
        <p>${data.weather[0].main} - ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    } else {
      document.getElementById("weatherResult").innerText = data.message;
    }
  } catch (error) {
    document.getElementById("weatherResult").innerText = "Failed to fetch weather data.";
  }
}