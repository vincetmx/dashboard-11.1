'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them
app.controller('workCtrl',function($scope,$http){
	$http.get("/api/work")
	.then(function(response){
        $scope.works = response.data.works;
	});
});
// });controller('addCtrl',function($scope){
// 	$scope.submitForm=function(){
// 		return function(){
//            var idcount=11;
//            return function(){
//              var newtile ={};
//              newtile.id=icount;
// 		     newtile.title=$scope.tile_title;
// 			 newtile.author=$scope.tile_author;
// 			 newtile.like=$scope.tile_like;
// 			 newtile.comment=$scope.tile_comment;

//            }
// 		}()


// 	}
// }).factory('addworks',function(){
// 	return {};
// });