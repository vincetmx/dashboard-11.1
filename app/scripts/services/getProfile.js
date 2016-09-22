'use strict';
// GETPROFILE SERVICE
// Description: Define the profileService that has 1 functionality: getProfile
var getProfileService = angular.module("getProfileService", ["sessionService"]);
getProfileService
	.factory("getProfileService", function($http, sessionService){
		return {
			getProfile: function(){
				return sessionService.getUserProfile();
				
			}
		
		}	
	});