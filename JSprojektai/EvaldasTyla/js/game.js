// globalus kintamieji
var aniStand = 0; 
var aniMoveRight = 0;
var aniMoveLeft = 0;
var gameCheck = true;
var score = 0;
var time = 20;
var jumpRightCheck = true;

// Zaidimo lauko sukurimas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;
document.body.appendChild(canvas);

// Elementai. Fonas, pikachu etc
var bgImage = new Image();
bgImage.src = "./images/game_background.png";
var pikachuImg = new Image();
var cupcakeImg = new Image();
cupcakeImg.src = "./images/cupcake.png"
var broccoliImg = new Image();
broccoliImg.src = "./images/broccoli.png"
var gameOverImg = new Image();
gameOverImg.src = "./images/gameOver.png"
var pikaFX = new Audio("./sounds/pika.wav")
var themeSong = new Audio("./sounds/theme_song.mp3")
var nomFX = new Audio("./sounds/nom.wav")

//idle masyvas
var arrayPika = [];
var i = 0;
while (i <= 35) {
    arrayPika[i] = "./images/output/tmp-" + i + ".gif";
    i++;
}

//bega i kaire masyvas
var arrayPikaRunRight = [];
var i = 0;
while (i <= 3) {
    arrayPikaRunRight[i] = "./images/output (1)/tmp-" + i + ".gif";
    i++;
}

//bega i desine masyvas
var arrayPikaRunLeft = [];
var i = 0;
while (i <= 3) {
    arrayPikaRunLeft[i] = "./images/output (2)/tmp-" + i + ".gif";
    i++;
}

//Funkcijos kvieciamos nesustojant pagal intervalus
window.onload = function() {
    setInterval(updateSprite, 100);
    setInterval(goingDown, 5);
    setInterval(timer, 1000);
    setInterval(spaceCheck, 100);
}

//Pikachu animacija
function updateSprite() {
    if (39 in keysDown) {
        pikachuImg.src = arrayPikaRunRight[this.aniMoveRight];
        this.aniMoveRight++;
    if (this.aniMoveRight == 3) {
        this.aniMoveRight = 0;
        } 
        } else if (37 in keysDown) {
            pikachuImg.src = arrayPikaRunLeft[this.aniMoveLeft];
            this.aniMoveLeft++;
            if (this.aniMoveLeft == 3) {
                this.aniMoveLeft = 0;
            }
        } else {
            pikachuImg.src = arrayPika[this.aniStand];
        this.aniStand++;
        if (this.aniStand == 35) {
            this.aniStand = 0;
        }
    }            
};

// Kuriami objektai
var pika = {speed: 300, x: 0, y: 0};
var cupcake = {speed: 200, x: 0, y: 0};
var velocity = {gravity: 1, x: 3, y: -20};

// Klaviaturos knopkes
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

start = function () {
	pika.x = canvas.width / 2;
	pika.y = 500;
    spawn();
    themeSong.play();
};

spawn = function() {
    cupcake.x = Math.random() * canvas.width;
	cupcake.y = -100;
    goingDown();
}

goingDown = function() {
    if (cupcake.y >= 420) {
        spawn();
    }
    cupcake.y += cupcake.speed / 100;
}

jumpRight = function() {
    if (pika.y <= 500 ) {
        velocity.y += velocity.gravity;
        if (jumpRightCheck) {
            pika.x += velocity.x;    
        } else {
            pika.x -= velocity.x;
        }
        pika.y += velocity.y;
        if (jumpRightCheck) {
            pikachuImg.src = arrayPikaRunRight[3];
        } else {
            pikachuImg.src = arrayPikaRunLeft[3];
        }
        }
}

velocityReset = function() {
    velocity.x = 3;
    velocity.y = -20;
}

spaceCheck = function(boolean) {
    if (boolean) {
        jumpRight();
    }
}

timer = function() {
    time--;
}

// Judinam pikachu ir renkam keksus
update = function (timeDiff) {
	if (37 in keysDown) { // I kaire
		pika.x -= pika.speed * timeDiff;
        jumpRightCheck = false;
	}
	if (39 in keysDown) { // I desine
		pika.x += pika.speed * timeDiff;
        jumpRightCheck = true;
	}
    if (32 in keysDown) { //Suolis
        spaceCheck(true);
    }
	if (pika.y - 100 <= cupcake.y) {
        if (pika.x - cupcake.x <= 150 && pika.x - cupcake.x >= 20) {
            spawn();
		    score++;
            nomFX.play();
        }
	}
    if (pika.y < 500) {
        jumpRight();
    }
    if (pika.y > 500) {
        pika.y = 500;
        velocityReset();
    }    
};


render = function () {
    // Render viska
    ctx.drawImage(bgImage, 0, 0);
	ctx.drawImage(pikachuImg, pika.x, pika.y);
    ctx.drawImage(cupcakeImg, cupcake.x, cupcake.y);
	// Taskai
	ctx.fillStyle = "white";
	ctx.font = "20px Helvetica";
	ctx.fillText("Score: " + score, 32, 32);
    // Timeris
    ctx.fillStyle = "white";
	ctx.font = "20px Helvetica";
	ctx.fillText("Time: " + time, 350, 32);
};

// The main game loop
main = function () {
    if (gameCheck) {
       var now = Date.now();
	   var timeDifference = now - then;
	   update(timeDifference / 1000);
	   render();
	   then = now;
       if (time <= 0) {
            gameOver();
    }
	requestAnimationFrame(main); //60 fps (Pagal refresh rate?)    
    }
	
};

gameOver = function(){
    gameCheck = false;
    ctx.clearRect(0, 0, 1280, 720);
    ctx.drawImage(gameOverImg, 0, 0);
    ctx.fillStyle = "black";
	ctx.font = "40px Helvetica";
	ctx.fillText("Score: " + score, 450, 32);
    ctx.fillStyle = "black";
	ctx.font = "20px Helvetica";
	ctx.fillText("\u00A9 Evaldas", 750, 600);
     
    pikaFX.play();
}

// Startas
then = Date.now();
start();
main();
