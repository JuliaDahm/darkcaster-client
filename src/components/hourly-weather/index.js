const htmlTemplate = require('./hourly-weather.html');
const hourlyController = require('./hourly-weather.controller.js');

const HourlyWeatherComponent = {
  template: htmlTemplate,
  controller: hourlyController
};

module.exports = HourlyWeatherComponent;
