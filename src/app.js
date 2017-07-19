const angular = require('angular');

//services
const WeatherService = require('./services/weather.service');
const ImageService = require('./services/weather.service');
// period says start in this directory, not at root

//components
const CurrentWeatherComponent = require('./components/current-weather/');
const HourlyWeatherComponent = require('./components/hourly-weather/');
const MinutelyWeatherComponent = require('./components/minutely-weather');
const DailyWeatherComponent = require('./components/daily-weather');
//create our application
angular.module('darkcaster-client', []) //getter syntax is w/out comma and brackets, works like 'require'
       .factory('WeatherService', WeatherService) //inside angular, create HTML tag with this name
       .factory('images', ImageService)
       .component('currentWeather', CurrentWeatherComponent)//second argument is the function it will use
       .component('hourlyWeather', HourlyWeatherComponent)
       .component('minutelyWeather', MinutelyWeatherComponent)
       .component('dailyWeather', DailyWeatherComponent);
