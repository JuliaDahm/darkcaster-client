SearchController.$inject = ["WeatherService"];

function SearchController(weather){
  this.lat = 0;
  this.lon = 0;
}

module.exports = SearchController;
