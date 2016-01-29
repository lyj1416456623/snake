window.onload  = function(){
  var snakes=document.getElementById('snake');
  var row=20,stone,t;
  var width1=Math.floor(600-row)/row+'px';
  var botton=document.getElementById('botton');
  var sence=document.getElementById('sence');
  var sence1=document.getElementById('sence1');

  for(var i=0;i<row;i++){
    for(var j=0;j<row;j++){
    stone=document.createElement('div');
    stone.setAttribute('class','stone');
    stone.setAttribute('id',i+'__'+j);
    stone.style.width=width1;
    stone.style.height=width1;
    snakes.appendChild(stone);
    }
  }
   var
    snake = [ {x:0,y:0}, {x:0,y:1}, {x:0,y:2} ],
    MAXSNAKE = 100,RIGHT = 39,LEFT = 37,UP = 38, DOWN = 40,
    SNAKECOLOR='rgb(33,116,1)',FOODCOLOR='#ff3040',DEFAULTCOLOR = 'rgba(255,255,255,0.6)',
    defaultDirection = RIGHT,

    isInSnake = function(x,y){
      for ( var i = 0;  i < snake.length;  i++){
        if(  snake[i].x == x && snake[i].y == y){return true;}
      }
      return false;
    },
    random = function(){
      return Math.floor( Math.random()*row );
    },
    $ = function(id){
      return document.getElementById(id);
    },
    join =function(f,s){
      return f + '__' + s;
    },
    dropFood  = function(){
      var
      x = random(), y = random();
      if( snake.length == MAXSNAKE ){return null;}
      while( isInSnake(x,y) ){
        x = random();
        y = random();
      }
      $( join(x,y) ).style.background= FOODCOLOR;
      return {x:x,y:y};
    },
    food = dropFood(),
    zou = function(){
      var last  = snake.length -1,newHead,weiba;
      if( defaultDirection== RIGHT ){
        newHead = {x:snake[last].x, y:snake[last].y+1};
      }
      if( defaultDirection== LEFT  ){
        newHead = {x:snake[last].x, y:snake[last].y-1};
      }
      if( defaultDirection== DOWN  ){
        newHead = {x:snake[last].x+1, y:snake[last].y};
      }
      if( defaultDirection== UP    ){
        newHead = {x:snake[last].x-1, y:snake[last].y};
      }
      if( newHead.x >(row-1) || newHead.x <0 || newHead.y>(row-1)|| newHead.y <0){
        // alert('game over!');
        over.style.display='block';
        clearInterval(t);
        // window.location.reload(); 
        return null;
      }
      if( isInSnake(newHead.x,newHead.y) ){
        over.style.display='block';
        clearInterval(t);
        // window.location.reload();
        return null;
      }
      snake.push(newHead);
      if(newHead.x == food.x && newHead.y == food.y){
        $( join( food.x,food.y) ).style.background = SNAKECOLOR;
        food = dropFood(); return null;
      }

      weiba = snake.shift();
      $( join( weiba.x , weiba.y) ) .style.background  = DEFAULTCOLOR;
      $( join( newHead.x , newHead.y) ).style.background = SNAKECOLOR;
      return null;
    };

   
    (function(){
      for ( var i = 0;  i < snake.length;  i++){
        var div = $(join(snake[i].x ,snake[i].y));
        div.style.background = SNAKECOLOR;
      }
    })();
    document.onkeydown = function(e){
      var direction = e.keyCode;
      if( direction==LEFT ||
            direction==UP   ||
            direction==RIGHT||
            direction==DOWN){
        defaultDirection=direction;
      }

  };
 

botton.onclick=function(){
  sence1.style.display='none';
  sence.style.display='block';
  botton.style.display='none';
  t=setInterval(zou,200);
};
botton1.onclick=function(){
  location.reload();
};

};


//-----------------------------------------------------------------------
// var snake=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
// console.log(snake);
// var ROW=7,snakeColor='blue',foodColor='red';
// var LEFT=37,RIGHT=39,UP=38,DOWN=40;
// var dafultDirection=RIGHT;
// var defaultColor='#ccc';
// var insnake=function(x,y){
//   for(var i=0;i<snake.length;i++){
//     if(snake[i].x==x&&snake[i].y==y){return true;}
//   }
//   return false;
// };
// var dropfood=function(){
//   var x=Math.floor(Math.random()*7),
//     y=Math.floor(Math.random()*7);
//     if(snake.length==49){return null;}
//     while(insnake(x,y)){
//       x=Math.floor(Math.random()*7);
//       y=Math.floor(Math.random()*7);
//     }
//     var block6=document.getElementById(x+'_'+y);
//     block6.style.background=foodColor;
//     return {x:x,y:y};
// };
// food=dropfood();

// var zou=function(dir){
//   var last=snake.length-1,newHard,weiba;
//   dafultDirection=dir;
//   if(dir==LEFT){
//     newHard={x:snake[last].x,y:snake[last].y-1};
//     console.log(newHard);
//   }
//   if(dir==RIGHT){
//     newHard={x:snake[last].x,y:snake[last].y+1};
//   }
//   if(dir==UP){
//     newHard={x:snake[last].x-1,y:snake[last].y};
//   }
//   if(dir==DOWN){
//     newHard={x:snake[last].x+1,y:snake[last].y};
//   }
//   if(newHard.x>6||newHard.x<0||newHard.y>6||newHard.y<0){
//     alert('SAY 拜拜!!!'); 
//     location.reload();
//     return null;
//   }
//   if(insnake(newHard.x,newHard.y)){
//     alert('我在蛇身上!!!');
//     return null;
//   }
//   snake.push(newHard);
//   if(newHard.x==food.x&&newHard.y==food.y){
//     var foodColor=document.getElementById(food.x+'_'+food.y);
//     foodColor.style.background=snakeColor;
//     food=dropfood();
//     return null;
//   }
//   weiba=snake.shift();
//   var weibaColor=document.getElementById(weiba.x+'_'+weiba.y);
//   weibaColor.style.background=defaultColor;
//   var newHardColor=document.getElementById(newHard.x+'_'+newHard.y);
//   newHardColor.style.background=snakeColor; 
//   return null;
// }

// var snakeaa=function(){
//   for(var i=0;i<snake.length;i++){
//     var div=document.getElementById(snake[i].x+'_'+snake[i].y).style.background=snakeColor;
//   }
// };
// snakeaa();

// document.onkeydown=function(e){
//   var d=e.keyCode;
//   if((d==LEFT||d==RIGHT||d==UP||d==DOWN)&&Math.abs(d-dafultDirection)!==2){
//     zou(d);
//   }
// };

//---------------------------------------------------------------------------



// window.onload=function(){
// 	var 
// 	snake=[{x:0,y:0},{x:0,y:1},{x:0,y:2}],
// 	MAXSNAKE=100,RIGHT=39,LEFT=37,UP=38,DOWN=40,
// 	SNAKECOLOR='#c4c4c4',FOODCOLOR='#ff0832',DEFAULTCOLOR='white',
// 	ROW=10,
// 	defaultDirection=RIGHT,
// 	isInSnake=function(x,y){
// 		for(var i=0;i<snake.length;i++){
// 			if(snake[i].x==x&&snake[i].y==y){
// 				return true;
// 			}
// 		}
// 		return false;
// 	},
// 	random=function(){
// 		return Math.floor(Math.random()*ROW);
// 	},
// 	$=function(id){
// 		return document.getElementById(id);
// 	},
// 	join=function(f,s){
// 		return f+'_'+s;
// 	},
// 	dropFood=function(){
// 		var 
// 		x=random(),y=random();
// 		//Warniiing:当蛇的数据占据整个页面的时候会陷入死循环
// 		if(snake.length==MAXSNAKE){
// 			return null;
// 		}
// 		while(isInSnake(x,y)){
// 			x=random();
// 			y=random();
// 		}
// 		$(join(x,y)).style.backgroundColor=FOODCOLOR;
// 		return{x:x,y:y};
// 		// div.style.backgroundColor='red';
// 	},
// 	food=dropFood(),
	
// 	zou=function(dir){
// 		var last=snake.length-1,newHead,weiba;
// 		dafaultDirection=dir;
// 		if(dir==RIGHT){
// 			newHead={x:snake[last].x,y:snake[last].y+1};
// 		}
// 		if(dir==LEFT){
// 			newHead={x:snake[last].x,y:snake[last].y-1};
// 		}
// 		if(dir==DOWN){
// 			newHead={x:snake[last].x+1,y:snake[last].y};
// 		}
// 		if(dir==UP){
// 			newHead={x:snake[last].x-1,y:snake[last].y};
// 		}
		
// 		if(newHead.x>9||newHead.x<0||newHead.y>9||newHead.y<0){
// 			alert('game over!');
//       clearInterval(t);
// 			return null;
// 		}
// 		if(isInSnake(newHead.x,newHead.y)){
// 			alert('game over!');
// 			return null;
// 		}
// 		snake.push(newHead);
// 		if(newHead.x==food.x&&newHead.y==food.y){
// 			$(join(food.x,food.y)).style.backgroundColor=SNAKECOLOR;
// 			food=dropFood();return null;
// 		}
// 		// var newHead={x:snake[last].x,y:snake[last].y-1};
// 		weiba=snake.shift();
// 		// return snake;
// 		$(join(weiba.x,weiba.y)).style.backgroundColor=DEFAULTCOLOR;
// 		$(join(newHead.x,newHead.y)).style.backgroundColor=SNAKECOLOR;
// 		return null;

// 	};

// 	(function(){
// 		// document.getElementById(snake[0].x+'_'+snake[0].y).style.backgroundColor='green';
// 		// document.getElementById(snake[1].x+'_'+snake[1].y).style.backgroundColor='green';
// 		// document.getElementById(snake[2].x+'_'+snake[2].y).style.backgroundColor='green';
// 		for(var i=0;i<snake.length;i++){
// 			$(join(snake[i].x,snake[i].y)).style.backgroundColor=SNAKECOLOR;
// 		}
		
// 	})();
// 	document.onkeydown=function(e){
// 		var direction=e.keyCode;
// 		if((direction==LEFT||direction==UP||direction==RIGHT||direction==DOWN)
// 			&&Math.abs(direction-defaultDirection)!==2){
// 				zou(direction);
// 			}
			
// 		};
// 	};
		// if(e.keyCode==38){
		// 	zou('up');
		// }
		// if(e.keyCode==40){
		// 	zou('down');
		// }
		// if(e.keyCode==37){
		// 	zou('left');
		// }
		// if(e.keyCode==39){
		// 	zou('right');
		// }
		// if(e.keyCode==83){
		// 	zou('s');
		// }

	// zou();
	// drawSnake();

	//while循环的一种用法
	// var isKongZuoWei=function(x,y){
	// 	if(x==2&&y==0){
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}

	// };
	// var dianming=function(){
	// 	var x=Math.floor(Math.random()*5);
	// 	var y=Math.floor(Math.random()*10);
	// 		while(isKongZuoWei(x,y)){
	// 			x=Math.floor(Math.random()*5);
	// 			y=Math.floor(Math.random()*10);
	// 		}
	// return {x:x,y:y};
	// };
	// console.log(dianming());
	//----------------
	// var da=[{a:1,b:2},{a:3,b:5},{a:12,b:16}];
	// var aaa=function(x,y){
	// 	for(var i=0;i<da.length;i++){
	// 		if(da[i].a==x&&da[i].b==y){
	// 			return true;
	// 		}
	// 	}
	// 	return false;
	// };
	// console.log(aaa(3,5));
	//如果数组中有a:3 b:5对象 return true 如果没有返回false;

	// var arr=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
	// var fn=function(){
	// 	arr.shift();
	// 	var c={};
	// 	c.x=arr[arr.length-1].x;
	// 	c.y=arr[arr.length-1].y+1;
	// 	arr.push(c);
	// 	return arr;
	// };
	// console.log(fn());

	// 清理Interval
	// var t=setInterval(aa,1000);
	// clearInterval(t);
