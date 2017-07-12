const weatherData = require('../../mocks/weather.json');
WeatherService.$inject = ['$http'];
//use this if a dependency is needed, empty for now

function WeatherService($http){
  const baseUrl = "https://gentle-caverns-52020.herokuapp.com/weather/29,-81"
  //variable must be defined before returned or it will return before using this
  return {
    //method label     :   function name
    getCurrently: getCurrentlyFunction //giving the label getCurrently the function getCurrentlyFunction
  }
  function getCurrentlyFunction(){
    return $http.get(baseUrl)
                .then(response => { //response is a var name for whatever comes back from the get request
                  console.log(response);
                  return response.data.currently;
                })
  }
}
//this whole function grabs the currently information for you then the parent function will return it
//then it's exported to controller

module.exports = WeatherService;

//going to require in app.js and use it to configure everything
