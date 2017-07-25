const template = require('./current-weather.html');
const controller = require('./current-weather.controller');

const CurrentWeatherComponent = {
  template,
  controller,
  bindings: {
    weather: '<'
  }
};

module.exports = CurrentWeatherComponent;
