const htmlTemplate = require('./minutely-weather.html');
const minuteController = require('./minutely-weather.controller.js');


const MinutelyWeatherComponent =  {
  template: htmlTemplate,
  controller: minuteController
}

module.exports = MinutelyWeatherComponent;
