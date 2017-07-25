const template = require('./daily-weather.html');
const controller = require('./daily-weather.controller');

const DailyWeatherComponent = {
  template,
  controller,
  bindings: {
    weather: '<'
  }
};

module.exports = DailyWeatherComponent;
