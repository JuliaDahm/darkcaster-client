const angular = require('angular');

//services
const WeatherService = require('./services/weather.service');
// period says start in this directory, not at root

//create our application
angular.module('darkcaster-client', []); //setter syntax, so we're setting the module name as darkcaster-client

angular.module('darkcaster-client') //getter syntax is w/out comma and brackets, works like 'require'
       .controller('MainController', MainController) //went and got controller
       .factory('WeatherService', WeatherService); //inside angular, set this service as this name, passing in this function

MainController.$inject = ['WeatherService'];
//Angular looks up this service and uses it in the controller
//we set this service name and functionality in the weather.service file

//passing in the service to the controller action
function MainController(weather){
  this.message = 'hello from angular';
  this.weatherData = weather.getCurrently();
  //method label ......... = function name
  //this is creating a variable for outputting the currently info to the dom
}
