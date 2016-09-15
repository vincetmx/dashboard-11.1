'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them
app
	.controller('workCtrl',function($scope,$http){
		$http.get("/api/work")
		.then(function(response){
        	$scope.works = response.data.works;
		});
	});