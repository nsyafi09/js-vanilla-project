// HOME and AWAY has different way to funtion

// HOME:
const homeScore = document.getElementById("home-score");

let homeCounter = 0;

function home1() {
    homeCounter += 1;
    homeScore.textContent = homeCounter;
}

function home2() {
    homeCounter += 2;
    homeScore.textContent = homeCounter;
}

function home3() {
    homeCounter += 3;
    homeScore.textContent = homeCounter;
}

// AWAY:
const awayScore = document.getElementById("away-score");
const awayBtns = document.querySelectorAll(".away");

let awayCounter = 0;

awayBtns.forEach(function (aBtn) {
    aBtn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains("plus1")) {
        awayCounter += 1;
      } else if (styles.contains("plus2")) {
        awayCounter += 2;
      } else {
        awayCounter += 3;
      }
      
      awayScore.textContent = awayCounter;
    });
});
