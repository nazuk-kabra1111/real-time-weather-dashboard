# 🌤️ Real-Time Weather Dashboard
A responsive and interactive weather dashboard built using HTML, CSS, and JavaScript.  
This application fetches real-time weather data from the OpenWeatherMap API and displays key weather metrics with dynamic UI updates and theme changes based on time of day based on the location searched for.


## Features
-  Search weather by city name
-  Real-time temperature display (in Celsius)
-  Humidity and wind speed information
-  Minimum, maximum, and "feels like" temperature
-  Dynamic weather condition display (Clear, Clouds, Mist, etc.)
-  Automatic Day/Night theme switching based on system time (current time IST)
-  Weather-based icons for better visualization
-  Error handling for invalid or unavailable cities

## Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **API:** OpenWeatherMap (REST API)
- **Concepts Used:**
  - Fetch API (async/await)
  - DOM Manipulation
  - Event Handling
  - Conditional Rendering


## Project Structure
weather-dashboard/
│── index.html # Main HTML structure
│── style.css  # Styling and layout
│── weather.js # JavaScript logic & API handling
│── images/    # Weather icons and assets
│ ├── clear.png
│ ├── cloudy.png
│ ├── thunderstorm.png
│ ├── haze.png
│ ├── mist.png
│ ├── moon.png
│ └── ...
│── README.md # Project documentation

## Live Demo
https://nazuk-kabra1111.github.io/real-time-weather-dashboard/

## Note
You need an API key from OpenWeatherMap to run this project.