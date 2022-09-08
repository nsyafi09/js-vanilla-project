// The logic is to draw random cards to get to 21

// 1. Getting necessary elements
let message = document.getElementById("message");
let sum = document.getElementById("sum");
let cards = document.getElementById("cards");
let startButton = document.getElementById("start-game");

// console.log(startButton);
// Game logic prep:
let hasBlackjack = false;
let isAlive = false;
let updateMessage = "";

let hands = []
let sumCard = 0

// 1.25. Creating OBJECT for player
let player = {
    name: "M",
    chips: 150
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;



// 1.5. RandomCard function to generate cards
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    // if 1 = 11
    // if 11, 12, 13 = 10
    if (randomCard == 1) {
        return 11;
    } else if (randomCard > 10) {
        return 10;
    } else {
         return randomCard;
    }
    // return randomCard;
}


// 2. Logic of gameplay if below 21 to draw more, if more than 21 to lose, 21 to win
function initializeGame() {
    cards.textContent = "";
    // Use array to display cards
    for (i = 0; i < hands.length; i++) {
        cards.textContent += hands[i] + " ";
    }

    sum.textContent = "Sum: " + sumCard;

    if (sumCard == 21) {
        updateMessage = "BLACKJACK! Congratulations!";
        hasBlackjack = true;
    } else if (sumCard < 21) {
        updateMessage = "Draw a new card?";
    } else {
        updateMessage = "You are out!";
        isAlive = false;
    }
    message.textContent = updateMessage;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    hands = [firstCard, secondCard];
    sumCard = hands[0] + hands[1];

    startButton.textContent = "RESTART GAME";

    initializeGame();
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let drawCard = getRandomCard();
        sumCard += drawCard;

        hands.push(drawCard);
        initializeGame();
    }
}