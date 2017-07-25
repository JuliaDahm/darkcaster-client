MainAppController.$inject = ['WeatherService'];

function MainAppController(weather){
  this.lat = 0;
  this.lon = 0;
  this.search = search;

  function search(){
    console.log('searching...');
    weather.getAll(this.lat, this.lon)
           .this(weatherData => this.weatherData = weatherData);
  }
}

module.exports = MainAppController;
