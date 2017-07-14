const clearDay = require('../../images/clear-day.png');

HourlyWeatherController.$inject['WeatherService'];

function HourlyWeatherController(weather) {
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = {
    'clear-day': clearDay
  };

  //functions
  this.search = function search(){
    weather.getHourly(this.lat, this.lon)//uses a service method to grab desired info out of json object
           .then(hourlyWeather => this.weatherData = hourlyWeather)
           //this stores desired info in a temp var, then a new var is instantiated using the temp as value
  };
}

module.exports = HourlyWeatherController;
