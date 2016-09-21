'use strict';
// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form
app.controller('contactCtroller',function($scope,$http){
	$http.get("/api/location")
    .then(function(response){
       $scope.locations = response.data.locations;
    });

    $http.get("/api/category")
    .then(function(response){
       $scope.categories = response.data.categories;
    });

    $scope.myDate = new Date();
    $scope.tabs = [
    { title:'Query', disabled: true},
    { title:'Confirmation', disabled: true }
    ];
    $scope.nextQueryTab = function(){
        $scope.tabs[0].disabled = false;
        $scope.active = 1;
    }

    $scope.nextConfirmationTab = function(){
        $scope.tabs[1].disabled = false;
        $scope.active = 2;
    }

    $scope.getRandom = Math.floor(Math.random()*9999999999+1000000000);

    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
     ];

    $scope.getLevel = function(rate){
       if(rate >= 7){
        return 'high';
       }
       if(rate <= 3){
        return 'low';
       }else{
        return 'middle';
       }
    }

});