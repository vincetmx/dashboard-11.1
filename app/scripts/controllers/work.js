'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them
app.controller('workCtrl',function($scope,$http,passhelper){
	$http.get("/api/work")
	.then(function(response){
        $scope.works = response.data.works;
	});
    
    $scope.myVar1 = true;
    $scope.myVar2 = false;

    $scope.toggle = function(value){
       $scope.myVar1 = !value;
       $scope.myVar2 = value;
       console.log($scope.myVar1);
       console.log($scope.myVar2);
    }

    $scope.orderByMe=function(name){
    	//myorder is defined in DOM, name is the rule that wants to order by
    	$scope.myorder=name;
    }
    var tmp=11;

	$scope.submit=function(){
		var obj={};
        obj.id=tmp++;
        obj.title=$scope.nameAdd;
        obj.author=$scope.authorAdd;
        obj.like=$scope.likeAdd;
        obj.comment=$scope.commentAdd;
        console.log(obj);
        $scope.works.push(obj);
        $scope.nameAdd=null;
        $scope.authorAdd=null;
        $scope.likeAdd=null;
        $scope.commentAdd=null;
        console.log($scope.works[$scope.works.length-1].id);
    };
    
    $scope.deleteconfirm=function(work){
        $scope.removeIndex = $scope.works.indexOf(work);
    }

    $scope.delete=function(){
        $scope.works.splice($scope.removeIndex,1);
    }

    $scope.editconfirm=function(work){
       $scope.editIndex = $scope.works.indexOf(work);
       console.log($scope.works[$scope.editIndex].title);
       console.log($scope.editTitle);
       console.log("testtest");
    };

    $scope.editor=function(){
        $scope.works[$scope.editIndex].title=passhelper.title;
        $scope.works[$scope.editIndex].author=passhelper.author;
        $scope.works[$scope.editIndex].like=passhelper.like;
        $scope.works[$scope.editIndex].comment=passhelper.comment;
    }
}).factory('passhelper',function(){
    return {
       title:"",
       author:"",
       like:"",
       comment:""
    };
});

