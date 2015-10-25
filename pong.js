
 var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
// Sets the radius of the ball
        var ballRadius = 10;
// Sets the Starting X position of the Balld    
        var BallStartingXPos = canvas.width/2;
        var BallStartingYPos = canvas.height/2;
// Horizontal speed of ball
        var BallXSpeed = 2; 
// Vertical speed of ball
        var BallYSpeed = -2; 
// movement of the balls    
        var BallXPos =BallStartingXPos + BallXSpeed;
        var BallYPos =BallStartingYPos + BallYSpeed;
// height of the paddles
        var paddleHeight1 = 75; 
        var paddleHeight2 = 75; 
// length of the paddles
        var paddleWidth1 = 10; 
        var paddleWidth2 = 10; 
// sets the paddle on the center to start of Horizontally 
        var paddleStartingXPos1 = 5;
        var paddleStartingXPos2 = canvas.width -paddleWidth2 - 5;
// sets the paddle on the center to start of  vertically
        var paddleStartingYPos1 = (canvas.height/2)-(paddleHeight1/2);
        var paddleStartingYPos2 = (canvas.height/2)-(paddleHeight2/2);
// Sets player keys to false;        
        var upPressed1 = false; 
        var downPressed1 = false;
        var upPressed2 = false;
        var downPressed2 = false;
// sets the score to 0
        var score1 = 0;
        var score2 = 0;
        var pause = false;
        var menu = false;
        var randomBallAngle = Math.floor(1 + Math.random() * 5)
//        var audio = new Audio('pause.mp3');
//        var audio2 = new Audio('bounce.m4a');
//        var audio3 = new Audio('pop2.mp3');
//        var audio4 = new Audio('DinoMolly.mp3');
//        var audio5 = new Audio('lolol.mp3');
//        var audio6 = new Audio('kirby.mp3');
//        var audio7 = new Audio('blub.mp3');
//        var audio8 = new Audio('explosion.mp3');
//        var audio9 = new Audio('sci_fi_engine_shut_down.mp3');
//        var breakoutSong = new Audio('breakout.m4a');
//        var winning = new Audio("yayayyayay.mp3");
        
         document.addEventListener("keydown", keyDownHandler, false);
         document.addEventListener("keyup", keyUpHandler, false);
        
        if(menu == true){  
            ctx.font = "20px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText(menu, canvas.width -50, canvas.height-50);
            function keyDownHandler(e) {
                if (e.keyCode == 32) {
                    menu = false;
                }
            }
            ctx.font = "100px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText("How To Play:", 50, 100);
            ctx.font = "30px Arial";
            ctx.fillStyle = "#000";
        }
 if(menu == false){
        function randomColor1() {
            function c() {
                return Math.floor(Math.random() * 256).toString(16)
            }
            return "#" + c() + c() + c();
        }

        //colors
        var paddleColor = randomColor1();


    
        function keyDownHandler(e) {
            if (e.keyCode == 87) {
                upPressed1 = true;
            } else if (e.keyCode == 83) {
                downPressed1 = true;
            } else if (e.keyCode == 38) {
                upPressed2 = true;
            } else if (e.keyCode == 40) {
                downPressed2 = true;
            }

        }

        function keyUpHandler(e) {
        
            if (e.keyCode == 87) {
                upPressed1 = false;
            } else if (e.keyCode == 83) {
                downPressed1 = false;
            }else if (e.keyCode == 38) {
                downPressed2 = false;
            }else if (e.keyCode == 40) {
                downPressed2 = false;
            }
            else if (e.keyCode == 80) {
                pause = !pause;
            }
        }
     
      function drawBall() {
            ctx.beginPath();
            ctx.arc(BallStartingXPos, BallStartingYPos, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
        }
   
        function drawPaddle1() {
            ctx.beginPath();
            ctx.lineWidth="1";
            ctx.strokeStyle="black";
            ctx.rect(paddleStartingXPos1, paddleStartingYPos1, paddleWidth1, paddleHeight1);
            ctx.fillStyle = paddleColor;
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }
     function drawPaddle2() {
         ctx.beginPath();
         ctx.lineWidth="1";
         ctx.strokeStyle="black";
         ctx.rect(paddleStartingXPos2,paddleStartingYPos2,paddleWidth2,paddleHeight2);
         ctx.fillStyle = paddleColor;
         ctx.fill();
         ctx.stroke();
         ctx.closePath();
     }

// Makes the text that will hold the score for player 1
        function drawScore1() {
            ctx.font = "26px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText("Score: " + score1, 200, 40);
        }
// Meakes the text that will hold the score for player 2
        function drawScore2() {
            ctx.font = "26px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText("Score: " + score2, 700, 40);

        }
        
        function centerline(){
            ctx.setLineDash([6]);
            
    ctx.strokeRect(canvas.width/2, 0, 1, canvas.height);
            
        }
       

        function pauseText() {
            ctx.font = "100px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText("PAUSED", canvas.width / 4.5, canvas.height / 1.4);
        }

//        function playThatFunkyMusicWhiteBoy() {
//            audio.loop = true;
//            audio.play();
//        }

        function getRandom(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }


        function draw() {
             ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawPaddle1();
            drawPaddle2();
            drawBall();
            centerline();
            drawScore1();
            drawScore2();
            
           
        
            
            if (BallStartingXPos + BallXSpeed > canvas.width - ballRadius || BallStartingXPos + BallXSpeed < ballRadius) {
                BallXSpeed = -BallXSpeed;
            }
            if (BallStartingYPos + BallYSpeed < ballRadius) {
                BallYSpeed= -BallYSpeed;
            } else if (BallStartingYPos + BallYSpeed > canvas.height - ballRadius) {
                if (BallStartingXPos > paddleStartingXPos1 && BallStartingXPos < paddleStartingYPos1 + paddleWidth1) {
                    if (downPressed1 == true) {
                            BallXSpeed = -(BallXSpeed + .5);
                            BallYSpeed = -BallYSpeed ;
                    } else if (upPressed1 == true) {
                         BallXSpeed = -(BallXSpeed + .5);
                         BallYSpeed = -BallYSpeed;
                    }else{
                        BallXSpeed = BallXSpeed;
                        BallYSpeed = -BallYSpeed;
                    }
                   // audio2.play();
                } 
            }
            if (pause == false) {
                if (downPressed1 && paddleStartingXPos1 < canvas.height - paddleWidth1 ) {
                    paddleStartingYPos1 += 4;
                } else if (upPressed1 ) {
                    paddleStartingYPos1 -= 4;
                }
                BallStartingXPos += 2.15 * BallXSpeed;
                BallStartingYPos += 2.15 * BallYSpeed;
                //  breakoutSong.loop = true;
                 // breakoutSong.play();
               //   audio.pause();
            } else if (pause == true) {
                pauseText();
           //     playThatFunkyMusicWhiteBoy();
               // breakoutSong.pause();
            }
            requestAnimationFrame(draw);
        }
        draw();
}