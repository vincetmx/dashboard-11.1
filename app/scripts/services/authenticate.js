'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged 
var authenticateService =angular.module("authenticateService", ["sessionService"]);
authenticateService
	.factory("authenticateService", function($http, $location, sessionService){
		/*	Define a flag to represent if a user is logged or not  */
		var isUserLogged;
		/*	Return an object   */
		return {
			/*	This is a function to log the user in  */
			login: function(user, $http){
				/*	Send an AJAX request to log the user in  */
				$http({
					method: "POST",
					url: "/api/login",
					data: user
				})
				.then(
					/*	If success, execute this function  */
					function(response){
						/*	Set the logged flag to true  */
						isUserLogged = true;
						$http({
							method: "GET",
							url: "/api/getuser?user=" + user.userName,
							// data: user.userName,
							// qs:{req.query.user : user.userName}
						})
						.then(function(response){
					        	/*	Save the user information to the session through sessionService  */
								sessionService.setUser(response.data);
								/*	Jump to the root page with the assistance of routes	 */
								$location.url("/root");
							});
						$http({
							method:"GET",
							url:"/api/profile",
						})
						.then(
							function(response){
								// sessionService.setUserProfile(response.data.profiles[0]);
								var userProfile = response.data.profiles;
								for (var i = userProfile.length - 1; i >= 0; i--) {
									if (userProfile[i].username===user.userName){
										sessionService.setUserProfile(userProfile[i]);
									}
								}
						})
						// $location.url("/work");
					}, 
					/*	If fail, execute this function  */
					function(response){
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
					}
				);
			},
			/*  This is a function to log the user out	*/
			logout: function(){
				/*  Destroy the user information in the session through sessionService   */
				sessionService.destroyUser();
				/*	Jump to the login page  */
				$location.url("/login");
			},
			/*	This is a function to get the state signifying if a user is logged-in or not  */
			isLogged: function(){
				return isUserLogged;
			}
		}
	})