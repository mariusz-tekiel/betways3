const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20; 
let ballX = cw/2-ballSize/2; //490 to 510px
let ballY = ch/2-ballSize/2; //  240 to 260px

//paddles
const paddleHeight=100;
const paddleWidth=20;

// X doesn't change for player
const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 3;
let ballSpeedY = 3;

let scoreP = 0;
let scoreAi = 0; 

let pause = true;


const ballHit = new Audio("ball_hit.wav");
const point = new Audio("point.wav");
const bounceBorder = new Audio("bounceBorder.flac");
bounceBorder.volume = 0.2;

function player(){
   //our paddle
   ctx.fillStyle='#d8320b';
   ctx.fillRect(playerX,playerY,paddleWidth,paddleHeight);

}

function ai(){
   //oponent paddle
   ctx.fillStyle='#3385e3';
   ctx.fillRect(aiX,aiY,paddleWidth,paddleHeight);
}

function ball(){
   ctx.fillStyle="#fff";
   ctx.fillRect(ballX,ballY,ballSize,ballSize);

   ballX += ballSpeedX;
   ballY += ballSpeedY;

   //checking if ball is within table
   if(ballY  <= 0 || ballY + ballSize >= ch ){
      ballSpeedY = -ballSpeedY;
      bounceBorder.play();
      speedUp();

   }

   if(ballX <= 0 || ballX + ballSize >= cw){
      ballSpeedX = -ballSpeedX;
      speedUp();

   }
}

function table(){

   ctx.fillStyle = '#15480c';
   ctx.fillRect(0,0,cw,ch);   
   //middle line
   for(let linePosition = 20; linePosition < ch;linePosition += 30){
      ctx.fillStyle = "#d0d0d0";
      ctx.fillRect(cw/2-lineWidth/2,linePosition,lineWidth,lineHeight);
   }

}

topCanvas = canvas.offsetTop; 
//console.log(topCanvas)

function playerPosition(e){
   // console.log("pozycja myszy to " + (e.clientY - topCanvas))
   playerY = e.clientY - topCanvas - paddleHeight/2; 
   //when paddle tries to go out of table
   if(playerY < 0){
      playerY = 0;
   }
   else if(playerY > ch-paddleHeight)
   {
      playerY = ch - paddleHeight;
   }

   //temporary we set movement of player same as oponent
   // aiY = playerY;
}

function speedUp(){

   //speed X
   if(ballSpeedX > 0 && ballSpeedX < 20){
      ballSpeedX += 0.25;

   } 
   else if (ballSpeedX < 0 && ballSpeedX > -20)
   {
      ballSpeedX -= 0.25;

   }  
   //console.log("speedX = "+ballSpeedX);

   //speed Y   
   if(ballSpeedY > 0 && ballSpeedY < 20){
      ballSpeedY += 0.5;

   } 
   else if (ballSpeedY < 0 && ballSpeedY > -20)
   {
      ballSpeedY -= 0.5;

   }  
   //console.log("speedY = "+ballSpeedY);

}

//ARTIFICIAL INTELIGENCE
function aiPosition(){

   var middlePaddle = aiY + paddleHeight/2;
   var middleBall = ballY + ballSize/2;
   //we divide half of ai for sections depens how far ball is from ai paddle 

   if(ballX > 500){
      if(middlePaddle - middleBall > 200){
         //console.log("> +200");
         aiY -= 25;
      }
      else if(middlePaddle - middleBall > 50){
         //console.log("od +50 do 200");
         aiY -= 15;
      }
      else if(middlePaddle - middleBall < -200){
         //console.log("< -200");      
         aiY += 25;
      }
      else if(middlePaddle - middleBall < -50){
         //console.log("od -50 do -200");      
         aiY += 15;
      }
   }
   else if(ballX <= 500 && ballX > 150){
      if(middlePaddle - middleBall > 100){
         aiY -= 3;
      }
      else if(middlePaddle - middleBall < -100){
         aiY += 3;
      }
   }
}
//ball bouncing from paddle
function bounceBall(){


   //bounce with 45 degrees
   if((ballX < playerX + paddleWidth) && (ballY >= playerY && ballY <= playerY + paddleHeight)){
      ballSpeedX = -ballSpeedX;
      ballHit.play();
   } 

   if((ballX > aiX - paddleWidth) && (ballY >= aiY && ballY <= aiY + paddleHeight)){
      ballSpeedX = -ballSpeedX;
      ballHit.play();
   }

}

function displayScore() {

   if (ballX <= 60){

      scoreAi += 1;
      pause = true;
      point.play()
      //console.log("point player");

   } 
   else if (ballX + ballSize >= cw -60){

      scoreP += 1;
      // console.log("point ai");
      pause = true;
      point.play()

   }

   ctx.font = '40px Verdana';
   ctx.fillStyle = '#eeedf2';
   ctx.textAlign = 'right';
   ctx.fillText(scoreP, cw/2-30, 60);
   ctx.fillText(scoreAi, cw/2+60, 60);

   //End of game
   if(scoreAi >= 2) {
      ctx.fillStyle = '#179ad4';
      ctx.textAlign = 'left';
      ctx.fillText("Your oponent won!", cw/2+20, 260);
      ballInit()

      //startGame()

   } 
   else if(scoreP >= 2){
      ctx.fillStyle = '#e0341e';
      ctx.textAlign = 'right';
      ctx.fillText("You win!", cw/2-100, 260);
      ballInit()
      // startGame()  

   }

}



function flag(){
   pause = false;
}
function ballInit(){

   ballX = cw/2 - ballSize/2;
   ballY = ch/2 - ballSize/2;
   canvas.addEventListener("click",flag)
   ballSpeedX = 4;
   ballSpeedY = 4;
}
function startGame(){

   scoreAi = 0;
   scoreP = 0;
   ctx.fillText(scoreP, cw/2-30, 60);
   ctx.fillText(scoreAi, cw/2+60, 60);
   ctx.fillText("", cw/2+60, 260);   
   ctx.fillText("", cw/2-200, 260);
   ballInit()
}

canvas.addEventListener("mousemove",playerPosition)

function game(){

   if (!pause){

      table()
      ball()
      player()
      ai()
      aiPosition()
      bounceBall()
      displayScore()                    
   } 
   else{

      table()
      ball()
      player()
      ai()
      ballInit()
      displayScore()

   } 

}


setInterval(game,1000/60)