'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them
app.controller('workCtroller',function($scope,$http){
    $http.get("/api/work")
    .then(function(response){
       $scope.works = response.data.works;
    });

    $scope.myVar1 = true;
    $scope.myVar2 = false;
    $scope.toggle = function(value){
       $scope.myVar1 = !value;
       $scope.myVar2 = value;
    }
    $scope.orderByMe = function(y){
       $scope.myorder = y;
    }
    var tmp=11;
    $scope.submit = function(){
      var items = {};
      items.id =tmp++;
      items.title = $scope.nameAdd;
      items.author = $scope.authorAdd;
      items.like = $scope.likeAdd;
      items.comment = $scope.commentAdd;
      
      $scope.nameAdd = "";
      $scope.authorAdd = "";
      $scope.likeAdd = "";
      $scope.commentAdd = "";

      $scope.works.push(items);
    }

    $scope.deleteItem = function (idx) {
       // $scope.removeItem=-1;
       $scope.removeItem=$scope.works.indexOf(idx);

    }
    $scope.delete=function(){

      $scope.works.splice($scope.removeItem,1);
    }

    $scope.getwork = function(idx){
      $scope.aa =$scope.works.indexOf(idx);;
      $scope.titleEdit=idx.title;
      $scope.authorEdit=idx.author;
      $scope.likeEdit = idx.like;
      $scope.commentEdit = idx.comment;
      
    }

    $scope.editItem = function(){
      
      var n=$scope.aa;
      
      $scope.works[n].title=$scope.titleEdit;
      $scope.works[n].author=$scope.authorEdit;
      $scope.works[n].like=$scope.likeEdit;
      $scope.works[n].comment=$scope.commentEdit;
      console.log(n);
      console.log($scope.titleEdit);
      console.log($scope.works[n]);
    }
});

   
