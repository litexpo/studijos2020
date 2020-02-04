//Rita Lukosiunaite, ZP18=3, 2019
// Masyvas kortelems saugoti.
var Cards = ["fa fa-facebook", "fa fa-instagram", "fa fa-instagram", "fa fa-twitter", "fa fa-youtube", "fa fa-youtube", "fa fa-google", "fa fa-google", "fa fa-pinterest", "fa fa-pinterest", "fa fa-linkedin", "fa fa-facebook", "fa fa-linkedin", "fa fa-reddit", "fa fa-reddit", "fa fa-twitter"];
// Tuscias masyvas, i kuri isikels atverstos korteles.
var OpenCards = [];
//Tuscias masyvas kuriame saugomos sumaisytos korteles.
var shuffleCards = [];
var tilesFlipped = 0;
var numOfmoves = 0;

// Korteliu maisymas.
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
shuffleCards = shuffle(Cards); // Sumaisytu korteliu nurodymas, jog jos bus saugomos nurodytame masyve.

// JS laiko skaiciavimui.
var clearTime;
var seconds = 0,
    minutes = 0,
    hours = 0;
var secs, mins, gethours;

function startWatch() {
    // Sekundziu perejimas i minutes.
    if (seconds === 60) {
        seconds = 0;
        minutes = minutes + 1;
    }
    // Vienzenkliu sekundziu, minuciu ir valandu pavertimas dvizenkliais.
    mins = (minutes < 10) ? ('0' + minutes + ': ') : (minutes + ': ');
    // Minuciu perejimas i valandas.
    if (minutes === 60) {
        minutes = 0;
        hours = hours + 1;
    }
    gethours = (hours < 10) ? ('0' + hours + ': ') : (hours + ': ');
    secs = (seconds < 10) ? ('0' + seconds) : (seconds);

    var time = gethours + mins + secs;
    $('.container').find('.timer').html(time);
    seconds++;
    // Is naujo nustatymas laikrodzio.
    clearTime = setTimeout("startWatch( )", 1000);
}
// Laiko skaiciavimo pradejimas.
function startTime() {
    if (seconds === 0 && minutes === 0 && hours === 0) {
        startWatch();
    }
}

// Laiko sustabdymas ir fiksavimas, kuris naudojamas issokanciame lange.
function stopTime() {
    if (seconds !== 0 || minutes !== 0 || hours !== 0) {
        var time = gethours + mins + secs;
        $('.container').find('.timer').html(time);
        //Atliktu ejimu ir laiko parodymas galutineje lenteleje.
        var MovesModalElem = $('.modal-element').eq(1);
        var TimerModalElem = $('.modal-element').eq(0);
        $('.moves').clone().appendTo(MovesModalElem);
        $('.timer').clone().appendTo(TimerModalElem);
        clearTimeout(clearTime);
    }
}

// Korteliu sukurimas.
$('.container').append('<ul class="deck"></ul>');
for (var i = 0; i < Cards.length; i++) {
    $('.deck').prepend('<li class="card"></li>');
}
$('.card').prepend('<i></i>');

for (var i = 0; i < Cards.length; i++) {
    $('.card').eq(i).find('i').addClass(shuffleCards[i]);
}

// Restarto mygtukas pagrindiniame puslapyje.
$('.restart').click(function () {
    location.reload();
});

//Korteliu apvertimas ir sutapimas arba ne.
$('.deck').on('click', '.card', function (event) {
    //    Zaidimo pradzia, paspaudus ant korteles pradedamas skaiciuoti laikas.
    startTime();
    //Paspaudus tik ant korteles ji yra verciama ir apverciama viena kortele po paspaudimo.
    if ($(this).attr('class') === 'card' && OpenCards.length < 2) {
        //Korteles ikelimas i atidarytu korteliu masyva.
        if (OpenCards.length === 0) {
            $(this).toggleClass('open');
            OpenCards.push($(this).children().attr('class'));
        }
        //Vienodu korteliu ieskojimas, joms sutapus, jos lieka apverstos.
        else if (OpenCards.length === 1) {
            $(this).toggleClass('open');
            OpenCards.push($(this).children().attr('class'));
            if (OpenCards[0] === OpenCards[1]) {
                $('.card').filter($('.open')).toggleClass('open match');
                tilesFlipped = tilesFlipped + 2;
                numOfmoves = numOfmoves + 1;
                $('.moves').text(numOfmoves);
                OpenCards = [];
            } else {
                // Nesutapus dviems kortelems, jos apverciamos atgal.
                function flipBack() {
                    $('.card').filter($('.open')).toggleClass('open');
                    OpenCards = [];
                    numOfmoves = numOfmoves + 1;
                    $('.moves').text(numOfmoves);
                }
                setTimeout(flipBack, 600);
            }
        }
        if (tilesFlipped === Cards.length) {
            stopTime();
            $('.modal').css('display', 'block');
        }

    }
});
//Zaisti dar karta mygtuko funkcija.
function again() {
    window.location.reload(false);
}
