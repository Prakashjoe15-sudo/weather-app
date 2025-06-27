# 🌤️ CloudCast Weather App

CloudCast is a simple weather application that fetches real-time weather data using the OpenWeatherMap API.

## 🚀 Features
- Search weather by city name
- View temperature, humidity, and condition
- Deployed via GitHub Actions
- Dockerized for easy deployment

## 🛠 Tech Stack
- HTML, CSS, JavaScript
- OpenWeatherMap API
- Docker
- GitHub Actions

## 🧪 Run Locally
```bash
docker build -t cloudcast .
docker run -p 8080:8080 cloudcast
```

Then open `http://localhost:8080` in your browser.

## 📈 Monitoring Ideas (SRE Focus)
- Add healthcheck endpoint for backend (if added)
- Use UptimeRobot for external monitoring
- Add logging in backend (if extended)

## 🔑 API Key Setup
Replace `YOUR_API_KEY` in `script.js` with your [OpenWeatherMap](https://openweathermap.org/api) key.
