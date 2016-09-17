'use strict';
// DIALOG DIRECTIVE
// Description: Define 2 directives in the app: addDialog and editDialog. 
// First one is for the "Add" button and the second one is for the "Edit" button
app.directive('addDialog',function(){
	return {
		restrict:'EA',
		replace:true,
		templateUrl:'../../templates/addDialog.html'
	};
});
app.directive('editDialog',function(){
	return {
		restrict:'EA',
		replace:true,
		templateUrl:'../../templates/editDialog.html'
	};
});
app.directive('deleteDialog',function(){
	return {
		restrict:'EA',
		replace:true,
		templateUrl:'../../templates/confirmBox.html'
	
	};
});
