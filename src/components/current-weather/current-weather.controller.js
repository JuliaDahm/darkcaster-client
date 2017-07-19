CurrentWeatherController.$inject = ['WeatherService', 'images'];
//Angular looks up this service and uses it in the controller
//we set this service name and functionality in the weather.service file

//passing in the service to the controller action
function CurrentWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;

  //functions
  this.search = function search(){
    weather.getCurrently(this.lat, this.lon)
           .then(currentWeather => this.weatherData = currentWeather);
  };




  //method label ......... = function name
  //  this.weatherData = weather.getCurrently();
  //this is creating a variable for outputting the currently info to the dom

}

//functions sitting losely in controller are automatically rendered on page load
//but place inside another function will not

module.exports = CurrentWeatherController;
//makes this usable/not private/searchable by node/accesible functionality
