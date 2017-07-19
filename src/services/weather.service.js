const weatherData = require('../../mocks/weather.json');
WeatherService.$inject = ['$http'];
//use this if a dependency is needed, empty for now

function WeatherService($http){
  const baseUrl = "https://gentle-caverns-52020.herokuapp.com/weather/";
  //variable must be defined before returned or it will return before using this
  return {
    //method label     :   function name
    getCurrently: getCurrentlyFunction, //giving the label getCurrently the function getCurrentlyFunction
    getHourly: getHourlyFunction,
    getMinutely: getMinutelyFunction,
    getDaily: getDailyFunction
  }
  function getCurrentlyFunction(lat, lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => { //response is a var name for whatever comes back from the get request
                  console.log(response);
                  return response.data.currently;
                });
  }
  function getHourlyFunction(lat, lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                    .then(response => {
                      console.log(response);
                      return response.data.hourly;
                    });
  }
  function getMinutelyFunction(lat, lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => {
                  console.log(response);
                  return response.data.minutely;
                });
  }
  function getDailyFunction(lat, lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => {
                  console.log(response);
                  return response.data.daily;
                });
  }
}
//this whole function grabs the currently information for you then the parent function will return it
//then it's exported to controller

module.exports = WeatherService;

//going to require in app.js and use it to configure everything
