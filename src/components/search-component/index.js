const template = require('./search.html');
const controller = require('./search.controller');

const SearchComponent = {
  template,
  controller,
  bindings: {
    search: '&'
  }
};

module.exports = SearchComponent;
