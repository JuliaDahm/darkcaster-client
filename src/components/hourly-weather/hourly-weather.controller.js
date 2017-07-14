const clearDay = require('../../images/clear-day.png');

HourlyWeatherController.$inject = ['WeatherService'];
//Angular looks up this service and uses it in the controller
//we set this service name and functionality in the weather.service file

//passing in the service to the controller action
function HourlyWeatherController(weather){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = {
    'clear-day': clearDay
  };

  //functions
  this.search = function search(){
    weather.getHourly(this.lat, this.lon)
           .then(hourlyWeather => this.weatherData = hourlyWeather);
  };
}


module.exports = HourlyWeatherController;
