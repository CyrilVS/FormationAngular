'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'CtrlCredit'
  });
}])
.controller('CtrlCredit', ['$scope', function($scope) {    
  $scope.submitDone = false;
  $scope.personne = {
    nom: null,
    prenom: null,
    telephone: null,
    email: null,
    montant: null
  };
  $scope.montants = [1000,2000,3000,5000,10000];
  $scope.personnes = [];

  $scope.savePersonne = function(){
    console.log($scope.personne);
  };  
  $scope.addCredit = function(personne){
    $scope.submitDone = true;
    if(ajoutPersonne.nom.value != "" && ajoutPersonne.prenom.value != "" && ajoutPersonne.telephone.value != "" && ajoutPersonne.email.value != "" && ajoutPersonne.montant.value != "")
    {
      $scope.personne = {
        nom: personne.nom,
        prenom: personne.prenom,
        telephone: personne.telephone,
        email: personne.email,
        montant: personne.montant
      };
      $scope.personnes.push(personne);
    }
  };
}])
.directive('menuCredit', function() {
  return {
    restrict: 'E',
    templateUrl: 'widgets/menu.html'
  };
})
.directive('formulaire', function() {
  return {
    restrict: 'E',
    templateUrl: 'widgets/formulaire.html'
  };
})
.directive('crediteur', function() {
  return {
    restrict: 'E',
    templateUrl: 'widgets/crediteur.html'
  };
})
.directive('myCustomer', function() {
  return {
    templateUrl: function(elem, attr){
      return 'widgets/customer-' + attr.type +'.html'
    }
  };
})
.filter('makeUpperCase', function() {
  return function(item){
    return item.toUpperCase();
  };
});