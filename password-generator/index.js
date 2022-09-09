const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generate1 = document.getElementById("password-1");
const generate2 = document.getElementById("password-2");

// let passwordLength = 15

function generatePassword() {
    let password1 = ""
    let password2 = ""
    for (let i = 0; i < 15; i++) {
        let randomChar = 0
        randomChar = getRandomChar()
        password1 += characters[randomChar]
        generate1.textContent = password1
    }
    
    for (let i = 0; i < 15; i++) {
        let randomChar = 0
        randomChar = getRandomChar()
        password2 += characters[randomChar]
        generate2.textContent = password2
    }
}

function getRandomChar() {
    return Math.floor(Math.random() * characters.length)
}

console.log(Math.floor(Math.random() * characters.length))
console.log(characters.length)