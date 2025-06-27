# 🌤️ CloudCast Weather App

CloudCast is a lightweight weather forecast application built using pure HTML, CSS, and JavaScript. It consumes the OpenWeatherMap API to display real-time weather information for any city entered by the user.

This project also demonstrates a secure CI/CD pipeline using GitHub Actions, where the API key is dynamically injected at deployment time using a GitHub secret and shell-based string substitution.

---

## 🧱 Architecture & Implementation

### 🔹 Frontend
- **Static frontend app** built using vanilla JavaScript, CSS, and HTML
- Takes city input from the user and fetches live weather data via `fetch()`
- Displays:
  - Temperature
  - Weather condition
  - Humidity

### 🔹 API Integration
- Uses **OpenWeatherMap API** endpoint:  
  `https://api.openweathermap.org/data/2.5/weather`
- **API key is not hardcoded** — it's injected securely at deployment time using GitHub Secrets

---

## 🔐 Secret Handling (CI/CD-safe)

- Inside `script.js`, the API key is set as a placeholder:
  ```js
  const apiKey = "OPENWEATHER_API_KEY_PLACEHOLDER";
  ```
- In GitHub Actions, the placeholder is replaced with the actual API key using `sed`:
  ```yaml
  - name: Replace API key
    env:
      OPENWEATHER_API_KEY: ${{ secrets.OPENWEATHER_API_KEY }}
    run: |
      sed -i "s/OPENWEATHER_API_KEY_PLACEHOLDER/$OPENWEATHER_API_KEY/g" script.js
  ```

---

## 🚀 CI/CD with GitHub Actions

- Every push to the `main` branch triggers the workflow:
  - API key is substituted into `script.js`
  - App is deployed to GitHub Pages using `peaceiris/actions-gh-pages`

---

## 🌐 Live Demo

The application is deployed via GitHub Pages and can be accessed here:  
➡️ [CloudCast Live Demo](https://prakashjoe15-sudo.github.io/weather-app/)

---

## 📁 File Highlights

| File                           | Purpose                           |
| ------------------------------ | --------------------------------- |
| `index.html`                   | HTML layout and structure         |
| `style.css`                    | Basic UI styling                  |
| `script.js`                    | JavaScript logic for API call     |
| `.github/workflows/deploy.yml` | CI/CD workflow with secure deploy |

---
