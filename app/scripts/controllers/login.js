'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user
app
	.controller("LoginCtrl", function($scope, $http, authenticateService){
		/*	Here invokes the service method to login a user	 */
		$scope.login = function(user){
			authenticateService.login(user, $http);
		};
	});