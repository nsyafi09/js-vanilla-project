// The logic is to draw random cards to get to 21

// 1. Getting necessary elements
let message = document.getElementById("message");
let sum = document.getElementById("sum");
let cards = document.getElementById("cards");
// Game logic prep:
let hasBlackjack = false;
let isAlive = true;
let updateMessage = "";

let firstCard = 1;
let secondCard = 5;
let hands = [firstCard, secondCard]
let drawCard = 0;
let sumCard = hands[0] + hands[1];


// 2. Logic of gameplay if below 21 to draw more, if more than 21 to lose, 21 to win
function blackjackGame() {
    cards.textContent = hands[0] + " " + hands[1];
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
    blackjackGame();
}

function newCard() {
    drawCard = 9;
    sumCard += drawCard;

    hands.push(drawCard);
    blackjackGame();
}