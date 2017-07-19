const clearDay = require('../images/clear-day.png');
const rainyday = require('../images/rainy-day.png');
const cloudyDay = require('../images/cloudy-day.png');
const missingImage = require('../images/missing-image');

ImageService.$inject = []

function ImageService(){
  const imageLookup = {  //creates imageLookup object with all the needed properties
    'clear-day': clearDay,
    'rain': rainyDay,
    'cloudy': cloudyDay,
    'missing-image': missingImage
  };
  return {
    lookup: imageLookup,
    missing: missingImage
  };
}

module.exports = ImageService;
