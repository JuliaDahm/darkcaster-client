const clearDay = require('../../images/clear-day.png');

MainController.$inject = ['WeatherService'];
//Angular looks up this service and uses it in the controller
//we set this service name and functionality in the weather.service file

//passing in the service to the controller action
function MainController(weather){
  this.message = 'hello from angular';
  this.imageLookup = {
    'clear-day': clearDay
  };

  weather.getCurrently(29, -81)
         .then(currentWeather => this.weatherData = currentWeather);


  //method label ......... = function name
  //  this.weatherData = weather.getCurrently();
  //this is creating a variable for outputting the currently info to the dom

}

module.exports = MainController;
//makes this usable/not private/searchable by node/accesible functionality
