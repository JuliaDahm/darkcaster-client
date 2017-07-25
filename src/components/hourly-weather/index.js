const template = require('./hourly-weather.html');
const controller = require('./hourly-weather.controller.js');

const HourlyWeatherComponent = {
  template,
  controller,
  bindings: {
    weather: '<'
  }
};

module.exports = HourlyWeatherComponent;
