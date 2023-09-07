// weather.js

class Weather {
    static today() {
        const chanceOfRain = Math.random(); // Simulate a random chance of rain between 0 and 1
        return chanceOfRain <= 0.2 ? 'rain' : 'sunny';
    }

    static freshWeatherForCity(city) {
        const random = Math.random();
        return random <= 5 ? {
            "success": false, 
            "error": "API is OFFLINE"
        } : {
            "success": true, 
            "data": {
                "city": "London",
                "temperature": 30
            }
        };
    }
  }
  
  module.exports = Weather;
  