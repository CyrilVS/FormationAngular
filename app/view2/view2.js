'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', function($scope, $http) {
  $scope.recupInfo = function () {
    $http({
      url: 'models/listcredits.json',
      method: 'GET'
    }).then(function successCallback(response) {
      $scope.DocRecup = response.data;
      console.log($scope.DocRecup);
    }, function errorCallback(response) {
      console.log(response);
    });
  };
}])

.directive('formu', function() {
  return {
    restrict: 'E',
    templateUrl: 'widgets/formulaire.html'
  };
})

.directive('menuList', function() {
  return {
    restrict: 'E',
    templateUrl: 'widgets/menu.html'
  };
});

/*.directive('crediteurList', function() {
  return {
    restrict: 'E',
    templateUrl: 'widgets/crediteur.html',
    scope: {
      personnes: '=DocRecup'
    }
  };
});*/