HourlyWeatherController.$inject = ['images'];
//Angular looks up this service and uses it in the controller
//we set this service name and functionality in the weather.service file

//passing in the service to the controller action
function HourlyWeatherController(images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;
}


module.exports = HourlyWeatherController;
