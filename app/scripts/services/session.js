'use strict';
// SESSION SERVICE
// Description: Define the sessionService that has 3 functionalities: 
// get, set, and destroy for users' data in the session storage
var sessionService = angular.module("sessionService", []);
sessionService
	.factory("sessionService", function($http){
		/*	Define a variable to store the user information in the session   */
		var userInSession;
		/*	Return an object	*/
		return {
			getUser: function(){		
				return userInSession
			},
			setUser: function(user){
				userInSession = user;
			},
			destroyUser: function(){
				userInSession = null;
			}
		}
	})