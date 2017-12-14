'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', function($scope, $http) {
  $scope.submitDone = false;
  $scope.montants = [1000,2000,3000,5000,10000];
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

  $scope.addCredit = function(personne){
    $scope.submitDone = true;   
    $scope.personne = {
      nom: personne.nom,
      prenom: personne.prenom,
      telephone: personne.telephone,
      email: personne.email,
      montant: personne.montant
    };
    if(ajoutPersonne.nom.value != "" && ajoutPersonne.prenom.value != "" && ajoutPersonne.telephone.value != "" && ajoutPersonne.email.value != "" && ajoutPersonne.montant.value != "")
    {
      $http({
        url: '',
        method: 'POST',
        data: $scope.personne
      }).then(function successCallback(response) {
        //$scope.personnes.push(personne);
      }, function errorCallback(response) {
        if(response.status === 405)
        {
          //console.log(response);
          $("#basicModal").modal('show');
        }
      });
    }
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
})

.directive('error404', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/error404.html'
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