let scoreHome = document.getElementById("scorehome")
let scoreGuest = document.getElementById("scoreguest")
let newGameSound = document.getElementById("new-game-sound")
let countHome = 0;
let countGuest = 0;
function add1Home(){
    countHome += 1;
    scoreHome.textContent = countHome;
}

function add2Home(){
    countHome += 2;
    scoreHome.textContent = countHome;

}

function add3Home(){
    countHome += 3;
    scoreHome.textContent = countHome;

}

function add1Guest(){
    countGuest += 1;
    scoreGuest.textContent = countGuest;
}

function add2Guest(){
    countGuest += 2;
    scoreGuest.textContent = countGuest;
}

function add3Guest(){
    countGuest += 3;
    scoreGuest.textContent = countGuest;
}

function newGame(){
    countGuest = 0;
    scoreGuest.textContent = countGuest;
    countHome = 0;
    scoreHome.textContent = countHome;

}
