'use strict';
// OVERVIEW CONTROLLER
// Description: Define the following functionalities:
// Make service call to retrieve user's information
app
	.controller("UserProfInfoCrtl", function($scope, getProfileService){
		$scope.userProf = {};
		$scope.userProf = {
			userName: getProfileService.getProfile().fullname,
            nickname: getProfileService.getProfile().nickname,
            profileImage: getProfileService.getProfile().profileImage,
		};
	})