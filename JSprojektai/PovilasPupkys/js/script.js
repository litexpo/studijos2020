/* ==================== Globalūs kinatamieji ==================== */
var myIndex = 0;
var clicks = 0;
var correct = 0;
var sec = 0;
var theWord = 0;

var words = ["apple", "brain", "crown", "drama", "error", "force", "green", "heart", "image", "judge", "known", "learn", "magic", "night", "ocean", "phone", "queen", "radio", "score", "three", "urban", "virus", "white", "young"];
var word = words[Math.floor(Math.random() * words.length)]; //gauna random žodį iš masyvo

/* ==================== Judantis baneris index puslapį ==================== */
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 1000); // Paveikslėlio keitimosi laikas
}

/* ==================== Laikrodis index puslapį ==================== */
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

/* ==================== Įpsėjimo žinutė pereinant iš index į game puslapį ==================== */
function gamePage() {
    alert("The goal is to guess the word* \nControl with mouse \nGood luck!\n\n\n*All the words of five letters");
}

/* ==================== Pakeičia panaudotos raidės spalvą (pic) ==================== */
function changeLetter(a, x) {
    var img = document.getElementsByClassName("letter");
    var cl = document.getElementById("allClicks");
    if (img[a].src.indexOf("picture/letters/"+ x +".png") != -1){
        img[a].src = "picture/usedletters/"+ x +".png";
        clicks++;
        cl.innerHTML = "Total guesses: " + clicks;
        wordCheck(x);
    }
}

/* ==================== Patikrina ar pasirinkta raidė yra žodyje ==================== */
wordCheck = function(x) {
    var card = document.getElementsByClassName("card");
    var rcl = document.getElementById("correctClicks");
    var found = 0;
    for (i = 0; i < word.length; i++){
        if (word[i] === x){
            card[i].src = "picture/faceup/"+ x +".png";
            found = 1;
            theWord = theWord + 1;
        }
    }
    if (Boolean(found)){
            correct++;
            rcl.innerHTML = "Correct guesses: " + correct;
    }
    localStorage.setItem("word", word);
    endPage(x);
}

/* ==================== Jeigu atspėjamas žodis pereina į end puslapį ==================== */
endPage = function(){
    if (theWord == 5){
        collect();
        window.location.href = "end.html";
    }
}

/* ==================== Surenka reikšmes kurių reikės end puslapį ==================== */
collect = function() {
    var ac = document.getElementById("allClicks").innerHTML;
    var rc = document.getElementById("correctClicks").innerHTML;
    var t = document.getElementById("timer").innerHTML;
    localStorage.setItem("all", ac);
    localStorage.setItem("corr", rc);
    localStorage.setItem("time", t);
}

/* ==================== Sudeda gautas reikšmes end puslapį ==================== */
function endText() {
    var a = localStorage.getItem("all");
    var c = localStorage.getItem("corr");
    var t = localStorage.getItem("time");
    document.getElementById("ok2").innerHTML = localStorage.getItem("word");
    document.getElementById("total").innerHTML = localStorage.getItem("all");
    document.getElementById("corrClicks").innerHTML = localStorage.getItem("corr");
    document.getElementById("timeSpent").innerHTML = localStorage.getItem("time");
}

/* ==================== Paleidžia funkcijas užsikrovus index puslapiui ==================== */
function start(){
    carousel();
    startTime();
}

/* ==================== Pakeičia footer texto spalvą ==================== */
function changeColor() {
    var ft = document.getElementsByClassName("ftr");
    ft[0].style.color = "blue";
}

/* ==================== Pakeičia footer texto spalvą ==================== */
function resetColor() {
    var ft = document.getElementsByClassName("ftr");
    ft[0].style.color = "black";
}