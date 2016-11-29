var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/cats', {
    templateUrl: '/views/templates/cats.html',
    controller: 'CatsController',
    controllerAs: 'cats'
  })
  .when('/dogs' ,{
    templateUrl: '/views/templates/dogs.html',
    controller: 'DogsController',
    controllerAs: 'dogs'
  })
  .when('/birds', {
    templateUrl: '/views/templates/birds.html',
    controller: 'BirdsController',
    controllerAs: 'birds'
  })
  .otherwise({
    redirectTo: 'cats'
  });

}]);




app.controller('CatsController', ['$http', function($http) {
  console.log('CatsController up and running');
  var key = '94751f2782a0366a89fbd644a5e9c3ce';
  var self = this;

  self.animal = {};

  self.getRandomPet = function(){
    var query = 'http://api.petfinder.com/'; // baseURL for API
    query += 'pet.getRandom'; // selecting the method we would like to return
    query += '?key=' + key; // Giving petfinder our key
    query += '&animal=cat'
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });

  }

  self.getRandomPet();

  self.message = "Welcome!"
}]);

app.controller('DogsController', ['$http', function($http) {
  console.log('DogsController up and running');
  var key = '94751f2782a0366a89fbd644a5e9c3ce';
  var self = this;

  self.animal = {};

  self.getRandomPet = function(){
    var query = 'http://api.petfinder.com/'; // baseURL for API
    query += 'pet.getRandom'; // selecting the method we would like to return
    query += '?key=' + key; // Giving petfinder our key
    query += '&animal=dog'
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });

  }

  self.getRandomPet();

  self.message = "Welcome!"
}]);

app.controller('BirdsController', ['$http', function($http) {
  console.log('BirdsController up and running');
  var key = '94751f2782a0366a89fbd644a5e9c3ce';
  var self = this;

  self.animal = {};

  self.getRandomPet = function(){
    var query = 'http://api.petfinder.com/'; // baseURL for API
    query += 'pet.getRandom'; // selecting the method we would like to return
    query += '?key=' + key; // Giving petfinder our key
    query += '&animal=bird'
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });

  }

  self.getRandomPet();

  self.message = "Welcome!"
}]);
