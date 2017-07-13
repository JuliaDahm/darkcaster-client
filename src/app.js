const angular = require('angular');

//services
const WeatherService = require('./services/weather.service');
// period says start in this directory, not at root

//components
const CurrentWeatherComponent = require('./components/current-weather/');
const HourlyWeatherComponent = require('./compenents/hourly-weather/');
//create our application
angular.module('darkcaster-client', []) //getter syntax is w/out comma and brackets, works like 'require'
       .factory('WeatherService', WeatherService) //inside angular, create HTML tag with this name
       .component('currentWeather', CurrentWeatherComponent)//second argument is the function it will use
       .component('hourlyWeather', HourlyWeatherComponent);
