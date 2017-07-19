const htmlTemplate = require('./daily-weather.html');
const minutelyController = require('./daily-weather.controller');

const DailyWeatherComponent = {
  template: htmlTemplate,
  controller: minutelyController
};

module.exports = DailyWeatherComponent;
