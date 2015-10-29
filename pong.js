var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Sets the radius of the ball
var ballRadius = 10;
// Sets the  X position of the Ball    
var BallXPos = canvas.width / 2;
var BallYPos = canvas.height / 2;
// Horizontal speed of ball
var BallXSpeed = -2;
// Vertical speed of ball
var BallYSpeed = 2;
/* movement of the balls    
        var BallXPos =BallXPos + BallXSpeed;
        var BallYPos =BallYPos + BallYSpeed;*/
// height of the paddles
var paddleHeight1 = 75;
var paddleHeight2 = 75;
var paddleHeight3 = 35;
var paddleHeight4 = 35;
// length of the paddles
var paddleWidth1 = 10;
var paddleWidth2 = 10;
var paddleWidth3 = 10;
var paddleWidth4 = 10;
// sets the paddle on the center to start of Horizontally 
var paddleXPos1 = 5;
var paddleXPos2 = canvas.width - paddleWidth2 - 5;
var paddleXPos3 = 175;
var paddleXPos4 = canvas.width - paddleWidth4-175;
// sets the paddle on the center to start of  vertically
var paddleYPos1 = (canvas.height / 2) - (paddleHeight1 / 2);
var paddleYPos2 = (canvas.height / 2) - (paddleHeight2 / 2);
var paddleYPos3 = (canvas.height / 2) - (paddleHeight2 / 2);
var paddleYPos4 = (canvas.height / 2) - (paddleHeight2 / 2);
// Sets player keys to false;        
var upPressed1   = false;
var downPressed1 = false;
var upPressed2   = false;
var downPressed2 = false;
var upPressed3   = false;
var downPressed3 = false;
var upPressed4   = false;
var downPressed4 = false;
// sets the score to 0
var score1 = 0;
var score2 = 0;
var pause = false;
var menu  = false;
var player1Win = false;
var player2Win = false;
var reset = false;
var randomBallAngle = Math.floor(1 + Math.random() * 5)
    //        var audio = new Audio('pause.mp3');
            var audio2 = new Audio('bounce.m4a');
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

if (menu == true) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText(menu, canvas.width - 50, canvas.height - 50);

    function keyDownHandler(e) {
        if (e.keyCode == 20) {
            menu = false;
        }
    }
    ctx.font = "100px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("How To Play:", 50, 100);
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000";
    function keyUpHandler(e) {
    if(menu == ture){
            if(e.keyCode == 90){
                menu = false;
            }
        }
    }
}
if (menu == false) {
    function randomColor1() {
        function c() {
            return Math.floor(Math.random() * 256).toString(16)
        }
        return "#" + c() + c() + c();
    } function randomColor2() {
        function c() {
            return Math.floor(Math.random() * 256).toString(16)
        }
        return "#" + c() + c() + c();
    }

    //colors
    var paddleColor = randomColor1();
    var paddleColor2 = randomColor2();



    function keyDownHandler(e) {
        if (e.keyCode == 81) {
            upPressed1 = true;
        } else if (e.keyCode == 65) {
            downPressed1 = true;
        } else if (e.keyCode == 38) {
            upPressed2 = true;
        } else if (e.keyCode == 40) {
            downPressed2 = true;
        } else if (e.keyCode == 82 ) {
            upPressed3 = true;           
        } else if (e.keyCode == 70 ) {
            downPressed3 = true;
        } else if (e.keyCode == 85 ) {
            upPressed4 = true;
        } else if (e.keyCode == 74 ) {
            downPressed4 = true;
        }

    }

    function keyUpHandler(e) {

        if (e.keyCode == 81) {
            upPressed1 =   false;
        } else if (e.keyCode == 65) {
            downPressed1 = false;
        } else if (e.keyCode == 38) {
            upPressed2 =   false;
        } else if (e.keyCode == 40) {
            downPressed2 = false;
        }else if (e.keyCode == 82 ) {
            upPressed3 =   false;           
        } else if (e.keyCode == 70 ) {
            downPressed3 = false;
        } else if (e.keyCode == 85 ) {
            upPressed4 =   false;
        } else if (e.keyCode == 74 ) {
            downPressed4 = false;
        } else if (e.keyCode == 80) {
            pause = !pause;
        }
        if(player1Win == true || player2Win == true){
            if(e.keyCode == 32){
                reset = true;
            }
        }
    }

    function drawBall() {
        ctx.beginPath();
        ctx.arc(BallXPos, BallYPos, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle1() {
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "black";
        ctx.setLineDash([0.5]);
        ctx.rect(paddleXPos1, paddleYPos1, paddleWidth1, paddleHeight1);
        ctx.fillStyle = paddleColor;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }    
      function drawPaddle3() {
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.setLineDash([0.5]);
        ctx.strokeStyle = "black";
        ctx.rect(paddleXPos3, paddleYPos3, paddleWidth3, paddleHeight3);
        ctx.fillStyle = paddleColor;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
     function drawPaddle2() {
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.setLineDash([0.5]);
        ctx.strokeStyle = "black";
        ctx.rect(paddleXPos2, paddleYPos2, paddleWidth2, paddleHeight2);
        ctx.fillStyle = paddleColor2;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    
      function drawPaddle4() {
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.setLineDash([0.5]);
        ctx.strokeStyle = "black";
        ctx.rect(paddleXPos4, paddleYPos4, paddleWidth4, paddleHeight4);
        ctx.fillStyle = paddleColor2;
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

    function centerline() {
        ctx.setLineDash([6]);

        ctx.strokeRect(canvas.width / 2, 0, 1, canvas.height);

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

    function player1Score() {
        if (BallXPos < -5) {
                BallXPos = canvas.width / 2;
                BallYPos = canvas.height / 2;
                BallXSpeed = -BallXSpeed;
                score2++;
        }
    }
    
            function player2Score(){
        if (BallXPos > canvas.width + 5) {
                BallXPos = canvas.width / 2;
                BallYPos = canvas.height / 2;
                BallXSpeed = -BallXSpeed;
                score1++;
            }
            }
    
    function win(){
        
        if(score1 == 1){
            BallXSpeed = 0;
            BallYSpeed = 600;
            paddleYPos1 += paddleYPos1;
            paddleYPos2 += paddleYPos2;
            paddleYPos3 += paddleYPos3;
            paddleYPos4 += paddleYPos4;
            ctx.font = "100px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText("Player 1 Wins", canvas.width / 5, canvas.height / 1.8);
            player1Win = true;
        }else if(score2 == 1){
            BallXSpeed = 0;
            BallYSpeed = 600;
            paddleYPos1 += paddleYPos1;
            paddleYPos2 += paddleYPos2;
            paddleYPos3 += paddleYPos3;
            paddleYPos4 += paddleYPos4;
            ctx.font = "100px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText("Player 2 Wins", canvas.width / 5, canvas.height / 1.8);
            player2Win = true;
            
        }
    }
    
    function resetGame(){
    if(reset == true){
     player1Win = false;
     player2Win = false;
     score1 = 0;
     score2 = 0;
     BallXPos = canvas.width / 2;
     BallYPos = canvas.height / 2;
     BallXSpeed = -2;
     BallYSpeed = 2;
     paddleXPos1 = 5;
     paddleXPos2 = canvas.width - paddleWidth2 - 5;
     paddleXPos3 = 175;
     paddleXPos4 = canvas.width - paddleWidth4-175;
     paddleYPos1 = (canvas.height / 2) - (paddleHeight1 / 2);
     paddleYPos2 = (canvas.height / 2) - (paddleHeight2 / 2);
     paddleYPos3 = (canvas.height / 2) - (paddleHeight2 / 2);
     paddleYPos4 = (canvas.height / 2) - (paddleHeight2 / 2);
     reset = false; }
    }
            function BallColloideWalls(){
     if (BallYPos + BallYSpeed < ballRadius) {
            BallYSpeed = -BallYSpeed;
        }
        else if (BallYPos + BallYSpeed > canvas.height - ballRadius) {
            BallYSpeed = -BallYSpeed;
            }
        }
    function BallColloidePaddle1(){
        
            if  (BallXPos <= (paddleXPos1 + paddleWidth1) && paddleXPos1 <= (BallXPos + ballRadius) && BallYPos <= (paddleYPos1 + paddleHeight1) && paddleYPos1<= (BallYPos + ballRadius)) {
                if (downPressed1 == true) {
                    BallXSpeed = -(BallXSpeed + .5);
                    BallYSpeed = -BallYSpeed;
                } else if (upPressed1 == true) {
                    BallXSpeed = -(BallXSpeed + .5);
                    BallYSpeed = -BallYSpeed;
                } else {
                    BallXSpeed = -BallXSpeed;
                    BallYSpeed = BallYSpeed;
                }
                 audio2.play();
            }
    }
    
    function BallColloidePaddle2(){
        
            if  (BallXPos <= (paddleXPos2 + paddleWidth2) && paddleXPos2 <= (BallXPos + ballRadius) && BallYPos <= (paddleYPos2 + paddleHeight2) && paddleYPos2<= (BallYPos + ballRadius)) {
                
         
            if (downPressed2 == true) {
                BallXSpeed = -BallXSpeed;
                BallYSpeed = -(BallYSpeed + .5);
            } else if (upPressed2 == true) {
                BallXSpeed = -BallXSpeed;
                BallYSpeed = -(BallYSpeed + .5);
            } else {
                BallXSpeed = -BallXSpeed;
                BallYSpeed = BallYSpeed;
            }
             audio2.play();
        }
    }
    function BallColloidePaddle3(){
        
            if  (BallXPos <= (paddleXPos3 + paddleWidth3) && paddleXPos3 <= (BallXPos + ballRadius) && BallYPos <= (paddleYPos3 + paddleHeight3) && paddleYPos3<= (BallYPos + ballRadius)) {  
                BallXSpeed = -BallXSpeed;
                BallYSpeed = BallYSpeed;
                audio2.play();
        }
    }
    function BallColloidePaddle4(){
        
            if  (BallXPos <= (paddleXPos4 + paddleWidth4) && paddleXPos4 <= (BallXPos + ballRadius) && BallYPos <= (paddleYPos4 + paddleHeight4) && paddleYPos4<= (BallYPos + ballRadius)) {
                BallXSpeed = -BallXSpeed;
                BallYSpeed = BallYSpeed;
                audio2.play();
            }
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPaddle1();
        drawPaddle3();
        drawPaddle2();
        drawPaddle4();
        drawBall();
        centerline();
        drawScore1();
        drawScore2();
        player1Score();
        player2Score();
        BallColloideWalls();
        BallColloidePaddle1();
        BallColloidePaddle2();
        BallColloidePaddle3();
        BallColloidePaddle4();
        win();
        resetGame();

       
        if (pause == false) {
            if (upPressed1 && paddleYPos1 > 0 + 2) {
                paddleYPos1 -= 6;
            } else if (downPressed1 && paddleYPos1 < canvas.height - paddleHeight1) {
                paddleYPos1 += 6;
            }
            if (downPressed2 && paddleYPos2 < canvas.height - paddleHeight2 - 2) {
                paddleYPos2 += 6;
            } else if (upPressed2 && paddleYPos2 > 0 + 2) {
                paddleYPos2 -= 6;
            }
            if (upPressed3 && paddleYPos3 > 0 + 2) {
                paddleYPos3 -= 10;
            } else if (downPressed3 && paddleYPos3 < canvas.height - paddleHeight3) {
                paddleYPos3 += 10;
            }
            if (upPressed4 && paddleYPos4 > 0 + 2) {
                paddleYPos4 -= 10;
            } else if (downPressed4 && paddleYPos4 < canvas.height - paddleHeight4) {
                paddleYPos4 += 10;
            }
            BallXPos += 3.15 * BallXSpeed;
            BallYPos += 3.15 * BallYSpeed;
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