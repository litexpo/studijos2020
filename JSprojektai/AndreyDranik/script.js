// Žaidžiama iki taškų ribos
var taskuRiba = 30;


// Kauliukai
var dice1 = 0;
var dice2 = 0;
var diceOneImage, diceTwoImage;
var imgArray = [];
imgArray[0] = new Image();
imgArray[0].src = 'img/dice/dice-six-faces-one.png';
imgArray[1] = new Image();
imgArray[1].src = 'img/dice/dice-six-faces-two.png';
imgArray[2] = new Image();
imgArray[2].src = 'img/dice/dice-six-faces-three.png';
imgArray[3] = new Image();
imgArray[3].src = 'img/dice/dice-six-faces-four.png';
imgArray[4] = new Image();
imgArray[4].src = 'img/dice/dice-six-faces-five.png';
imgArray[5] = new Image();
imgArray[5].src = 'img/dice/dice-six-faces-six.png';


// Zaidejai
var player1 = {score: 0};
var player2 = {score: 0};

function start() {
    new Audio('audio/start.mp3').play();
    // Inicializuojam zaidejus
    player1.name = document.getElementById("name1").value;
    player2.name = document.getElementById("name2").value;
    player1.score = 0;
    player2.score = 0;

    // Perjungiam vaizdus
    document.getElementById('registration').style.display = 'none';
    document.getElementById('game').style.display = 'flex';

    // Uzpildom duomenis i zaideju korteles
    document.getElementById('player1').getElementsByClassName('playerName')[0].innerHTML = player1.name;
    document.getElementById('player2').getElementsByClassName('playerName')[0].innerHTML = player2.name;
    document.getElementById('player1').getElementsByClassName('score')[0].innerHTML = player1.score;
    document.getElementById('player2').getElementsByClassName('score')[0].innerHTML = player2.score;
    document.getElementById('dice1Container').style.display = 'none';
    document.getElementById('dice2Container').style.display = 'none';
}


// Vaskihop
var activePlayer;
var vaskihop = Math.floor((Math.random() * 6) + 1);
if (vaskihop % 2 === 0) {
    activePlayer = 2;
}
else {
    activePlayer = 1;
}

// Zaidejo keitimas
function activePlayer1() {
    activePlayer = 1;
    document.getElementById('player1').className = 'activeGamer';
    document.getElementById('player2').className = 'inactiveGamer';
}

function activePlayer2() {
    activePlayer = 2;
    document.getElementById('player2').className = 'activeGamer';
    document.getElementById('player1').className = 'inactiveGamer';
}

// Kvieciamas zaidejas pradeti zaidima
if (activePlayer === 1) {
    activePlayer1();
}
else {
    activePlayer2();
}

var canDrop = false;

// Sumaisom kauliukus
function roll() {
    new Audio('audio/roll.mp3').play();
    document.getElementById('dice1Container').style.display = 'none';
    document.getElementById('dice2Container').style.display = 'none';
    dice1 = Math.floor((Math.random() * 6) + 1);
    diceOneImage = imgArray[dice1 - 1].src;
    dice2 = Math.floor((Math.random() * 6) + 1);
    diceTwoImage = imgArray[dice2 - 1].src;
    canDrop = true;
}

// Ismetam kauliukus ir priskiriam zaidejui taskus
function drop() {
    if (player1.score < taskuRiba && player2.score < taskuRiba && canDrop === true) {
        new Audio('audio/drop.mp3').play();
        if (activePlayer === 1) {
            player1.score = player1.score + dice1 + dice2;
            canDrop = false;
            if (player1.score >= taskuRiba) {
                addResult(player1);
                getResults();
            }
            activePlayer2();
        }
        else if (activePlayer === 2) {
            player2.score = player2.score + dice1 + dice2;
            canDrop = false;
            if (player2.score >= taskuRiba) {
                addResult(player2);
                getResults();
            }
            activePlayer1();
        }
        document.getElementById('player1').getElementsByClassName('score')[0].innerHTML = player1.score;
        document.getElementById('player2').getElementsByClassName('score')[0].innerHTML = player2.score;
        if (dice1 !== 0 && dice2 !== 0) {
            document.getElementById('dice1').src = diceOneImage;
            document.getElementById('dice2').src = diceTwoImage;
            document.getElementById('dice1Container').style.display = 'block';
            document.getElementById('dice2Container').style.display = 'block';
        }


    }
}


// Rezultatai
var results = new Array();

// Konstruktorius, sukuria laimetojus
function Winner (player) {
    this.name = player.name;
    this.time = new Date();
}

// Funkcija prideda laimetoja i laimetoju masyva
function addResult(player) {
    var winner = new Winner(player);
    results.unshift(winner);
}

// Paslepia zaidimo ir rezultatu vaizdus
function hidegame() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    new Audio('audio/music.mp3').play();
}

// Ijungia zaidimo vaizda
function newGame() {
    new Audio('audio/music.mp3').play();
    document.getElementById('registration').style.display = 'block';
    document.getElementById('results').style.display = 'none';
}

// Ijungia rezultatu vaizda ir spausdina rezultatus
function getResults() {
    new Audio('audio/fanfare.mp3').play();
    document.getElementById('game').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    for (var i = 0; i < 11 && i < results.length; i++) {
        scoreField(i+1 ,results[i]);
    }
}

// Spausdina rezultata i eilute
function scoreField(place, user) {
    document.getElementById('score'+place+'').style.display = 'block';
    document.getElementById('score'+place+'').innerHTML = "<p>"+place+ ": "+user.name+" "+user.time.getFullYear() + "." +user.time.getMonth()+1+"." +user.time.getDate()+ " " +user.time.getHours()+":" +user.time.getMinutes()+"</p>";
}

// Pildom reikalavimus...
