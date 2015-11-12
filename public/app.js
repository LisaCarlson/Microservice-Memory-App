angular.module('MyApp', ['ngRoute'])
  .controller('HomeController', ['$scope', '$http', function ($scope, $http) {
    // $http.get('https://still-tundra-8387.herokuapp.com/messages').then(function(response){
    //   $scope.messages = response.data;
    // });
    // $scope.submit = function () {
    //   var dataObj = {
    //     name : $scope.name,
    //     content : $scope.message,
    //   };  
    //   $http.post('https://still-tundra-8387.herokuapp.com/messages', {message: dataObj}).then(function(response){
    //       console.log(response.data)
    //   }, function(){
    //       console.log('error');
    //   });
    //   $scope.name='';
    //   $scope.message='';
    // }
  }])
  .controller('YearController', ['$scope', '$http', function ($scope, $http) {
    // $http.get('https://still-tundra-8387.herokuapp.com/messages').then(function(response){
    //   $scope.messages = response.data;
    // });
    // $scope.submit = function () {
    //   var dataObj = {
    //     name : $scope.name,
    //     content : $scope.message,
    //   };  
    //   $http.post('https://still-tundra-8387.herokuapp.com/messages', {message: dataObj}).then(function(response){
    //       console.log(response.data)
    //   }, function(){
    //       console.log('error');
    //   });
    //   $scope.name='';
    //   $scope.message='';
    // }
  }])
  .config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'HomeController'
      })
      .when('/years', {
        templateUrl: '/partials/year.html',
        controller: 'YearController'
      })
      .when('/page-not-found', {
        templateUrl: '/partials/error.html'
      })
      .otherwise({
        redirectTo: '/page-not-found'
      });
    $locationProvider.html5Mode(true);
  }])