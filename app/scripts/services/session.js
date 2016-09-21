 'use strict';
// SESSION SERVICE
// Description: Define the sessionService that has 3 functi""onalities: 
// get, set, and destroy for users' data in the session storage
var sessionService = angular.module("sessionService", ["ngStorage"]);
sessionService
	.factory("sessionService", function($http, $sessionStorage){
		/*	Return an object	*/
		return {
			getUser: function(){		
				return $sessionStorage.user;
			},
			setUser: function(user){
				$sessionStorage.user = user;
			},
			destroyUser: function(){
				$sessionStorage.user = null;
			}
		}
	})