'use strict';
// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality: 
// making service calls to retrieve the logged-in users' information
var getUserService = angular.module("getUserService", ["sessionService"]);
getUserService
	.factory("getUserService", function($http, sessionService){
		/*	Return an object  */
		return {
			/*	Here invokes the service method to retrieve the logged-in user's information  */
			getUser: function(){
				return sessionService.getUser();
			}
		}
	});