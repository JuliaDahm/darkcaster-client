const weatherData = require('../../mocks/weather.json');
WeatherService.$inject = [];
//use this if a dependency is needed, empty for now

function WeatherService(){
  return {
    //method label     :   function name
    getCurrently: getCurrentlyFunction //giving the label getCurrently the function getCurrentlyFunction
  }
  function getCurrentlyFunction(){
    return weatherData.currently;
  }
}
//this whole function grabs the currently information for you then the parent function will return it
//then it's exported to controller

module.exports = WeatherService;

//going to require in app.js and use it to configure everything
