const colors = ["green", "red", "aquamarine", "grey"];

// Setup: 
// Target button and color
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    // Goal: get random number betweeen 0-3 from the array colors
    const randomNumber = getRandomNumber();
    // Changing body style color
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    // Added color for the Color Text
    color.style.color = colors[randomNumber];

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}