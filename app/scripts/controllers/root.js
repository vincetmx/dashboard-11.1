'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in
app
	.controller("UserInfoCtrl", function($scope, getUserService){
		/*	Initialize a variable as object to store user information  */
		$scope.user = {};
		/*	Here invokes the service method to retrieve the user's information displayed on the header  */
		$scope.user = {
			userName: getUserService.getUser().userName
		}
	})
	.controller("LogoutCtrl", function($scope, authenticateService){
		/*	Here invokes the service method to logout the user	*/
		$scope.logout = function(){
			authenticateService.logout();
		};
	})
	.controller("CurDateCtrl", function($scope) {
		/*	Initialize a variable as object to store date information  */
		$scope.date = {
			now: new Date()
		};
		/*	Populate the current date that the user logs in  */
		$scope.date = {
			curDateStr: ($scope.date.now.getMonth() + 1) + "/" + $scope.date.now.getDate() + "/" + $scope.date.now.getFullYear()
		}
	});
