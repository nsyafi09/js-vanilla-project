const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const password1El = document.getElementById("password-1");
const password2El = document.getElementById("password-2");

// Slider element
const slider = document.getElementById("slider");
let sliderNumber = document.getElementById("sliderNumber");

let passwordLength = 8


function generatePassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = 0
        randomIndex = getRandomIndex()
        password += characters[randomIndex]
    }
    return password
}

function getRandomIndex() {
    return Math.floor(Math.random() * characters.length)
}

function getGeneratePassword() {
    password1El.innerHTML = generatePassword()
    password2El.innerHTML = generatePassword()
}

// Create an input event listener for slider element
slider.addEventListener("input", function () {
    // Display the value of the slider
    sliderNumber.textContent = `${slider.value}`;
    // Assign to passwordLength new value
    passwordLength = slider.value;
  });


console.log(Math.floor(Math.random() * characters.length))
console.log(characters.length)