'use strict';
// SESSION SERVICE
// Description: Define the sessionService that has 3 functionalities: 
// get, set, and destroy for users' data in the session storage
var sessionService = angular.module("sessionService", ["ngStorage"]);
sessionService
	.factory("sessionService", function($http, $sessionStorage){
		/*	Return an object	*/
		return {
			getUser: function(){		
				return $sessionStorage.user;
			},
			getUserProfile: function(){		
				return $sessionStorage.UserProfile;
			},
			setUser: function(user){
				$sessionStorage.user = user;
			},
			setUserProfile: function(UserProfile){
				$sessionStorage.UserProfile = UserProfile;
			},
			destroyUser: function(){
				$sessionStorage.user = null;
			}
		}
	})