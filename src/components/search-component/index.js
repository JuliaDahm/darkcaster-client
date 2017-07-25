const template = require('./search.html');
const controller = require('./search.controller');

const SearchComponent = {
  template,
  controller,
  bindings: {
    search: '&',
    lat: '=',
    lon: '='
  }
};

module.exports = SearchComponent;
