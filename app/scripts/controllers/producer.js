'use strict';
// PRODUCER CONTROLLER
// Description: Define the following functionalities:
// Creative manipulations for whatever stuff this section wants to do
app.controller('producerCtrl',function($scope,$timeout,$interval){
	var whiteballArr=[];
	for(var i=0;i<69;i++){
	   var tmp={num:(i+1)}
       whiteballArr.push(tmp);
	};

	$scope.whiteball1=whiteballArr;
	$scope.whiteball2=whiteballArr;
	$scope.whiteball3=whiteballArr;
	$scope.whiteball4=whiteballArr;
	$scope.whiteball5=whiteballArr;

	$scope.not=function(actual,expected){
        if(actual!=expected){
        	return true;
        }
        return false;
	};

	function filtersame(arr){
        for(var i=0;i<arr.length;i++){
        	for(var j=i+1;j<arr.length;j++){
        		if(arr[j]==arr[i]){
        			return true;
        		}
        	}
        }
        return false;
	}
    
    var selector1dirty=false;
    var selector2dirty=false;
    var selector3dirty=false;
    var selector4dirty=false;
    var selector5dirty=false;

    $scope.selector1dirty=function(){
        selector1dirty=true;
    }
    $scope.selector2dirty=function(){
        selector2dirty=true;
    }
    $scope.selector3dirty=function(){
        selector3dirty=true;
    }
    $scope.selector4dirty=function(){
        selector4dirty=true;
    }
    $scope.selector5dirty=function(){
        selector5dirty=true;
    }

	$scope.randompick=function(){
			do{
                if(!selector1dirty){
                    $scope.selectedWhiteball1={num:Math.ceil(Math.random()*69)};
                }
			    if(!selector2dirty){
                    $scope.selectedWhiteball2={num:Math.ceil(Math.random()*69)};
                }
				if(!selector3dirty){
                   $scope.selectedWhiteball3={num:Math.ceil(Math.random()*69)}; 
                }
				if(!selector4dirty){
                    $scope.selectedWhiteball4={num:Math.ceil(Math.random()*69)};
                }
				if(!selector5dirty){
                    $scope.selectedWhiteball5={num:Math.ceil(Math.random()*69)};                
                }
                var tmparr=[$scope.selectedWhiteball1.num,$scope.selectedWhiteball2.num,$scope.selectedWhiteball3.num,$scope.selectedWhiteball4.num,$scope.selectedWhiteball5.num]
            }while(filtersame(tmparr));

            var ball1 = $scope.selectedWhiteball1.num;
            var ball2 = $scope.selectedWhiteball2.num;
            var ball3 = $scope.selectedWhiteball3.num;
            var ball4 = $scope.selectedWhiteball4.num;
            var ball5 = $scope.selectedWhiteball5.num;
            
            var NewArr=[ball1,ball2,ball3,ball4,ball5];
            function sortNumber(a,b){return a-b};
            NewArr.sort(sortNumber);
            
            $scope.selectedWhiteball1={num:NewArr[0]};
            $scope.selectedWhiteball2={num:NewArr[1]};
            $scope.selectedWhiteball3={num:NewArr[2]};
            $scope.selectedWhiteball4={num:NewArr[3]};
            $scope.selectedWhiteball5={num:NewArr[4]};

            selector1dirty=false;
            selector2dirty=false;
            selector3dirty=false;
            selector4dirty=false;
            selector5dirty=false;
	};
    
    $scope.lotteryswitch1=true;
    $scope.lotteryswitch2=false;

    $scope.blackjackswitch1=true;
    $scope.blackjackswitch2=false;

    $scope.rouletteswitch1=true;
    $scope.rouletteswitch2=false;

    $scope.eyetrainingswitch1=true;
    $scope.eyetrainingswitch2=false;

    $scope.typingswitch1=true;
    $scope.typingswitch2=false;

    $scope.showlotteryboard=function(value){
        $scope.lotteryswitch1=value;
        $scope.lotteryswitch2=!value;
    }

    $scope.switchblackjack=function(value){
        $scope.blackjackswitch1=value;
        $scope.blackjackswitch2=!value;
    }

    $scope.switchroulette=function(value){
        $scope.rouletteswitch1=value;
        $scope.rouletteswitch2=!value;
        round=0;
        document.getElementById('roulette').style.transition="ease-out 0s";
        document.getElementById('roulette').style.transform="rotate("+round+"deg)";
        $scope.decision="";
    }

    $scope.switcheyetraining=function(value){
        $scope.eyetrainingswitch1=value;
        $scope.eyetrainingswitch2=!value;
    }

    $scope.switchtyping=function(value){
        $scope.typingswitch1=value;
        $scope.typingswitch2=!value;
    }

    var cardArr=[];
    for(var i=1,j=1,k=0;i<53;i++){
    	var tmp={num:j,src:"assets/images/src/producer/cards/"+i+".jpg"};
    	if(j==10){
    		if(k==3){
    			k=-1;
    			j=1;
    		}
    		k++;
    	}else{
    	   j++;
    	}
    	cardArr.push(tmp);
    }

    var getcardsclick=1; 
    var enemycard1show={};
    var enemycard2show={};
    var enemycard3show={};
    var enemycard4show={};
    var enemycard5show={};
    var mycard1show={};
    var mycard2show={};
    var mycard3show={};
    var mycard4show={};
    var mycard5show={};

    var enemycard1number;
	var enemycard2number;
	var enemycard3number;
	var enemycard4number;
	var enemycard5number;
	var mycard1number;
	var mycard2number;
	var mycard3number;
	var mycard4number;
	var mycard5number;

    var enemyhasAce=false;
    var myhasAce=false;

    var enemyAI=false;
    
    var resultOn=false;

	$scope.getcards=function(){
		if(!resultOn){
			if(getcardsclick==1){
			do{
				enemycard1number=Math.ceil(Math.random()*52);
				mycard1number=Math.ceil(Math.random()*52);
				var tmparr=[enemycard1number,mycard1number];
			}
			while(filtersame(tmparr))
			
			enemycard1show={num:cardArr[enemycard1number].num,src:cardArr[enemycard1number].src};
		    mycard1show={num:cardArr[mycard1number].num};
            $scope.enemycard1={num:cardArr[enemycard1number].num,src:"assets/images/src/producer/cards/55.jpg"};
            $scope.mycard1={num:cardArr[mycard1number].num,src:cardArr[mycard1number].src};
            if(enemycard1show.num==1){
                enemyhasAce=true;
            }
            if(mycard1show.num==1){
                myhasAce=true;
            }
	        }
	        if(getcardsclick==2){
	        	do{
	                 enemycard2number=Math.ceil(Math.random()*52);
	                 mycard2number=Math.ceil(Math.random()*52);
	                 var tmparr=[enemycard1number,mycard1number,enemycard2number,mycard2number];
	        	}while(filtersame(tmparr))
	           
				enemycard2show={num:cardArr[enemycard2number].num,src:cardArr[enemycard2number].src};
				mycard2show={num:cardArr[mycard2number].num};
	            $scope.enemycard2={num:cardArr[enemycard2number].num,src:"assets/images/src/producer/cards/55.jpg"};
	            $scope.mycard2={num:cardArr[mycard2number].num,src:cardArr[mycard2number].src};

                if(enemycard1show.num==1||enemycard2show.num==1){
                    enemyhasAce=true;
                }
                if(mycard1show.num==1||mycard2show.num==1){
                    myhasAce=true;
                }
                if(enemycard1show.num+enemycard2show.num>16+Math.ceil(Math.random()*3)){
                    enemyAI=true;
                }
	        }
	        if(getcardsclick==3){
	        	do{
	        		enemycard3number=Math.ceil(Math.random()*52);
	        		mycard3number=Math.ceil(Math.random()*52);
	        		var tmparr=[enemycard1number,mycard1number,enemycard2number,mycard2number,enemycard3number,mycard3number];
	        	}while(filtersame(tmparr))
	           
                if(!enemyAI){
                    enemycard3show={num:cardArr[enemycard3number].num,src:cardArr[enemycard3number].src};
                    $scope.enemycard3={num:cardArr[enemycard3number].num,src:"assets/images/src/producer/cards/55.jpg"};
                }else{
                    enemycard3show={num:0,src:""};
                }

				mycard3show={num:cardArr[mycard3number].num};
	            $scope.mycard3={num:cardArr[mycard3number].num,src:cardArr[mycard3number].src};

	            if(mycard1show.num+mycard2show.num+mycard3show.num>21){
                    $scope.enemycard1={num:enemycard1show.num,src:enemycard1show.src};
                    $scope.enemycard2={num:enemycard2show.num,src:enemycard2show.src};
                    $scope.enemycard3={num:enemycard3show.num,src:enemycard3show.src};
                	$scope.gameresult_lose=true;
                	resultOn=true;
                }
                if(enemycard1show.num+enemycard2show.num+enemycard3show.num>21&&resultOn==false){
                	$scope.enemycard1={num:enemycard1show.num,src:enemycard1show.src};
                    $scope.enemycard2={num:enemycard2show.num,src:enemycard2show.src};
                    $scope.enemycard3={num:enemycard3show.num,src:enemycard3show.src};
                	$scope.gameresult_win=true;
                	resultOn=true;
                }

                if(enemycard1show.num==1||enemycard2show.num==1||enemycard3show.num==1){
                    enemyhasAce=true;
                }
                if(mycard1show.num==1||mycard2show.num==1||mycard3show.num==1){
                    myhasAce=true;
                }
                if(enemycard1show.num+enemycard2show.num+enemycard3show.num>16+Math.ceil(Math.random()*3)){
                    enemyAI=true;
                }
	        }
	        if(getcardsclick==4){
	        	do{
	        		enemycard4number=Math.ceil(Math.random()*52);
	        		mycard4number=Math.ceil(Math.random()*52);
	        		var tmparr=[enemycard1number,mycard1number,enemycard2number,mycard2number,enemycard3number,mycard3number,enemycard4number,mycard4number];
	        	}while(filtersame(tmparr))
	           
                if(!enemyAI){
                    enemycard4show={num:cardArr[enemycard4number].num,src:cardArr[enemycard4number].src};
                    $scope.enemycard4={num:cardArr[enemycard4number].num,src:"assets/images/src/producer/cards/55.jpg"};
                }else{
                    enemycard4show={num:0,src:""};
                }

				mycard4show={num:cardArr[mycard4number].num};
	            $scope.mycard4={num:cardArr[mycard4number].num,src:cardArr[mycard4number].src};

	            if(mycard1show.num+mycard2show.num+mycard3show.num+mycard4show.num>21){
                    $scope.enemycard1={num:enemycard1show.num,src:enemycard1show.src};
                    $scope.enemycard2={num:enemycard2show.num,src:enemycard2show.src};
                    $scope.enemycard3={num:enemycard3show.num,src:enemycard3show.src};
                    $scope.enemycard4={num:enemycard4show.num,src:enemycard4show.src};
                	$scope.gameresult_lose=true;
                	resultOn=true;
                }
                if(enemycard1show.num+enemycard2show.num+enemycard3show.num+enemycard4show.num>21&&resultOn==false){
                	$scope.enemycard1={num:enemycard1show.num,src:enemycard1show.src};
                    $scope.enemycard2={num:enemycard2show.num,src:enemycard2show.src};
                    $scope.enemycard3={num:enemycard3show.num,src:enemycard3show.src};
                    $scope.enemycard4={num:enemycard4show.num,src:enemycard4show.src};
                	$scope.gameresult_win=true;
                	resultOn=true;
                }

                if(enemycard1show.num==1||enemycard2show.num==1||enemycard3show.num==1||enemycard4show.num==1){
                    enemyhasAce=true;
                }
                if(mycard1show.num==1||mycard2show.num==1||mycard3show.num==1||mycard4show.num==1){
                    myhasAce=true;
                }
                if(enemycard1show.num+enemycard2show.num+enemycard3show.num+enemycard4show.num>16+Math.ceil(Math.random()*3)){
                    enemyAI=true;
                }
	        }
	        if(getcardsclick==5){
	        	do{
	                enemycard5number=Math.ceil(Math.random()*52);
	                mycard5number=Math.ceil(Math.random()*52);
	           		var tmparr=[enemycard1number,mycard1number,enemycard2number,mycard2number,enemycard3number,mycard3number,enemycard4number,mycard4number,enemycard5number,mycard5number];
	        	}while(filtersame(tmparr))
	           
                if(!enemyAI){
                    enemycard5show={num:cardArr[enemycard5number].num,src:cardArr[enemycard5number].src};
                    $scope.enemycard5={num:cardArr[enemycard5number].num,src:"assets/images/src/producer/cards/55.jpg"};
                }else{
                    enemycard5show={num:0,src:""};
                }

				mycard5show={num:cardArr[mycard5number].num};
	            $scope.mycard5={num:cardArr[mycard5number].num,src:cardArr[mycard5number].src};

	            if(mycard1show.num+mycard2show.num+mycard3show.num+mycard4show.num+mycard5show.num>21){
                    $scope.enemycard1={num:enemycard1show.num,src:enemycard1show.src};
                    $scope.enemycard2={num:enemycard2show.num,src:enemycard2show.src};
                    $scope.enemycard3={num:enemycard3show.num,src:enemycard3show.src};
                    $scope.enemycard4={num:enemycard4show.num,src:enemycard4show.src};
                    $scope.enemycard5={num:enemycard5show.num,src:enemycard5show.src};
                	$scope.gameresult_lose=true;
                	resultOn=true;
                }
                if(enemycard1show.num+enemycard2show.num+enemycard3show.num+enemycard4show.num+enemycard5show.num>21&&resultOn==false){
                	$scope.enemycard1={num:enemycard1show.num,src:enemycard1show.src};
                    $scope.enemycard2={num:enemycard2show.num,src:enemycard2show.src};
                    $scope.enemycard3={num:enemycard3show.num,src:enemycard3show.src};
                    $scope.enemycard4={num:enemycard4show.num,src:enemycard4show.src};
                    $scope.enemycard5={num:enemycard5show.num,src:enemycard5show.src};
                	$scope.gameresult_win=true;
                	resultOn=true;
                }
                if(enemycard1show.num==1||enemycard2show.num==1||enemycard3show.num==1||enemycard4show.num==1||enemycard5show.num==1){
                    enemyhasAce=true;
                }
                if(mycard1show.num==1||mycard2show.num==1||mycard3show.num==1||mycard4show.num==1||mycard5show.num==1){
                    myhasAce=true;
                }
	        }
	        if(getcardsclick<6){
	        	getcardsclick++;
	        }
		}
	};
    
    var sumofarr1=0;
    var sumofarr2=0;

    function gameset(arr1,arr2,enemyhasace,myhasace){
        for(var i=0;i<arr1.length;i++){
        	sumofarr1+=arr1[i];
        }
        for(var j=0;j<arr2.length;j++){
        	sumofarr2+=arr2[j];
        }
        
        console.log(sumofarr1);
        console.log(sumofarr2);

        if(enemyhasace){
            if(sumofarr1<=11){
                sumofarr1+=10;
            }
        }
        if(myhasace){
            if(sumofarr2<=11){
                sumofarr2+=10;
            }
        }
        if(sumofarr1>sumofarr2){
        	return false;
        }else{
        	return true;
        }
    }

    function game(){
    	if(getcardsclick==2){
    		var tmp1=[enemycard1show.num];
    		var tmp2=[mycard1show.num];
        	$scope.gameresult_win=gameset(tmp1,tmp2,enemyhasAce,myhasAce);
        	$scope.gameresult_lose=!$scope.gameresult_win;
        };
        if(getcardsclick==3){
        	var tmp1=[enemycard1show.num,enemycard2show.num];
    		var tmp2=[mycard1show.num,mycard2show.num];
        	$scope.gameresult_win=gameset(tmp1,tmp2,enemyhasAce,myhasAce);
        	$scope.gameresult_lose=!$scope.gameresult_win;
        };
        if(getcardsclick==4){
        	var tmp1=[enemycard1show.num,enemycard2show.num,enemycard3show.num];
    		var tmp2=[mycard1show.num,mycard2show.num,mycard3show.num];
        	$scope.gameresult_win=gameset(tmp1,tmp2,enemyhasAce,myhasAce);
        	$scope.gameresult_lose=!$scope.gameresult_win;
        };
        if(getcardsclick==5){
        	var tmp1=[enemycard1show.num,enemycard2show.num,enemycard3show.num,enemycard4show.num];
    		var tmp2=[mycard1show.num,mycard2show.num,mycard3show.num,mycard4show.num];
        	$scope.gameresult_win=gameset(tmp1,tmp2,enemyhasAce,myhasAce);
        	$scope.gameresult_lose=!$scope.gameresult_win;
        };
        if(getcardsclick==6){
        	var tmp1=[enemycard1show.num,enemycard2show.num,enemycard3show.num,enemycard4show.num,enemycard5show.num];
    		var tmp2=[mycard1show.num,mycard2show.num,mycard3show.num,mycard4show.num,mycard5show.num];
        	$scope.gameresult_win=gameset(tmp1,tmp2,enemyhasAce,myhasAce);
        	$scope.gameresult_lose=!$scope.gameresult_win;
        };
    }

	$scope.showresult=function(){
        if(!resultOn){
    		$scope.enemycard1={num:enemycard1show.num,src:enemycard1show.src};
            $scope.enemycard2={num:enemycard2show.num,src:enemycard2show.src};
            $scope.enemycard3={num:enemycard3show.num,src:enemycard3show.src};
            $scope.enemycard4={num:enemycard4show.num,src:enemycard4show.src};
            $scope.enemycard5={num:enemycard5show.num,src:enemycard5show.src};
            resultOn=true;
            game();
        }
        console.log(sumofarr1+" "+sumofarr2);
	};
    
    
	$scope.resetgame=function(){
		resultOn=false;
        enemyhasAce=false;
        myhasAce=false;
        enemyAI=false;
		getcardsclick=1;
		sumofarr1=0;
		sumofarr2=0;
		$scope.enemycard1=null;
		$scope.enemycard2=null;
		$scope.enemycard3=null;
		$scope.enemycard4=null;
		$scope.enemycard5=null;
		$scope.mycard1=null;
		$scope.mycard2=null;
		$scope.mycard3=null;
		$scope.mycard4=null;
		$scope.mycard5=null;
		enemycard1show={};
	    enemycard2show={};
	    enemycard3show={};
	    enemycard4show={};
	    enemycard5show={};
	    mycard1show={};
        mycard2show={};
        mycard3show={};
        mycard4show={};
        mycard5show={};
        $scope.gameresult_lose=false;
        $scope.gameresult_win=false;
	};

    var round=0;

    $scope.playroulette=function(){
        var timer=0;
        return function(){
               $timeout.cancel(timer);
               round+=1080+Math.ceil(Math.random()*360);
               document.getElementById('roulette').style.transition="ease-out 5s";
               document.getElementById('roulette').style.transform="rotate("+round+"deg)";
                      
                if(round%360<=36){
                    timer=$timeout(function(){
                       $scope.decision="assets/images/src/producer/cooking.png";
                    },5100);
                }else if(round%360>36&&round%360<=108){
                    timer=$timeout(function(){
                        $scope.decision="assets/images/src/producer/washing.png";
                    },5100);
                }else if(round%360>108&&round%360<=180){
                    timer=$timeout(function(){
                        $scope.decision="assets/images/src/producer/game.png";
                    },5100);
                }else if(round%360>180&&round%360<=252){
                    timer=$timeout(function(){
                        $scope.decision="assets/images/src/producer/learning.png";
                    },5100);
                }else if(round%360>252&&round%360<=324){
                    timer=$timeout(function(){
                         $scope.decision="assets/images/src/producer/movie.png";
                    },5100);
                }else if(round%360>324&&round%360<=360){
                    timer=$timeout(function(){
                       $scope.decision="assets/images/src/producer/cooking.png";
                    },5100);
                }
                console.log(round);
                $timeout(function(){
                       console.log($scope.decision);
                },5200);
                
        }
    }();
    
    var eyetraningcard1show={};
    var eyetraningcard2show={};
    var eyetraningcard3show={};

    var eyetraningcard1number=0;
    var eyetraningcard2number=0;
    var eyetraningcard3number=0;

    var movingcard1=document.getElementById('movingcard1');
    var movingcard2=document.getElementById('movingcard2');
    var movingcard3=document.getElementById('movingcard3');

    $scope.eyetraining_getcards=function(){
        do{
            eyetraningcard1number=Math.ceil(Math.random()*52);
            eyetraningcard2number=Math.ceil(Math.random()*52);
            eyetraningcard3number=Math.ceil(Math.random()*52);

            var tmparr=[eyetraningcard1number,eyetraningcard2number,eyetraningcard3number];
        }while(filtersame(tmparr))
       
        $scope.eyetrainingcard1={num:cardArr[eyetraningcard1number].num,src:cardArr[eyetraningcard1number].src};
        $scope.eyetrainingcard2={num:cardArr[eyetraningcard2number].num,src:cardArr[eyetraningcard2number].src};
        $scope.eyetrainingcard3={num:cardArr[eyetraningcard3number].num,src:cardArr[eyetraningcard3number].src};

        var decide_target=Math.ceil(Math.random()*3);
        if(decide_target==1){
            $scope.eyetrainingtargetcard={num:cardArr[eyetraningcard1number].num,src:cardArr[eyetraningcard1number].src};
        }
        if(decide_target==2){
            $scope.eyetrainingtargetcard={num:cardArr[eyetraningcard2number].num,src:cardArr[eyetraningcard2number].src};
        }
        if(decide_target==3){
            $scope.eyetrainingtargetcard={num:cardArr[eyetraningcard3number].num,src:cardArr[eyetraningcard3number].src};
        }
        movingcard1.style.left="150px";
        movingcard2.style.left="400px";
        movingcard3.style.left="650px";

        movingcard1.style.transition="ease-out 0.3s";
        movingcard2.style.transition="ease-out 0.3s";
        movingcard3.style.transition="ease-out 0.3s";
    };
    
    var eyetrainingreday=false; 
    var chooserightcard=false;

    $scope.eyetraining_ready=function(){
        $scope.eyetrainingcard1.src="assets/images/src/producer/cards/55.jpg";
        $scope.eyetrainingcard2.src="assets/images/src/producer/cards/55.jpg";
        $scope.eyetrainingcard3.src="assets/images/src/producer/cards/55.jpg";
        eyetrainingreday=true;
    }

    var intervalstart=false; 

    $scope.movingcards=function(){
        if(eyetrainingreday){
            intervalstart=true;
            var moving_time=5000+Math.ceil(Math.random()*3000);
            $timeout(function(){
                intervalstart=false;
                chooserightcard=true; 
            },moving_time);
        }
    }

    $interval(function(){
        if(intervalstart){
            var moving_objects=Math.ceil(Math.random()*3);
            console.log("moving_objects: "+moving_objects);
            movingProcessing(moving_objects);
        }
    },1000);

    function movingProcessing(way){
        switch(way){
            case 1:
               swapCards(1,2);
               break;
            case 2:
               swapCards(1,3);
               break;
            case 3:
               swapCards(2,3);
               break;
            default:
               break;
        }
    };

    function swapCards(a,b){
       updateCards();
       if(a==1&&b==2){
            $timeout(function(){updateArr[0].style.left="400px"},300);
            updateArr[1].style.left="150px";
       }
       if(a==1&&b==3){
            $timeout(function(){updateArr[0].style.left="650px"},300);
            updateArr[2].style.left="150px";
       }
       if(a==2&&b==3){
            $timeout(function(){updateArr[1].style.left="650px"},300);
            updateArr[2].style.left="400px";
       }
    }
    
    var updateArr=[];

    function updateCards(){
        var dummyArr=[movingcard1,movingcard2,movingcard3,movingcard1,movingcard2,movingcard3,movingcard1,movingcard2,movingcard3];
        updateArr=[];
        var update1=true;
        var update2=false;
        var update3=false;

        for(var z=0;z<9;z++){
            if(update1){
                if(dummyArr[z].style.left=="150px"){
                    updateArr.push(dummyArr[z]);
                    update1=false;
                    update2=true;
                }
            }
            if(update2){
                if(dummyArr[z].style.left=="400px"){
                    updateArr.push(dummyArr[z]);
                    update2=false;
                    update3=true;
                }
            }
            if(update3){
                if(dummyArr[z].style.left=="650px"){
                    updateArr.push(dummyArr[z]);
                    update3=false;
                }
            }
        }
        console.log(updateArr);
        return updateArr;
    }

    $scope.choosecard1=function(){
        if(chooserightcard){
            movingcard1.style.border="5px solid red";
            $scope.eyetrainingcard1={num:cardArr[eyetraningcard1number].num,src:cardArr[eyetraningcard1number].src};
            $scope.eyetrainingcard2={num:cardArr[eyetraningcard2number].num,src:cardArr[eyetraningcard2number].src};
            $scope.eyetrainingcard3={num:cardArr[eyetraningcard3number].num,src:cardArr[eyetraningcard3number].src};
            chooserightcard=false;

            if($scope.eyetrainingcard1.num==$scope.eyetrainingtargetcard.num){
                $scope.getrightcard=true;
                console.log($scope.getrightcard);
            }else{
                $scope.getwrongcard=true;
            }
        }
    }

    $scope.choosecard2=function(){
        if(chooserightcard){
            movingcard2.style.border="5px solid red";
            $scope.eyetrainingcard1={num:cardArr[eyetraningcard1number].num,src:cardArr[eyetraningcard1number].src};
            $scope.eyetrainingcard2={num:cardArr[eyetraningcard2number].num,src:cardArr[eyetraningcard2number].src};
            $scope.eyetrainingcard3={num:cardArr[eyetraningcard3number].num,src:cardArr[eyetraningcard3number].src};
            chooserightcard=false;

            if($scope.eyetrainingcard2.num==$scope.eyetrainingtargetcard.num){
                $scope.getrightcard=true;
                console.log($scope.getrightcard);
            }else{
                $scope.getwrongcard=true;
            }
        }
    }

    $scope.choosecard3=function(){
        if(chooserightcard){
            movingcard3.style.border="5px solid red";
            $scope.eyetrainingcard1={num:cardArr[eyetraningcard1number].num,src:cardArr[eyetraningcard1number].src};
            $scope.eyetrainingcard2={num:cardArr[eyetraningcard2number].num,src:cardArr[eyetraningcard2number].src};
            $scope.eyetrainingcard3={num:cardArr[eyetraningcard3number].num,src:cardArr[eyetraningcard3number].src};
            chooserightcard=false;

            if($scope.eyetrainingcard3.num==$scope.eyetrainingtargetcard.num){
                $scope.getrightcard=true;
                console.log($scope.getrightcard);
            }else{
                $scope.getwrongcard=true;
            }
        }
    }

    $scope.eyetrainingreset=function(){
        eyetraningcard1show={};
        eyetraningcard2show={};
        eyetraningcard3show={};
        $scope.eyetrainingcard1=null;
        $scope.eyetrainingcard2=null;
        $scope.eyetrainingcard3=null;
        $scope.eyetrainingtargetcard=null;
        eyetrainingreday=false;
        intervalstart=false;
        chooserightcard=false;
        $scope.getrightcard=false;
        $scope.getwrongcard=false;
        movingcard1.style.border="5px solid white";
        movingcard2.style.border="5px solid white";
        movingcard3.style.border="5px solid white";
    };

    $scope.writeletter=function($event){
       var LetterDiv=document.getElementById('letter_body');
       if($event.which===8){
           var y=LetterDiv.getElementsByClassName("wordstyping");
           if(y.length>=1){
              LetterDiv.removeChild(y[y.length-1]);
           }
       }else{
           var newDiv=document.createElement('div');
           var newImg=document.createElement('img');
           newDiv.setAttribute("style","float:left;width:30px;height:30px");
           newDiv.setAttribute("class","wordstyping");
           switch($event.which){
              case 65:
                 newImg.setAttribute("src","assets/images/src/producer/words/A.gif");
                 break;
              case 66:
                 newImg.setAttribute("src","assets/images/src/producer/words/B.gif");
                 break;
              case 67:
                 newImg.setAttribute("src","assets/images/src/producer/words/C.gif");
                 break;
              case 68:
                 newImg.setAttribute("src","assets/images/src/producer/words/D.gif");
                 break;
              case 69:
                 newImg.setAttribute("src","assets/images/src/producer/words/E.gif");
                 break;
              case 70:
                 newImg.setAttribute("src","assets/images/src/producer/words/F.gif");
                 break;
              case 71:
                 newImg.setAttribute("src","assets/images/src/producer/words/G.gif");
                 break;
              case 72:
                 newImg.setAttribute("src","assets/images/src/producer/words/H.gif");
                 break;
              case 73:
                 newImg.setAttribute("src","assets/images/src/producer/words/I.gif");
                 break;
              case 74:
                 newImg.setAttribute("src","assets/images/src/producer/words/J.gif");
                 break;
              case 75:
                 newImg.setAttribute("src","assets/images/src/producer/words/K.gif");
                 break;
              case 76:
                 newImg.setAttribute("src","assets/images/src/producer/words/L.gif");
                 break;
              case 77:
                 newImg.setAttribute("src","assets/images/src/producer/words/M.gif");
                 break;
              case 78:
                 newImg.setAttribute("src","assets/images/src/producer/words/N.gif");
                 break;
              case 79:
                 newImg.setAttribute("src","assets/images/src/producer/words/O.gif");
                 break;
              case 80:
                 newImg.setAttribute("src","assets/images/src/producer/words/P.gif");
                 break;
              case 81:
                 newImg.setAttribute("src","assets/images/src/producer/words/Q.gif");
                 break;
              case 82:
                 newImg.setAttribute("src","assets/images/src/producer/words/R.gif");
                 break;
              case 83:
                 newImg.setAttribute("src","assets/images/src/producer/words/S.gif");
                 break;
              case 84:
                 newImg.setAttribute("src","assets/images/src/producer/words/T.gif");
                 break;
              case 85:
                 newImg.setAttribute("src","assets/images/src/producer/words/U.gif");
                 break;
              case 86:
                 newImg.setAttribute("src","assets/images/src/producer/words/V.gif");
                 break;
              case 87:
                 newImg.setAttribute("src","assets/images/src/producer/words/W.gif");
                 break;
              case 88:
                 newImg.setAttribute("src","assets/images/src/producer/words/X.gif");
                 break;
              case 89:
                 newImg.setAttribute("src","assets/images/src/producer/words/Y.gif");
                 break;
              case 90:
                 newImg.setAttribute("src","assets/images/src/producer/words/Z.gif");
                 break;
              default:
                 break;
           }
           newDiv.appendChild(newImg);
           LetterDiv.appendChild(newDiv);
       }
    }
})