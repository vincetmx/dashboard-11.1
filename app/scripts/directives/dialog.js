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
		scope:{
			editTitle:'@editName',
			editAuthor:'@editAuthor',
			editLike:'@editLike',
			editComment:'@editComment',
			editor:"&"
		},
		controller:function($scope,passhelper){
           $scope.$watch('editTitle',function(newValue,oldValue){
               passhelper.title=$scope.editTitle;
           });
           $scope.$watch('editAuthor',function(newValue,oldValue){
               passhelper.author=$scope.editAuthor;
           });
           $scope.$watch('editLike',function(newValue,oldValue){
               passhelper.like=$scope.editLike;
           });
           $scope.$watch('editComment',function(newValue,oldValue){
               passhelper.comment=$scope.editComment;
           });
		},
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