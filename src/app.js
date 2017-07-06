const angular = require('angular');

//create our application
angular.module('darkcaster-client', []); //setter syntax, so we're setting the module name as darkcaster-client

angular.module('darkcaster-client') //getter syntax is w/out comma and brackets, works like 'require'
       .controller('MainController', MainController); //went and got controller

MainController.$inject = []; //magic for us

function MainController(){
  this.message = 'hello from angular';

}
