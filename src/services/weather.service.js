WeatherService.$inject = ['$http'];
//use this if a dependency is needed, empty for now

function WeatherService($http){
  const baseUrl = "https://gentle-caverns-52020.herokuapp.com/weather/";
  //variable must be defined before returned or it will return before using this
  return {
    //method label     :   function name
    getAll: getAllFunction
  };
  function getAllFunction(lat, lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => {
                  console.log(response);
                  return response.data;
                });
  }
}
//this whole function grabs the currently information for you then the parent function will return it
//then it's exported to controller

module.exports = WeatherService;

//going to require in app.js and use it to configure everything
