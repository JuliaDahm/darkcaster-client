DailyWeatherController.$inject = ['WeatherService', 'images']; //angular magic

function DailyWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;

  //functions
  this.search = function(){
    weather.getDaily(this.lat, this.lon)
           .then(dailyWeather => this.dailyWeather = dailyWeather);
  };
}

module.exports = DailyWeatherController;
