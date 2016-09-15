'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged 
var authenticateService =angular.module("authenticateService", ["sessionService"]);
authenticateService
	.factory("authenticateService", function($http, sessionService){
		/*	Define a flag to represent if a user is logged or not  */
		var isUserLogged;
		/*	Define a function to log the user in  */
		function loginUser (user, $http){
			/*	Send an AJAX request to log the user in  */
			$http({
				method: "POST",
				url: "/api/login",
				data: user
			})
			/*	If success, execute this function  */
			.then(function(response){
				/*	Set the logged flag to true  */
				isUserLogged = true;
				/*	Save the user information to the session through sessionService  */
				sessionService.setUser(user);
				/*	Jump to the root page with the assistance of routes	 */
				window.location.href = "#/root";
			/*	If fail, execute this function  */
			}, function(response){
				/*  Set the logged flag to false  */
				isUserLogged = false;
				/*	Remove the previous error information if there is any  */
				$("#errMsgSect").remove();
				/*	Pop out the error information in the login page  */
				$("#loginDiv").prepend(
					$("<div>").prop("id", "errMsgSect")
					.css("width", "350px")
					.css("margin-left","50px")
					.css("background-color", "red")
					.css("font-weight", "bold")
					.css("margin-top", "20px")
					.text("Incorrect information, please try again!")
				)
			});
		}
		/*  Define a function to log the user out	*/
		function logoutUser () {
			/*  Destroy the user information in the session through sessionService   */
			sessionService.destroyUser();
			/*	Jump to the login page  */
			window.location.href = "#/login";
		}
		/*	Return an object   */
		return {
			login: loginUser,
			logout: logoutUser,
			isLogged: function(){
				return isUserLogged;
			}
		}
	})