let gridSize;
let array;
let arrayObject;

// checks how many buttons are opened (0, 1 or 2)
let opened;

// opened button numbers
let num1;
let num2;

// for timing the game
let start;
let end;

// handles grid size selection
function selected(selection) {
    opened = 0;
    gridSize = selection;
    array = fillArray(gridSize);
    shuffle(array);
    arrayObject = convertToObjectArray(array);
    drawGrid(gridSize);
    start = new Date().getTime();
}

// removes an element randomly and pushes it to the end of an array 1000 times
function shuffle() {
    for (i = 0; i < 1000; i++) {
        array.push(array.splice(Math.floor(Math.random() * gridSize), 1)[0]);
    }
    return array;
}

// fills an array with number pairs
function fillArray() {
    array = [];
    let a = 1;
    for (i = 0; i < gridSize * gridSize; i += 2) {
        array[i] = a;
        array[i + 1] = a;
        a++;
    }
    return array;
}

// converts array to an object array. Just because I need to use an object
function convertToObjectArray(array) {
    arrayObject = [];
    for (i = 0; i < gridSize * gridSize; i++) {
        arrayObject[i] = {isOpened: false, value: array[i]};
    }
    return arrayObject;
}

// draws the game grid
function drawGrid() {
    let doc = document.getElementById("grid");
    doc.innerHTML = "";
    for (i = 0; i < gridSize; i++) {
        doc.innerHTML += "<div>";
        for (j = 0; j < gridSize; j++) {
            doc.innerHTML += "<button class=\"activeButton\" id=\"button" + (i * gridSize + j) + "\" onclick=\"pressed(" + (i * gridSize + j) + ")\" />";
        }
        doc.innerHTML += "</div>";
    }
}

// handles button presses. If two buttons are open, then checks their values.
function pressed(number) {
    switch (opened) {
        case 0:
            num1 = number;
            openButton(num1);
            opened++;
            break;
        case 1:
            num2 = number;
            openButton(num2);
            opened++;
            gameEnded();
            break;
        case 2:
            opened = 1;
            checkGuess(num1, num2);
            num1 = number;
            openButton(num1);
            break;
    }
}

// opens the button
function openButton(number) {
    $("#button" + number).replaceWith("<button class=\"disabledButton\" disabled id=\"disabled" + number + "\">" + arrayObject[number].value + "</button>");
    arrayObject[number].isOpened = true;
}

// closes the button
function closeButton(number) {
    $("#disabled" + number).replaceWith("<button class=\"activeButton\" id=\"button" + number + "\" onclick=\"pressed(" + number + ")\" />");
    arrayObject[number].isOpened = false;
}

// checks the values of the opened buttons. If they are not equal - closes buttons.
function checkGuess(num1, num2) {
    if (arrayObject[num1].value != arrayObject[num2].value) {
            closeButton(num1);
            closeButton(num2);
    }
}

// checks if the grid is fully opened
function gameEnded() {
    for (i = 0; i < gridSize * gridSize; i++) {
        if (arrayObject[i].isOpened == false) {
            return false;
        }
    }
    end = new Date().getTime();
    alert("You won!\nCompleted in " + ((end - start) / 1000) + " seconds");
}

function changeColor() {
    document.getElementById("title").setAttribute("class", "green");
}

function changeBack() {
    document.getElementById("title").setAttribute("class", "");
}