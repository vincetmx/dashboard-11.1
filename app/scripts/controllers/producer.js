'use strict';
// PRODUCER CONTROLLER
// Description: Define the following functionalities:
// Creative manipulations for whatever stuff this section wants to do
app.controller('producerCtrl',function($scope,$timeout,$interval){
    //switch among all the apps
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

    $scope.bombgameswitch1=true;
    $scope.bombgameswitch2=false;

    $scope.doraemongameswitch1=true;
    $scope.doraemongameswitch2=false;

    $scope.doraemonbombgameswitch1=true;
    $scope.doraemonbombgameswitch2=false;

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
        //reset roulette condition
        round=0;
        document.getElementById('roulette').style.transition="ease-out 0s";
        document.getElementById('roulette').style.transform="rotate("+round+"deg)";
        $scope.decision="";
    }

    $scope.switcheyetraining=function(value){
        $scope.eyetrainingswitch1=value;
        $scope.eyetrainingswitch2=!value;
    }
    //switch for bubble,if enter typing app,bubble will be on
    var bubblefly=false;

    $scope.switchtyping=function(value){
        $scope.typingswitch1=value;
        $scope.typingswitch2=!value;
        if($scope.typingswitch2){
           bubblefly=true;
        }else{
           bubblefly=false;
        }
    }
    
    var BombPlateNotCreated=true;

    $scope.switchbombgame=function(value){
        $scope.bombgameswitch1=value;
        $scope.bombgameswitch2=!value;
        if($scope.bombgameswitch2&&BombPlateNotCreated){
           createGrids();
           initializebomb();
           BombPlateNotCreated=false;
        }
    }

    $scope.switchdoraemongame=function(value){
        $scope.doraemongameswitch1=value;
        $scope.doraemongameswitch2=!value;
        $scope.getcabbage=false;
        $scope.getsugar=false;
        $scope.showdialogwindow=false;
        $scope.showdialogwindow2=false;
        doraemon.style.left="600px";
        doraemon.style.top="270px";
        cabbage.style.left="790px";
        cabbage.style.top="280px";
        sugar.style.left="650px";
        sugar.style.top="280px";
        bluebutterfly.style.left="1200px";
        bluebutterfly.style.top="230px";
        greenbutterfly.style.left="50px";
        greenbutterfly.style.top="350px";
        daytimeOn=true;
        afternoonOn=false;
        nightOn=false;
        $scope.afternoonOn=false;
        $scope.nightOn=false;
    }

    $scope.switchdoraemonbombgame=function(value){
        $scope.doraemonbombgameswitch1=value;
        $scope.doraemonbombgameswitch2=!value;
        console.log($scope.doraemonbombgameswitch2);
        doraemonbomb.style.left="600px";
        doraemonbomb.style.top="270px";
        nobitabomb.style.left="200px";
        nobitabomb.style.top="350px";
        box1.style.left="500px";
        box1.style.top="100px";
        bat1.style.left="700px";
        bat1.style.top="500px";
        bat2.style.left="1000px";
        bat2.style.top="700px";
        bat3.style.left="200px";
        bat3.style.top="200px";
    }


    //powerball app
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

    //function to filter out the opposite 
	$scope.not=function(actual,expected){
        if(actual!=expected){
        	return true;
        }
        return false;
	};
    
    //if we random out two same numbers in our balls, try again.
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
    
    //if we use selection to pick specific number, we will not random that number box again.
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
    
    //random pick all the ball numbers
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
    

    //blackjack app
    //generate an array to store 52 cards(except two jokers)
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
    
    //initiate the game,enemycardshow is ai's cards object,mycardshow is player's cards object.
    /*game process is going by reference getcardsclick. enemyhasAce and myhasAce is to detect
    whether there is an A in cards because A could be counted as 11 in some situations.
    */
    //enemyAI is that let ai decide if he will continue to get card.
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
    
    //calculate both ai and player's sum of cards
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
    
    //different card numbers cases
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
    
    //show the final result
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
    
    //reset game
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
    
    //roulette app
    //round is the degree that will rotate.
    var round=0;

    $scope.playroulette=function(){
        /*timer is that to record the timeout function start point, 
        and previous timesout function will be cancelled if click again.*/
        var timer=0;
        return function(){
               $timeout.cancel(timer);
               round+=1080+Math.ceil(Math.random()*360);
               document.getElementById('roulette').style.transition="ease-out 5s";
               document.getElementById('roulette').style.transform="rotate("+round+"deg)";
                
                //judge the degree and final section roulette pointer shows
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

    //evetraining app
    //like blackjack,initiate the game references
    var eyetraningcard1show={};
    var eyetraningcard2show={};
    var eyetraningcard3show={};

    var eyetraningcard1number=0;
    var eyetraningcard2number=0;
    var eyetraningcard3number=0;

    var movingcard1=document.getElementById('movingcard1');
    var movingcard2=document.getElementById('movingcard2');
    var movingcard3=document.getElementById('movingcard3');
    
    //randomly pick three cards and set one of them as our target card.
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
    
    //only we press ready button can we start move cards.
    var eyetrainingreday=false; 
    //only after cards moving ends can we pick the card we think it is target card.
    var chooserightcard=false;
    
    //turn cards back
    $scope.eyetraining_ready=function(){
        $scope.eyetrainingcard1.src="assets/images/src/producer/cards/55.jpg";
        $scope.eyetrainingcard2.src="assets/images/src/producer/cards/55.jpg";
        $scope.eyetrainingcard3.src="assets/images/src/producer/cards/55.jpg";
        eyetrainingreday=true;
    }

    var intervalstart=false; 

    //when click move button, interval function begin work, and delay close using time out function.
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
    
    /*there are three moving card patterns in all,which are swap 1 and 2,
    1 and 3, 2 and 3*/
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
    
    //change cards position function
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
    //use an update array to restore each round's swap result.
    var updateArr=[];
    
    //get updated array using tricky method
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
    
    //after moving cards, the different result we pick one of three cards.
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
    
    //reset game
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
    
    //typing app
    $scope.writeletter=function($event){
       var LetterDiv=document.getElementById('letter_body');
       //if backspace is pressed, remove the last element
       if($event.which===8){
           var y=LetterDiv.getElementsByClassName("wordstyping");
           if(y.length>=1){
              LetterDiv.removeChild(y[y.length-1]);
           }
       }else{
           //otherwise,create a new element node and parse values to it.
           var newDiv=document.createElement('div');
           var newImg=document.createElement('img');
           newDiv.setAttribute("style","float:left;width:30px;height:30px");
           newDiv.setAttribute("class","wordstyping");
           //different alphabets gif according to key input, event.which is ACSII code.
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
    
    /*generate a nice bubble every second, and when onmouseover the bubble,bubble element
    will be removed and create new elements such as feathers,hearts and stars*/
    $interval(function(){
       if(bubblefly){
           var bubblerandomleft=Math.ceil(Math.random()*1200);
           var BubbleDiv=document.getElementById('bubble_layer');
           var newDiv2=document.createElement('div');
           var newImg2=document.createElement('img');
           newDiv2.setAttribute("style","position:absolute;left:"+bubblerandomleft+"px;top:850px;width:60px;height:60px");
           newDiv2.setAttribute("class","bubbleflying");
           newImg2.setAttribute("src","assets/images/src/producer/bubbles/bubble.png");
           newDiv2.appendChild(newImg2);
           BubbleDiv.appendChild(newDiv2);
           newDiv2.style.transition="ease-in 5s";

           $timeout(function(){newDiv2.style.top="0px";},200);
           var bubbleburst=false;

           newDiv2.onmouseover=function(event){
              var currentX=event.clientX-250;
              var currentY=event.clientY;
              BubbleDiv.removeChild(newDiv2);
              bubbleburst=true;

              var newBubblefeather1=document.createElement('div');
              var newBubblefeather1img=document.createElement('img');
              newBubblefeather1.setAttribute("style","position:absolute;left:"+currentX+"px;top:"+(currentY-130)+"px;width:90px;height:108px");
              newBubblefeather1.setAttribute("class","bubblefeather1");
              newBubblefeather1img.setAttribute("src","assets/images/src/producer/bubbles/bubble_feather1.png");
              newBubblefeather1.appendChild(newBubblefeather1img);
              BubbleDiv.appendChild(newBubblefeather1);

              var newBubblefeather2=document.createElement('div');
              var newBubblefeather2img=document.createElement('img');
              newBubblefeather2.setAttribute("style","position:absolute;left:"+(currentX-100)+"px;top:"+(currentY-80)+"px;width:93px;height:81px");
              newBubblefeather2.setAttribute("class","bubblefeather2");
              newBubblefeather2img.setAttribute("src","assets/images/src/producer/bubbles/bubble_feather2.png");
              newBubblefeather2.appendChild(newBubblefeather2img);
              BubbleDiv.appendChild(newBubblefeather2);
              
              var newBubbleheart1=document.createElement('div');
              var newBubbleheart1img=document.createElement('img');
              newBubbleheart1.setAttribute("style","position:absolute;left:"+(currentX-10)+"px;top:"+(currentY-20)+"px;width:24px;height:24px");
              newBubbleheart1.setAttribute("class","bubbleheart1");
              newBubbleheart1img.setAttribute("src","assets/images/src/producer/bubbles/bubble_heart1.png");
              newBubbleheart1.appendChild(newBubbleheart1img);
              BubbleDiv.appendChild(newBubbleheart1);

              var newBubbleheart2=document.createElement('div');
              var newBubbleheart2img=document.createElement('img');
              newBubbleheart2.setAttribute("style","position:absolute;left:"+(currentX-50)+"px;top:"+(currentY+20)+"px;width:16px;height:16px");
              newBubbleheart2.setAttribute("class","bubbleheart2");
              newBubbleheart2img.setAttribute("src","assets/images/src/producer/bubbles/bubble_heart2.png");
              newBubbleheart2.appendChild(newBubbleheart2img);
              BubbleDiv.appendChild(newBubbleheart2);

              var newBubblestar1=document.createElement('div');
              var newBubblestar1img=document.createElement('img');
              newBubblestar1.setAttribute("style","position:absolute;left:"+(currentX+10)+"px;top:"+(currentY+40)+"px;width:24px;height:24px");
              newBubblestar1.setAttribute("class","bubblestar1");
              newBubblestar1img.setAttribute("src","assets/images/src/producer/bubbles/bubble_star1.png");
              newBubblestar1.appendChild(newBubblestar1img);
              BubbleDiv.appendChild(newBubblestar1);

              var newBubblestar2=document.createElement('div');
              var newBubblestar2img=document.createElement('img');
              newBubblestar2.setAttribute("style","position:absolute;left:"+(currentX-30)+"px;top:"+(currentY-10)+"px;width:34px;height:34px");
              newBubblestar2.setAttribute("class","bubblestar1");
              newBubblestar2img.setAttribute("src","assets/images/src/producer/bubbles/bubble_star2.png");
              newBubblestar2.appendChild(newBubblestar2img);
              BubbleDiv.appendChild(newBubblestar2);

              var newBubblestar3=document.createElement('div');
              var newBubblestar3img=document.createElement('img');
              newBubblestar3.setAttribute("style","position:absolute;left:"+(currentX-10)+"px;top:"+(currentY)+"px;width:16px;height:16px");
              newBubblestar3.setAttribute("class","bubblestar1");
              newBubblestar3img.setAttribute("src","assets/images/src/producer/bubbles/bubble_star3.png");
              newBubblestar3.appendChild(newBubblestar3img);
              BubbleDiv.appendChild(newBubblestar3);
              
              var falltime=0;
              
              //if onmouseover bubble in the lower part of screen, make it fall faster
              if(currentY<500){
                  falltime=7100;
                  newBubblefeather1.style.transition="ease-in 7s";
                  newBubblefeather2.style.transition="ease-in 6s";
                  newBubbleheart1.style.transition="ease-in 7s";
                  newBubbleheart2.style.transition="ease-in 6s";
                  newBubblestar1.style.transition="ease-in 7s";
                  newBubblestar2.style.transition="ease-in 6.5s";
                  newBubblestar3.style.transition="ease-in 6.5s";
              }else{
                  falltime=3100;
                  newBubblefeather1.style.transition="ease-in 3s";
                  newBubblefeather2.style.transition="ease-in 2s";
                  newBubbleheart1.style.transition="ease-in 3s";
                  newBubbleheart2.style.transition="ease-in 2s";
                  newBubblestar1.style.transition="ease-in 3s";
                  newBubblestar2.style.transition="ease-in 2.5s";
                  newBubblestar3.style.transition="ease-in 2.5s";
              }

              $timeout(function(){
                newBubblefeather1.style.top="800px";
                newBubblefeather2.style.top="800px";
                newBubbleheart1.style.top="830px";
                newBubbleheart2.style.top="840px";
                newBubblestar1.style.top="820px";
                newBubblestar2.style.top="820px";
                newBubblestar3.style.top="820px";
              },200);
              console.log(newBubblefeather1);

              $timeout(function(){
                BubbleDiv.removeChild(newBubblefeather1);
                BubbleDiv.removeChild(newBubblefeather2);
                BubbleDiv.removeChild(newBubbleheart1);
                BubbleDiv.removeChild(newBubbleheart2);
                BubbleDiv.removeChild(newBubblestar1);
                BubbleDiv.removeChild(newBubblestar2);
                BubbleDiv.removeChild(newBubblestar3);
              },falltime);
           }
           
           $timeout(function(){
              if(!bubbleburst){
                 BubbleDiv.removeChild(newDiv2);
              }
           },5200);
       }
    },1000);

    //bombgame app
    var BombPlate=document.getElementById('bombplate');
    var updateBombArr=[];
    var bombs=document.getElementsByClassName('bomb');
    
    //create grids of bombs
    function createGrids(){
        for(var v=0;v<100;v++){
            (function(v){
                var newBombDiv=document.createElement('div');
                var newBombChildDiv=document.createElement('div');
                newBombDiv.setAttribute("style","float:left;width:80px;height:80px;border:2px solid white;");
                newBombDiv.setAttribute("class","bomb");
                newBombChildDiv.setAttribute("id","bomb"+v);
                newBombChildDiv.setAttribute("style","width:76px;height:76px;border-radius:76px;color:white;font-size:30px;text-align:center;padding-top:18px;");
                newBombChildDiv.setAttribute("kind","");
                newBombChildDiv.setAttribute("timer","off");
                newBombChildDiv.setAttribute("class","nobomb");
                newBombDiv.appendChild(newBombChildDiv);
                BombPlate.appendChild(newBombDiv);
                updateBombArr.push(newBombChildDiv);
            }(v));
        }
    }

    /*set each bomb grid its property,when click on that bomb,the bomb will be divided to two bombs
    or one bomb and one apple*/
    function initializebomb(){
        for(var d=0;d<100;d++){
           bombs[d].onclick=function(){
              if(this.firstChild.getAttribute('class')==='bombactive'){
                var generateAppleProbability=Math.ceil(Math.random()*10);
                var devidedbomb1Num=Math.ceil(Math.random()*(updateBombArr.length));
                var devidedbomb1=updateBombArr[devidedbomb1Num];
                devidedbomb1.setAttribute("kind","bomb");
                devidedbomb1.setAttribute("timer","on");
                devidedbomb1.setAttribute("class","bombactive");
                devidedbomb1.setAttribute("style","width:76px;height:76px;border-radius:76px;color:white;font-size:30px;text-align:center;padding-top:18px;background:url(assets/images/src/producer/bomb.png);");
                var randomtime1=8+Math.ceil(Math.random()*10);
                bombtimer(randomtime1,devidedbomb1);

                do{ 
                   var devidedbomb2Num=Math.ceil(Math.random()*(updateBombArr.length))
                }while(devidedbomb2Num==devidedbomb1Num);
                var devidedbomb2=updateBombArr[devidedbomb2Num];
                if(generateAppleProbability>3){
                   devidedbomb2.setAttribute("kind","apple");
                   devidedbomb2.setAttribute("style","width:76px;height:76px;border-radius:76px;color:white;font-size:30px;text-align:center;padding-top:18px;background:url(assets/images/src/producer/apple.png);");
                }else{
                   devidedbomb2.setAttribute("kind","bomb");
                   devidedbomb2.setAttribute("style","width:76px;height:76px;border-radius:76px;color:white;font-size:30px;text-align:center;padding-top:18px;background:url(assets/images/src/producer/bomb.png);");
                }
                devidedbomb2.setAttribute("timer","on");
                devidedbomb2.setAttribute("class","bombactive");
                var randomtime2=8+Math.ceil(Math.random()*10);
                bombtimer(randomtime2,devidedbomb2);
                
                updatebomb();
                console.log(updateBombArr);
                this.firstChild.setAttribute("class","nobomb");
                this.firstChild.innerText="";
                this.firstChild.setAttribute("style","color:green;");
                var id=this.firstChild.getAttribute('id').substring(4);
              }
           }
        }
    }
    
    //click to start the game, randomly pick a grid of bomb.
    $scope.bombgamestart=function(){
       $scope.bombgameover=false;
       var randomtime=8+Math.ceil(Math.random()*10);
       var startbombNum=Math.ceil(Math.random()*100)-1;
       var startbomb=document.getElementById('bomb'+startbombNum);
       startbomb.setAttribute("kind","bomb");
       startbomb.setAttribute("timer","on");
       startbomb.setAttribute("class","bombactive");
       startbomb.setAttribute("style","width:76px;height:76px;border-radius:76px;color:white;font-size:30px;text-align:center;padding-top:18px;background:url(assets/images/src/producer/bomb.png);");
       bombtimer(randomtime,startbomb);
    }

    var bombcountTimer=0;
    
    //each bomb will be given a timer
    function bombtimer(time,bomb){
       bomb.innerText=time+"";
       for(var t=0;t<=time;t++){
         (function(t){
           bombcountTimer=$timeout(function(){
             if(time-t===0){
                bomb.innerText="";
                bomb.setAttribute("style","color:green;");
                if(bomb.getAttribute("class")==="bombactive"&&bomb.getAttribute("kind")==="bomb"){
                    bombgameover();
                    $timeout.cancel(bombtimer);
                    $scope.bombgameover=true;
                }
             }else{
                bomb.innerText=time-t+"";
             }
          },t*1000);
         }(t));
       }
    }
    
    //before each click, to check how many grids are in the condition of no bombs
    function updatebomb(){
        updateBombArr=[];
        for(var c=0;c<100;c++){
            if(bombs[c].firstChild.getAttribute("timer")==="off"){
                updateBombArr.push(bombs[c].firstChild);
            }
        }
        return updateBombArr;
    }
    
    //bomb game over
    function bombgameover(){
        for(var e=0;e<100;e++){
            bombs[e].firstChild.setAttribute("kind","");
            bombs[e].firstChild.setAttribute("class","nobomb");
            bombs[e].firstChild.setAttribute("style","color:green");
            bombs[e].firstChild.innerText="";
        }
    }

    //doraemon game app
    var doraemon=document.getElementById('doraemon');
    var nobita=document.getElementById('nobita');
    var cabbage=document.getElementById('cabbage');
    var sugar=document.getElementById('sugar');
    var bluebutterfly=document.getElementById('bluebutterfly');
    var greenbutterfly=document.getElementById('greenbuterfly');
    var eagle=document.getElementById('eagle');

    $scope.switchtime=false;
    $scope.afternoon=false;
    $scope.night=false;
    $scope.showbutterfly=true;
    $scope.showeagle=false;

    var daytimeOn=true;
    var afternoonOn=false;
    var nightOn=false;

    $scope.switchgametime=function(){
        $scope.switchtime=true;
        if(daytimeOn){
            $timeout(function(){
                $scope.switchtime=false;
                $scope.afternoon=true;
                daytimeOn=false;
                afternoonOn=true;
                nightOn=false;
            },1500);
        }
        if(afternoonOn){
            $timeout(function(){
                $scope.switchtime=false;
                $scope.afternoon=false;
                $scope.showbutterfly=false;
                $scope.night=true;
                daytimeOn=false;
                afternoonOn=false;
                nightOn=true;
            },1500);
        }
        if(nightOn){
            $timeout(function(){
                $scope.switchtime=false;
                $scope.night=false;
                $scope.showbutterfly=true;
                daytimeOn=true;
                afternoonOn=false;
                nightOn=false;
            },1500);
        }
    }

    $scope.doraemongamestart=function(){
        doraemon.style.left="600px";
        doraemon.style.top="270px";
        cabbage.style.left="790px";
        cabbage.style.top="280px";
        sugar.style.left="650px";
        sugar.style.top="280px";
        nobita.style.left="200px";
        nobita.style.top="350px";
        bluebutterfly.style.left="1200px";
        bluebutterfly.style.top="230px";
        greenbutterfly.style.left="50px";
        greenbutterfly.style.top="350px";
        eagle.style.left="0px";
        eagle.style.top="0px";
        cabbage.style.transition="ease-out 1s";
        nobitamoving();
        bluebutterflymoving();
        greenbutterflymoving();
    }

    var downMovingtimer=0;
    var upMovingtimer=0;
    var leftMovingtimer=0;
    var rightMovingtimer=0;

    var downMovingStep=false;
    var upMovingStep=false;
    var leftMovingStep=false;
    var rightMovingStep=false;
    var doraemon_direction="";

    var buycabbageOn=false;
    var carryItem=false;
    var carryCabbage=false;
    var carrySugar=false;
    var handEmpty=true;
    
    $scope.charactermoving=function(direction){
        switch(direction){
            case "up":
                 upMoving(doraemon);
                 break;
            case "down":
                 downMoving(doraemon);
                 break;
            case "left":
                 leftMoving(doraemon);
                 break;
            case "right":
                 rightMoving(doraemon);
                 break;
            default:
                 break;
        }
    }

    function bluebutterflymoving(){
        var randomX=50+Math.ceil(Math.random()*900);
        var randomY=50+Math.ceil(Math.random()*600);
        var tmpX=bluebutterfly.style.left;
        var tmpY=bluebutterfly.style.top;
        var currentX=parseInt(tmpX.substring(0,tmpX.length-2));
        var currentY=parseInt(tmpY.substring(0,tmpY.length-2));

        if(Math.abs(currentX-randomX)>600||Math.abs(currentY-randomY)>600){
            var randomTime=10+Math.ceil(Math.random()*5);
        }else if(Math.abs(currentX-randomX)<300&&Math.abs(currentY-randomY)<300){
            var randomTime=3+Math.ceil(Math.random()*4);
        }else{
            var randomTime=5+Math.ceil(Math.random()*5);
        }
        
        bluebutterfly.style.transition="ease "+randomTime+"s";
        bluebutterfly.style.left=randomX+"px";
        bluebutterfly.style.top=randomY+"px";
        $timeout(bluebutterflymoving,randomTime*1000+100);
    }

    function greenbutterflymoving(){
        var randomX=50+Math.ceil(Math.random()*900);
        var randomY=50+Math.ceil(Math.random()*600);
        var tmpX=greenbutterfly.style.left;
        var tmpY=greenbutterfly.style.top;
        var currentX=parseInt(tmpX.substring(0,tmpX.length-2));
        var currentY=parseInt(tmpY.substring(0,tmpY.length-2));

        if(Math.abs(currentX-randomX)>600||Math.abs(currentY-randomY)>600){
            var randomTime=10+Math.ceil(Math.random()*5);
        }else if(Math.abs(currentX-randomX)<300&&Math.abs(currentY-randomY)<300){
            var randomTime=3+Math.ceil(Math.random()*4);
        }else{
            var randomTime=5+Math.ceil(Math.random()*5);
        }
        
        greenbutterfly.style.transition="ease "+randomTime+"s";
        greenbutterfly.style.left=randomX+"px";
        greenbutterfly.style.top=randomY+"px";
        $timeout(greenbutterflymoving,randomTime*1000+100);
    }
    
    function nobitamoving(){
       var directionRandom=Math.ceil(Math.random()*4);
       switch(directionRandom){
          case 1:
            upMoving(nobita);
            break;
          case 2:
            downMoving(nobita);
            break;
          case 3:
            leftMoving(nobita);
             break;
          case 4:
            rightMoving(nobita);
            break;
          default:
            break;
       }
       $timeout(nobitamoving,1100);
    }

    function downMoving(charactor){
        $timeout.cancel(downMovingtimer);
        if(charactor===doraemon){
            doraemon_direction="down"; 
        }
        downMovingStep=!downMovingStep;
        var tmp=charactor.style.top;
        var currentY=parseInt(tmp.substring(0,tmp.length-2));

        if(currentY<=655){
           if(downMovingStep){
              if(charactor===doraemon){
                   charactor.style.background="url(assets/images/src/producer/doraemon/down2.png) no-repeat center";
              }else if(charactor===nobita){
                   charactor.style.background="url(assets/images/src/producer/doraemon/nobita_down2.png) no-repeat center";
              }
            }else{
                if(charactor===doraemon){
                    charactor.style.background="url(assets/images/src/producer/doraemon/down3.png) no-repeat center";  
                }else if(charactor===nobita){
                    charactor.style.background="url(assets/images/src/producer/doraemon/nobita_down3.png) no-repeat center";
                }
            }
            charactor.style.transition="ease-in 0.3s";
            charactor.style.top=currentY+15+"px";
            if(carryItem&&charactor===doraemon){
                if(carryCabbage){
                    itemMoving(cabbage,doraemon_direction);
                }
                if(carrySugar){
                    itemMoving(sugar,doraemon_direction);
                }
            }


            downMovingtimer=$timeout(function(){
                charactor.style.transition="ease-out 0.3s";
                tmp=charactor.style.top;
                currentY=parseInt(tmp.substring(0,tmp.length-2));
                if(charactor===doraemon){
                    charactor.style.background="url(assets/images/src/producer/doraemon/down1.png) no-repeat center";   
                }else if(charactor===nobita){
                    charactor.style.background="url(assets/images/src/producer/doraemon/nobita_down1.png) no-repeat center";                    
                }
                charactor.style.top=currentY+15+"px";
                if(carryItem&&charactor===doraemon){
                    if(carryCabbage){
                        itemMoving(cabbage,doraemon_direction);
                    }
                    if(carrySugar){
                        itemMoving(sugar,doraemon_direction);
                    }
                }
                judgeZindex(charactor);
                // console.log("top: "+charactor.style.top);
            },350);
        }
    }

    function upMoving(charactor){
        $timeout.cancel(upMovingtimer);
        if(charactor===doraemon){
            doraemon_direction="up";
        }
        upMovingStep=!upMovingStep;
        var tmp=charactor.style.top;
        var currentY=parseInt(tmp.substring(0,tmp.length-2));

        if(upMovingStep){
            if(charactor===doraemon){
                charactor.style.background="url(assets/images/src/producer/doraemon/up2.png) no-repeat center";
            }else if(charactor===nobita){
                charactor.style.background="url(assets/images/src/producer/doraemon/nobita_up2.png) no-repeat center";
            }
        }else{
            if(charactor===doraemon){
                charactor.style.background="url(assets/images/src/producer/doraemon/up3.png) no-repeat center";
            }else if(charactor===nobita){
                charactor.style.background="url(assets/images/src/producer/doraemon/nobita_up3.png) no-repeat center";
            }
        }
        charactor.style.transition="ease-in 0.3s";
        if(currentY>=300){
            charactor.style.top=currentY-15+"px";

            if(carryItem&&charactor===doraemon){
                if(carryCabbage){
                    itemMoving(cabbage,doraemon_direction);
                }
                if(carrySugar){
                    itemMoving(sugar,doraemon_direction);
                }
            }
        }

        upMovingtimer=$timeout(function(){
            charactor.style.transition="ease-out 0.3s";
            tmp=charactor.style.top;
            currentY=parseInt(tmp.substring(0,tmp.length-2));
            if(charactor===doraemon){
                charactor.style.background="url(assets/images/src/producer/doraemon/up1.png) no-repeat center";
            }else if(charactor===nobita){
                charactor.style.background="url(assets/images/src/producer/doraemon/nobita_up1.png) no-repeat center";
            }
            if(currentY>=320){
                charactor.style.top=currentY-15+"px";
                if(carryItem&&charactor===doraemon){
                    if(carryCabbage){
                        itemMoving(cabbage,doraemon_direction);
                    }
                    if(carrySugar){
                        itemMoving(sugar,doraemon_direction);
                    }
                }
                judgeZindex(charactor);
            }
            // console.log("top: "+charactor.style.top);
        },300);
    }

    function leftMoving(charactor){
        $timeout.cancel(leftMovingtimer);
        if(charactor===doraemon){
            doraemon_direction="left";     
        }
        leftMovingStep=!leftMovingStep;
        var tmp=charactor.style.left;
        var currentX=parseInt(tmp.substring(0,tmp.length-2));

        if(currentX>=30){
            if(leftMovingStep){
                if(charactor===doraemon){
                    charactor.style.background="url(assets/images/src/producer/doraemon/left2.png) no-repeat center";       
                }else if(charactor===nobita){
                    charactor.style.background="url(assets/images/src/producer/doraemon/nobita_left2.png) no-repeat center";         
                }
            }else{
                if(charactor===doraemon){
                    charactor.style.background="url(assets/images/src/producer/doraemon/left3.png) no-repeat center";
                }else if(charactor===nobita){
                    charactor.style.background="url(assets/images/src/producer/doraemon/nobita_left3.png) no-repeat center";
                }
            }
            charactor.style.transition="ease-in 0.3s";
            charactor.style.left=currentX-15+"px";

            if(carryItem&&charactor===doraemon){
                    if(carryCabbage){
                        itemMoving(cabbage,doraemon_direction);
                    }
                    if(carrySugar){
                        itemMoving(sugar,doraemon_direction);
                    }
            }

            leftMovingtimer=$timeout(function(){
                charactor.style.transition="ease-out 0.3s";
                tmp=charactor.style.left;
                currentX=parseInt(tmp.substring(0,tmp.length-2));
                if(charactor===doraemon){
                    charactor.style.background="url(assets/images/src/producer/doraemon/left1.png) no-repeat center";
                }else if(charactor===nobita){
                    charactor.style.background="url(assets/images/src/producer/doraemon/nobita_left1.png) no-repeat center";
                }
                charactor.style.left=currentX-15+"px";

                if(carryItem&&charactor===doraemon){
                    if(carryCabbage){
                        itemMoving(cabbage,doraemon_direction);
                    }
                    if(carrySugar){
                        itemMoving(sugar,doraemon_direction);
                    }
                }
                // console.log("left: "+charactor.style.left);
            },350);
        }
    }

    function rightMoving(charactor){
        $timeout.cancel(rightMovingtimer);
        if(charactor===doraemon){
            doraemon_direction="right";
        }
        rightMovingStep=!rightMovingStep;
        var tmp=charactor.style.left;
        var currentX=parseInt(tmp.substring(0,tmp.length-2));

        if(currentX<=1270){
            if(rightMovingStep){
                if(charactor===doraemon){
                    charactor.style.background="url(assets/images/src/producer/doraemon/right2.png) no-repeat center";
                }else if(charactor===nobita){
                    charactor.style.background="url(assets/images/src/producer/doraemon/nobita_right2.png) no-repeat center";
                }
            }else{
                if(charactor===doraemon){
                   charactor.style.background="url(assets/images/src/producer/doraemon/right3.png) no-repeat center";
                }else if(charactor===nobita){
                   charactor.style.background="url(assets/images/src/producer/doraemon/nobita_right3.png) no-repeat center";
                }
            }
            charactor.style.transition="ease-in 0.3s";
            charactor.style.left=currentX+15+"px";
            if(carryItem&&charactor===doraemon){
                if(carryCabbage){
                    itemMoving(cabbage,doraemon_direction);
                }
                if(carrySugar){
                    itemMoving(sugar,doraemon_direction);
                }
            }

            rightMovingtimer=$timeout(function(){
                charactor.style.transition="ease-out 0.3s";
                tmp=charactor.style.left;
                currentX=parseInt(tmp.substring(0,tmp.length-2));
                if(charactor===doraemon){
                    charactor.style.background="url(assets/images/src/producer/doraemon/right1.png) no-repeat center";
                }else if(charactor===nobita){
                    charactor.style.background="url(assets/images/src/producer/doraemon/nobita_right1.png) no-repeat center";
                }
                charactor.style.left=currentX+15+"px";
                if(carryItem&&charactor===doraemon){
                    if(carryCabbage){
                        itemMoving(cabbage,doraemon_direction);
                    }
                    if(carrySugar){
                        itemMoving(sugar,doraemon_direction);
                    }
                }
                // console.log("left: "+charactor.style.left);
            },350);
        }
    }
    
    $scope.buycabbage=function(){
        var tmp1=doraemon.style.left;
        var tmp2=doraemon.style.top;
        var currentX=parseInt(tmp1.substring(0,tmp1.length-2));
        var currentY=parseInt(tmp2.substring(0,tmp2.length-2));
        console.log(currentX);
        console.log(currentY);

        if(currentX>680&&currentX<790&&currentY<310){
            gamedialog();
        }
    }
    
    $scope.selectdialog=function(value){
        $scope.showdialogwindow=false;
        $scope.showdialogwindow2=false;
        buycabbageOn=value;
        if(buycabbageOn){
            $scope.getcabbage=true;
            $scope.getsugar=true;
            $timeout(function(){
               cabbage.style.left="830px";
               cabbage.style.top="330px";
            },300);
        }
    }
    
    $scope.Abutton=function(){
        if($scope.getcabbage||$scope.getsugar){
            var tmp1=doraemon.style.left;
            var tmp2=doraemon.style.top;
            var currentX1=parseInt(tmp1.substring(0,tmp1.length-2));
            var currentY1=parseInt(tmp2.substring(0,tmp2.length-2));

            var tmp3=cabbage.style.left;
            var tmp4=cabbage.style.top;
            var currentX2=parseInt(tmp3.substring(0,tmp3.length-2));
            var currentY2=parseInt(tmp4.substring(0,tmp4.length-2));
            
            var tmp5=sugar.style.left;
            var tmp6=sugar.style.top;
            var currentX3=parseInt(tmp5.substring(0,tmp5.length-2));
            var currentY3=parseInt(tmp6.substring(0,tmp6.length-2));

            if(currentX1>=(currentX2-70)&&currentX1<=(currentX2+70)&&currentY1>=(currentY2-70)&&currentY1<=(currentY2+70)){
                takeItem(cabbage,currentX1,currentY1);
                handEmpty=false;
            }
            if(currentX1>=(currentX3-70)&&currentX1<=(currentX3+70)&&currentY1>=(currentY3-70)&&currentY1<=(currentY3+70)&&handEmpty){
                takeItem(sugar,currentX1,currentY1);
            }
        }     
    }

    function takeItem(item,currentX,currentY){
        item.style.transition="ease-in 0.3s";
        if(item===cabbage){
            item.style.left=currentX+"px";
            item.style.top=currentY-15+"px";
            carryCabbage=true;
        }
        if(item===sugar){
            item.style.left=currentX-15+"px";
            item.style.top=currentY+30+"px";
            carrySugar=true;
        }
        carryItem=true;
    }

    function itemMoving(item,direction){
        item.style.transition="ease-in 0.3s";
        var tmpX=item.style.left;
        var tmpY=item.style.top;
        var currentX=parseInt(tmpX.substring(0,tmpY.length-2));       
        var currentY=parseInt(tmpY.substring(0,tmpY.length-2));

        switch(direction){
            case "up":
                item.style.top=currentY-15+"px";
                break;
            case "down":
                item.style.top=currentY+15+"px";
                break;
            case "left":
                item.style.left=currentX-15+"px";
                break;
            case "right":
                item.style.left=currentX+15+"px";
                break;
            default:
                break;
        }
    }
    
    var summonbird=true;

    $scope.Bbutton=function(){
        var tmp1=doraemon.style.left;
        var tmp2=doraemon.style.top;
        var currentX1=parseInt(tmp1.substring(0,tmp1.length-2));
        var currentY1=parseInt(tmp2.substring(0,tmp2.length-2));

        var tmp3=cabbage.style.left;
        var tmp4=cabbage.style.top;
        var currentX2=parseInt(tmp3.substring(0,tmp3.length-2));
        var currentY2=parseInt(tmp4.substring(0,tmp4.length-2));
        
        var tmp5=sugar.style.left;
        var tmp6=sugar.style.top;
        var currentX3=parseInt(tmp5.substring(0,tmp5.length-2));
        var currentY3=parseInt(tmp6.substring(0,tmp6.length-2));

        if(carryItem){            
            if(carryCabbage){
                putoffItem(cabbage,currentX1,currentY1);
            }
            if(carrySugar){
                putoffItem(sugar,currentX1,currentY1);
            }
            carryItem=false;
            carryCabbage=false;
            carrySugar=false;
            handEmpty=true;
        }else if(!carryItem&&summonbird){
            summonbird=false;
            $scope.showeagle=true;
            eagle.style.transition="ease-out 7s";
            $timeout(function(){
               eagle.style.left=tmp1;
               eagle.style.top=currentY1-30+"px";
            },200);

            $timeout(function(){
               eagle.style.transition="ease-in 5s";
            },7400)

            $timeout(function(){
                eagle.style.left="1250px";
                eagle.style.top="0px";
            },7600);

            $timeout(function(){
                $scope.showeagle=false;
                eagle.style.transition="0s";
                eagle.style.left="0px";
                summonbird=true;
            },12800);
        }
    }

    function putoffItem(item,currentX,currentY){
        if(doraemon_direction=="right"){
            item.style.left=currentX+30+"px";
            item.style.top=currentY+50+"px";             
        }else if(doraemon_direction=="left"){
            item.style.left=currentX-30+"px";
            item.style.top=currentY+50+"px"; 
        }else if(doraemon_direction=="down"){
            item.style.left=currentX-5+"px";
            item.style.top=currentY+60+"px";
        }else if(doraemon_direction=="up"){
            item.style.left=currentX-30+"px";
            item.style.top=currentY+50+"px";
        }
    }

    function gamedialog(){
        if($scope.getcabbage){
           $scope.showdialogwindow2=true;
        }else{
           $scope.showdialogwindow=true;
        }
    }

    function judgeZindex(charactor){
        var tmp1=charactor.style.top;
        var currentY1=parseInt(tmp1.substring(0,tmp1.length-2));

        var tmp2=cabbage.style.top;
        var currentY2=parseInt(tmp2.substring(0,tmp2.length-2));

        var currentY3=475;
        
        if(carryItem){
            if(currentY1>currentY3){
                charactor.style.zIndex=16;
                cabbage.style.zIndex=16;
                sugar.style.zIndex=16;
            }else{
                charactor.style.zIndex=10;
                cabbage.style.zIndex=10;
                sugar.style.zIndex=10;
            }
        }else{
            if(currentY1>currentY3){
                charactor.style.zIndex=16;
                cabbage.style.zIndex=10;
                sugar.style.zIndex=10;
            }else{
                if(currentY1+60>currentY2){
                    charactor.style.zIndex=12;
                    cabbage.style.zIndex=10;
                    sugar.style.zIndex=10;
                }else{
                    charactor.style.zIndex=10;
                    cabbage.style.zIndex=12;
                    sugar.style.zIndex=12;
                }
            }
        }
    }
    

    //doraemonbomb app
    var gameboard=document.getElementById('doraemongamebomb_board');
    var doraemonbomb=document.getElementById('doraemonbomb');
    var nobitabomb=document.getElementById('nobitabomb');
    var box1=document.getElementById('box1');
    var bat1=document.getElementById('bat1');
    var bat2=document.getElementById('bat2');
    var bat3=document.getElementById('bat3');
    
    //start the game
    $scope.doraemonbombgamestart=function(){
        doraemonbomb.style.left="600px";
        doraemonbomb.style.top="270px";
        doraemonbomb.style.width="63px";
        doraemonbomb.style.height="89px";
        doraemonbomb.style.background="url(assets/images/src/producer/doraemonbomb/down1.png)";
        nobitabomb.style.left="200px";
        nobitabomb.style.top="350px";
        box1.style.left="500px";
        box1.style.top="100px";
        bat1.style.left="700px";
        bat1.style.top="500px";
        bat2.style.left="1000px";
        bat2.style.top="700px";
        bat3.style.left="200px";
        bat3.style.top="200px";
        nobitamoving2();
        bat1moving();
        bat2moving();
        bat3moving();
        window.addEventListener('keydown',gamepadder,false);

        for(var i=0;i<bombHurtArr.length;i++){
            bombHurtArr[i].style.display="block";
        }
    }

    function gamepadder(event){
       switch(event.which){
          case 87:
             upMoving2(doraemonbomb);
             break;
          case 83:
             downMoving2(doraemonbomb);
             break;
          case 65:
             leftMoving2(doraemonbomb);
             break;
          case 68:
             rightMoving2(doraemonbomb);
             break;
          case 84:
             Abutton2();
             break;
          case 89:
             Bbutton2();
             break;
          default:
             break;
       }
    }    
    /*the timer is to cancel the walking effect if charactor does not 
    finish one step walking while click again*/
    var downMovingtimer2=0;
    var upMovingtimer2=0;
    var leftMovingtimer2=0;
    var rightMovingtimer2=0;
    
    //change left foot and right foot flag
    //doraemon_direction shows which direction he current faces
    var downMovingStep2=false;
    var upMovingStep2=false;
    var leftMovingStep2=false;
    var rightMovingStep2=false;
    var doraemon_direction2="";
    
    //If doraemon get items,these flags will be changed
    //If doraemon already took one item, he cannot take other items anymore
    var carryItem2=false;
    var handEmpty2=true;
        
    //nobita automatically moving, he will walking one step each 1100ms
    function nobitamoving2(){
       var directionRandom=Math.ceil(Math.random()*4);
       switch(directionRandom){
          case 1:
            upMoving2(nobitabomb);
            break;
          case 2:
            downMoving2(nobitabomb);
            break;
          case 3:
            leftMoving2(nobitabomb);
             break;
          case 4:
            rightMoving2(nobitabomb);
            break;
          default:
            break;
       }
       $timeout(nobitamoving2,900);
    }

    function bat1moving(){
       var directionRandom=Math.ceil(Math.random()*4);
       switch(directionRandom){
          case 1:
            upMoving2(bat1);
            break;
          case 2:
            downMoving2(bat1);
            break;
          case 3:
            leftMoving2(bat1);
             break;
          case 4:
            rightMoving2(bat1);
            break;
          default:
            break;
       }
       $timeout(bat1moving,900);
    }

    function bat2moving(){
       var directionRandom=Math.ceil(Math.random()*4);
       switch(directionRandom){
          case 1:
            upMoving2(bat2);
            break;
          case 2:
            downMoving2(bat2);
            break;
          case 3:
            leftMoving2(bat2);
             break;
          case 4:
            rightMoving2(bat2);
            break;
          default:
            break;
       }
       $timeout(bat2moving,900);
    }

    function bat3moving(){
       var directionRandom=Math.ceil(Math.random()*4);
       switch(directionRandom){
          case 1:
            upMoving2(bat3);
            break;
          case 2:
            downMoving2(bat3);
            break;
          case 3:
            leftMoving2(bat3);
             break;
          case 4:
            rightMoving2(bat3);
            break;
          default:
            break;
       }
       $timeout(bat3moving,900);
    }
    
    /*each direction's moving function,if doraemon calls it,doraemon_direction will be changed,
    left foot or right foot flag changes, then get the current position and let them plus or
    minus 15px to move,if doraemon calls,also need judge if he is carrying items. If so,items
    should also move together with him. As for up and down moving, after each step moving,
    charactor's z-index relationship need to be updated using judgeZindex function.(If one's
    top is larger than the other,its z-index should be also larger than other's)*/
    function downMoving2(charactor){
        $timeout.cancel(downMovingtimer);
        if(charactor===doraemon){
            doraemon_direction2="down"; 
        }
        downMovingStep2=!downMovingStep2;
        var tmp=charactor.style.top;
        var currentY=parseInt(tmp.substring(0,tmp.length-2));

        if(currentY<=795){
           if(downMovingStep2){
              if(charactor===doraemonbomb){
                   charactor.style.background="url(assets/images/src/producer/doraemonbomb/down2.png) no-repeat center";
              }else if(charactor===nobitabomb){
                   charactor.style.background="url(assets/images/src/producer/doraemonbomb/nobita_down2.png) no-repeat center";
              }else if(charactor===bat1||charactor===bat2||charactor===bat3){
                   charactor.style.background="url(assets/images/src/producer/doraemonbomb/bat_down2.png) no-repeat center";
              }
            }else{
                if(charactor===doraemonbomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/down3.png) no-repeat center";  
                }else if(charactor===nobitabomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/nobita_down3.png) no-repeat center";
                }else if(charactor===bat1||charactor===bat2||charactor===bat3){
                   charactor.style.background="url(assets/images/src/producer/doraemonbomb/bat_down3.png) no-repeat center";
                }
            }
            charactor.style.transition="ease-in 0.3s";
            charactor.style.top=currentY+15+"px";
            if(carryItem2&&charactor===doraemon){
                itemMoving2(tmpBomb,doraemon_direction2);
            }

            downMovingtimer2=$timeout(function(){
                charactor.style.transition="ease-out 0.3s";
                tmp=charactor.style.top;
                currentY=parseInt(tmp.substring(0,tmp.length-2));
                if(charactor===doraemonbomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/down1.png) no-repeat center";   
                }else if(charactor===nobita){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/nobita_down1.png) no-repeat center";                    
                }else if(charactor===bat1||charactor===bat2||charactor===bat3){
                   charactor.style.background="url(assets/images/src/producer/doraemonbomb/bat_down1.png) no-repeat center";
                }
                charactor.style.top=currentY+15+"px";
                if(carryItem&&charactor===doraemonbomb){
                    itemMoving2(tmpBomb,doraemon_direction2);
                }
                judgeZindex2(charactor);
                // console.log("top: "+charactor.style.top);
            },310);
        }
    }

    function upMoving2(charactor){
        $timeout.cancel(upMovingtimer);
        if(charactor===doraemonbomb){
            doraemon_direction2="up";
        }
        upMovingStep2=!upMovingStep2;
        var tmp=charactor.style.top;
        var currentY=parseInt(tmp.substring(0,tmp.length-2));

        if(upMovingStep2){
            if(charactor===doraemonbomb){
                charactor.style.background="url(assets/images/src/producer/doraemonbomb/up2.png) no-repeat center";
            }else if(charactor===nobitabomb){
                charactor.style.background="url(assets/images/src/producer/doraemonbomb/nobita_up2.png) no-repeat center";
            }else if(charactor===bat1||charactor===bat2||charactor===bat3){
                   charactor.style.background="url(assets/images/src/producer/doraemonbomb/bat_up2.png) no-repeat center";
            }
        }else{
            if(charactor===doraemonbomb){
                charactor.style.background="url(assets/images/src/producer/doraemonbomb/up3.png) no-repeat center";
            }else if(charactor===nobitabomb){
                charactor.style.background="url(assets/images/src/producer/doraemonbomb/nobita_up3.png) no-repeat center";
            }else if(charactor===bat1||charactor===bat2||charactor===bat3){
                charactor.style.background="url(assets/images/src/producer/doraemonbomb/bat_up3.png) no-repeat center";
            }
        }
        charactor.style.transition="ease-in 0.3s";
        if(currentY>=100){
            charactor.style.top=currentY-15+"px";

            if(carryItem2&&charactor===doraemonbomb){
                 itemMoving2(tmpBomb,doraemon_direction2);
            }
        }

        upMovingtimer2=$timeout(function(){
            charactor.style.transition="ease-out 0.3s";
            tmp=charactor.style.top;
            currentY=parseInt(tmp.substring(0,tmp.length-2));
            if(charactor===doraemonbomb){
                charactor.style.background="url(assets/images/src/producer/doraemonbomb/up1.png) no-repeat center";
            }else if(charactor===nobitabomb){
                charactor.style.background="url(assets/images/src/producer/doraemonbomb/nobita_up1.png) no-repeat center";
            }else if(charactor===bat1||charactor===bat2||charactor===bat3){
                charactor.style.background="url(assets/images/src/producer/doraemonbomb/bat_up1.png) no-repeat center";
            }
            if(currentY>=320){
                charactor.style.top=currentY-15+"px";
                if(carryItem2&&charactor===doraemonbomb){
                     itemMoving2(tmpBomb,doraemon_direction2);
                }
                judgeZindex2(charactor);
            }
            // console.log("top: "+charactor.style.top);
        },310);
    }

    function leftMoving2(charactor){
        $timeout.cancel(leftMovingtimer);
        if(charactor===doraemonbomb){
            doraemon_direction2="left";     
        }
        leftMovingStep2=!leftMovingStep2;
        var tmp=charactor.style.left;
        var currentX=parseInt(tmp.substring(0,tmp.length-2));

        if(currentX>=80){
            if(leftMovingStep2){
                if(charactor===doraemonbomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/left2.png) no-repeat center";       
                }else if(charactor===nobitabomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/nobita_left2.png) no-repeat center";         
                }else if(charactor===bat1||charactor===bat2||charactor===bat3){
                   charactor.style.background="url(assets/images/src/producer/doraemonbomb/bat_left2.png) no-repeat center";
                }
            }else{
                if(charactor===doraemonbomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/left3.png) no-repeat center";
                }else if(charactor===nobitabomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/nobita_left3.png) no-repeat center";
                }else if(charactor===bat1||charactor===bat2||charactor===bat3){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/bat_left3.png) no-repeat center";
                }
            }
            charactor.style.transition="ease-in 0.3s";
            charactor.style.left=currentX-15+"px";

            if(carryItem2&&charactor===doraemonbomb){
                itemMoving2(tmpBomb,doraemon_direction2);
            }

            leftMovingtimer2=$timeout(function(){
                charactor.style.transition="ease-out 0.3s";
                tmp=charactor.style.left;
                currentX=parseInt(tmp.substring(0,tmp.length-2));
                if(charactor===doraemonbomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/left1.png) no-repeat center";
                }else if(charactor===nobitabomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/nobita_left1.png) no-repeat center";
                }else if(charactor===bat1||charactor===bat2||charactor===bat3){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/bat_left1.png) no-repeat center";
                }
                charactor.style.left=currentX-15+"px";

                if(carryItem&&charactor===doraemonbomb){
                     itemMoving2(tmpBomb,doraemon_direction2);
                }
                // console.log("left: "+charactor.style.left);
            },310);
        }
    }

    function rightMoving2(charactor){
        $timeout.cancel(rightMovingtimer);
        if(charactor===doraemonbomb){
            doraemon_direction2="right";
        }
        rightMovingStep2=!rightMovingStep2;
        var tmp=charactor.style.left;
        var currentX=parseInt(tmp.substring(0,tmp.length-2));

        if(currentX<=1270){
            if(rightMovingStep){
                if(charactor===doraemonbomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/right2.png) no-repeat center";
                }else if(charactor===nobitabomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/nobita_right2.png) no-repeat center";
                }else if(charactor===bat1||charactor===bat2||charactor===bat3){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/bat_right2.png) no-repeat center";
                }
            }else{
                if(charactor===doraemonbomb){
                   charactor.style.background="url(assets/images/src/producer/doraemonbomb/right3.png) no-repeat center";
                }else if(charactor===nobitabomb){
                   charactor.style.background="url(assets/images/src/producer/doraemonbomb/nobita_right3.png) no-repeat center";
                }else if(charactor===bat1||charactor===bat2||charactor===bat3){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/bat_right3.png) no-repeat center";
                }
            }
            charactor.style.transition="ease-in 0.3s";
            charactor.style.left=currentX+15+"px";
            if(carryItem&&charactor===doraemonbomb){
                 itemMoving2(tmpBomb,doraemon_direction2);
            }

            rightMovingtimer=$timeout(function(){
                charactor.style.transition="ease-out 0.3s";
                tmp=charactor.style.left;
                currentX=parseInt(tmp.substring(0,tmp.length-2));
                if(charactor===doraemonbomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/right1.png) no-repeat center";
                }else if(charactor===nobitabomb){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/nobita_right1.png) no-repeat center";
                }else if(charactor===bat1||charactor===bat2||charactor===bat3){
                    charactor.style.background="url(assets/images/src/producer/doraemonbomb/bat_right1.png) no-repeat center";
                }
                charactor.style.left=currentX+15+"px";
                if(carryItem2&&charactor===doraemonbomb){
                     itemMoving2(tmpBomb,doraemon_direction2);
                }
                // console.log("left: "+charactor.style.left);
            },310);
        }
    }
        
    //A button function, let doraemon take items if items nearby
    function Abutton2(){
        var tmp1=doraemonbomb.style.left;
        var tmp2=doraemonbomb.style.top;
        var currentX1=parseInt(tmp1.substring(0,tmp1.length-2));
        var currentY1=parseInt(tmp2.substring(0,tmp2.length-2));

        var tmp3=tmpBomb.style.left;
        var tmp4=tmpBomb.style.top;
        var currentX2=parseInt(tmp3.substring(0,tmp3.length-2));
        var currentY2=parseInt(tmp4.substring(0,tmp4.length-2));
        
        if(currentX1>=(currentX2-70)&&currentX1<=(currentX2+70)&&currentY1>=(currentY2-70)&&currentY1<=(currentY2+70)){
            takeItem2(tmpBomb,currentX1,currentY1);
            handEmpty2=false;
        }
    }
    
    //decide which item will doraemon take
    function takeItem2(item,currentX,currentY){
        item.style.transition="ease-in 0.3s";
        item.style.left=currentX+"px";
        item.style.top=currentY-15+"px";
        carryItem2=true;
    }
    
    //if doraemon carries item, item will also be moving
    function itemMoving2(item,direction){
        item.style.transition="ease-in 0.3s";
        var tmpX=item.style.left;
        var tmpY=item.style.top;
        var currentX=parseInt(tmpX.substring(0,tmpY.length-2));       
        var currentY=parseInt(tmpY.substring(0,tmpY.length-2));

        switch(direction){
            case "up":
                item.style.top=currentY-15+"px";
                break;
            case "down":
                item.style.top=currentY+15+"px";
                break;
            case "left":
                item.style.left=currentX-15+"px";
                break;
            case "right":
                item.style.left=currentX+15+"px";
                break;
            default:
                break;
        }
    }
    
    var bombSet=false;
    var tmpBomb=document.createElement('div');
    tmpBomb.style.left="0px";
    tmpBomb.style.top="0px";
    var bombX=0;
    var bombY=0;

    //B button function
    function Bbutton2(){
        var tmp1=doraemonbomb.style.left;
        var tmp2=doraemonbomb.style.top;
        var currentX1=parseInt(tmp1.substring(0,tmp1.length-2));
        var currentY1=parseInt(tmp2.substring(0,tmp2.length-2));

        if(carryItem2){            
            putoffItem2(tmpBomb,currentX1,currentY1);
            carryItem2=false;
            handEmpty2=true;
        }
        //set a bomb if hand is empty
        else{
            if(!bombSet){
                bombSet=true;
                bombX=currentX1+40;
                console.log(bombX);
                bombY=currentY1+60;
                var bomb=document.createElement('div');
                bomb.setAttribute("style","position:absolute;left:"+bombX+"px;top:"+bombY+"px;width:45px;height:45px;z-index:2;background:url(assets/images/src/producer/doraemonbomb/bomb.png);");
                gameboard.appendChild(bomb);
                tmpBomb=bomb;
                bombtimer2(bomb,bombX,bombY);
            }
        }
    }
    
    var canceltimer2=0;

    function bombtimer2(bomb,bombX,bombY){
        $timeout.cancel(canceltimer2);
        canceltimer2=$timeout(function(){
            bombSet=false;
            bomb.setAttribute("style","position:absolute;left:"+bombX+"px;top:"+(bombY-30)+"px;width:90px;height:127px;background:url(assets/images/src/producer/doraemonbomb/fire.gif);");
            bombBlow(bombX,bombY);
            $timeout(function(){
               gameboard.removeChild(bomb);
            },1100);
        },3000);
    }
    
    //put off items
    function putoffItem2(bomb,currentX,currentY){
        bomb.style.transition="ease-in 0.5s";
        if(doraemon_direction2=="right"){
            bomb.style.left=currentX+130+"px";
            bomb.style.top=currentY+50+"px";
            tmpBomb=bomb;
            bombtimer2(bomb,currentX+130,currentY+50);
        }else if(doraemon_direction2=="left"){
            bomb.style.left=currentX-130+"px";
            bomb.style.top=currentY+50+"px";
            tmpBomb=bomb;
            bombtimer2(bomb,currentX-130,currentY+50);   
        }else if(doraemon_direction2=="down"){
            bomb.style.left=currentX+20+"px";
            bomb.style.top=currentY+130+"px";
            tmpBomb=bomb;
            bombtimer2(bomb,currentX+20,currentY+170); 
        }else if(doraemon_direction2=="up"){
            bomb.style.left=currentX+20+"px";
            bomb.style.top=currentY-90+"px";
            tmpBomb=bomb;
            bombtimer2(bomb,currentX+20,currentY-90); 
        }
    }
    
    //judge who will be hurt by bomb
    var bombHurtArr=[doraemonbomb,nobitabomb,bat1,bat2,bat3,box1];
    
    /*record the bomb position and compare it with all other people at that time
    and decide who will be hurt*/
    function bombBlow(bombX,bombY){
        for(var i=0,j=0;i<bombHurtArr.length;i++){
           var tmp1=bombHurtArr[i].style.left;
           var currentX=parseInt(tmp1.substring(0,tmp1.length-2)); 

           var tmp2=bombHurtArr[i].style.top;
           var currentY=parseInt(tmp2.substring(0,tmp1.length-2));
           console.log(bombHurtArr[i].style.left);

           if(Math.abs(bombX-currentX)<100&&Math.abs(bombY-currentY)<100){
               bombHurtArr[i].style.display="none";
               if(doraemonbomb.style.display=="none"){
                  doraemonbomb.style.display="block";
                  doraemonbomb.style.width="100px";
                  doraemonbomb.style.height="71px";
                  window.removeEventListener('keydown',gamepadder,false);
                  $timeout(function(){
                      doraemonbomb.style.background="url(assets/images/src/producer/doraemonbomb/doraemon_die.png) no-repeat center";
                  },300);
               }
           }
        }
    }

    //judge z-index relationship
    function judgeZindex2(charactor){
        var tmp1=charactor.style.top;
        var currentY1=parseInt(tmp1.substring(0,tmp1.length-2));

        var tmp2=tmpBomb.style.top;
        var currentY2=parseInt(tmp2.substring(0,tmp2.length-2));
        
        if(carryItem2){
                charactor.style.zIndex=10;
                tmpBomb.style.zIndex=10;
        }else{
            if(currentY1+40>currentY2){
                charactor.style.zIndex=12;
                tmpBomb.style.zIndex=10;
            }else{
                charactor.style.zIndex=10;
                tmpBomb.style.zIndex=12;
            }
        }
    }
})