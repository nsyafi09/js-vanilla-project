

const count = document.getElementById("counter");
const value = document.querySelector("#counter");
const btnUp = document.getElementById("increase");
const btnDown = document.getElementById("decrease");

// Hell yeah
let counter = 0;
console.log(count);

btnDown.addEventListener('click', function() {
    counter--;
    count.textContent = counter;
    if (counter < 0) {
        value.style.color = "pink";
    }
    if (counter === 0) {
        value.style.color = "white";
    }
})

btnUp.addEventListener('click', function() {
    counter++;
    count.innerText = counter;
    if (counter > 0) {
        value.style.color = "lime";
    }
    if (counter === 0) {
        value.style.color = "white";
    }
})




// Creating Function for Increase





console.log(count)