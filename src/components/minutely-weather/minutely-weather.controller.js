const missingImage = require('../../images/missing-image.png');
const clearDay = require('../../images/clear-day.png');

MinutelyWeatherController.$inject['WeatherService'];

function MinutelyWeatherController(weather){
  this.lat = 0;
  this.lon = 0;

  //functions
  this.search = function search(){
    weather.getMinutely(this.lat, this.lon)
           .then(minutelyWeather => this.minutelyWeather = minutelyWeather);
  };
}
