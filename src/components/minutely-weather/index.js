const template = require('./minutely-weather.html');
const controller = require('./minutely-weather.controller.js');


const MinutelyWeatherComponent =  {
  template,
  controller,
  bindings: {
    weather: '<'
  }
}

module.exports = MinutelyWeatherComponent;
