MainAppController.$inject = ['WeatherService', 'images'];

function MainAppController(weather, images){
  this.lat = 0;
  this.lon = 0;
}

module.exports = MainAppController;
