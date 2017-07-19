HourlyWeatherController.$inject = ['WeatherService', 'images'];
//Angular looks up this service and uses it in the controller
//we set this service name and functionality in the weather.service file

//passing in the service to the controller action
function HourlyWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;

  //functions
  this.search = function search(){
    weather.getHourly(this.lat, this.lon)
           .then(hourlyWeather => this.hourlyWeather = hourlyWeather);
  }
}


module.exports = HourlyWeatherController;
