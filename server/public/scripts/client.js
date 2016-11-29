var app = angular.module('app', []);

app.controller('firstController', ['$http', function($http) {
  console.log('firstController up and running');
  self.message = "Welcome!"
}]);
