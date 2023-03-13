function removeFadeOut(el, speed) {
  let seconds = speed / 1000;
  el.style.transition = "opacity " + seconds + "s ease";

  el.style.opacity = 0;
  setTimeout(function () {
    el.parentNode.removeChild(el);
  }, speed);
}

setTimeout(() => {
  removeFadeOut(document.getElementById("FadeOutScreen"), 2000);

  for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].removeAttribute("disabled");
  }
}, 5000);

const Buttons = document.querySelectorAll("button.ButtonSelect");
const buttonDiv = document.getElementsByClassName("buttons");

let HumanScore = document.getElementById("HumanScore");
let StarmanScore = document.getElementById("StarmanScore");
let StarmanPNG = document.getElementById("StarmanPNG");
let ScreenDamage = document.getElementById("ScreenDamage");

const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");

let HumanScoreShake = () => {
  HumanScore.classList.add("shake", "shake-constant");
  HumanScore.style.color = "red";
  ScreenDamagePoint();
  Buttons.forEach((element) => {
    element.classList.add("shake", "shake-constant");
  });
  setTimeout(() => {
    ScreenDamage.removeAttribute("style");
  }, 200);
  setTimeout(() => {
    HumanScore.classList.remove("shake", "shake-constant");
    HumanScore.style.color = "azure";
    Buttons.forEach((element) => {
      element.classList.remove("shake", "shake-constant");
    });
  }, 500);
};

let StarmanScoreShake = () => {
  StarmanScore.classList.add("shake", "shake-constant");
  StarmanPNG.classList.add("shake", "shake-constant");
  StarmanScore.style.color = "red";

  setTimeout(() => {
    StarmanScore.classList.remove("shake", "shake-constant");
    StarmanPNG.classList.remove("shake", "shake-constant");
    StarmanScore.style.color = "azure";
  }, 500);
};

let ShakeifEqual = () => {
  HumanScore.style.color = "rgb(102, 204, 255)";
  StarmanScore.style.color = "rgb(102, 204, 255)";

  setTimeout(() => {
    StarmanScore.style.color = "azure";
    HumanScore.style.color = "azure";
  }, 500);
};

let ScreenDamageStyle = `
    position: relative;
    height: 100%;
    background-color: rgba(255, 0, 0, 0.5);
    z-index: 19;
`;

let ScreenDamagePoint = () => {
  ScreenDamage.style = ScreenDamageStyle;
};
let BackgroundStyleText = `
background-image: url(./assets/images/You_lost.svg);
background-repeat: repeat;
  background-position:0% 0%, 40px 40px;
  background-size:80px;
  min-height:100vh;
`;

let delExplosion = () => {
  setTimeout(() => {
    removeFadeOut(document.getElementById("StarmanPNG"), 2000);
  }, 2000);
};

let YouWon = () => {
  setTimeout(() => {
    const body = document.querySelector("body");
    const YouWinText = body.appendChild(document.createElement("p"));

    YouWinText.setAttribute("id", "YouWinText");
    YouWinText.textContent = "You won the game!";

    let YouWinTextStyle = `
    position: relative;
    height:100vh;
    margin: 0 auto;
    color: azure;
    font-size: 100px;
    font-family: "Earthbound", sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    }`;

    document.getElementById("YouWinText").style = YouWinTextStyle;
    document.querySelector("body").setAttribute("onclick", "window.location.reload()");

  }, 4500);
};

let finalScore = () => {
  if (playerScore > computerScore) {
    document.getElementById("StarmanPNG").src = "assets/images/explosion.gif";
    document.getElementById("StarmanPNG").style = "mix-blend-mode: screen";
    delExplosion();
    YouWon();
  } else {
    let bodyelement = document.querySelector("body");
    let child = bodyelement.lastElementChild;
    while (child) {
      bodyelement.removeChild(child);
      child = bodyelement.lastElementChild;
    }
    document.querySelector("body").style = BackgroundStyleText;
    setTimeout(() => {
      document.querySelector("body").setAttribute("onclick", "window.location.reload()");
    }, 5000);
  }
};

let playerSelection = "";
let computerSelection = "";

let playerScore = 0;
let computerScore = 0;

let computerRandomSel = "";

let Round = 0;

let playRound = () => {
  if (Round >= 9) {
    Round++;
    console.log(`Round ${Round}!`);
    Buttons.forEach((el) => el.remove());
    finalScore();
  } else {
    Round++;
    console.log(`Round ${Round}!`);
  }
};

let RandomRPS = () => {
  const RPS = ["ROCK", "PAPER", "SCISSORS"];
  const computerRandom = Math.floor(Math.random() * RPS.length);

  switch (computerRandom) {
    case 0:
      computerRandomSel = "Rock";
      break;
    case 1:
      computerRandomSel = "Paper";
      break;
    case 2:
      computerRandomSel = "Scissors";
      break;
  }
  computerSelection = computerRandomSel;
  console.log(`Computer choose ${computerRandomSel}!`);
};

let rpsCondition = () => {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    //alert("You won this round!");
    playerScore++;
    StarmanScoreShake();
  } else if (playerSelection === computerSelection) {
    //alert ("You both are tied!");
    ShakeifEqual();
  } else {
    //alert ("The machine won this round!");
    computerScore++;
    HumanScoreShake();
  }
};

// Increment a score value by one every round via text content

let changeScore = () => {
  HumanScore.textContent = `Human: ${playerScore}`;
  StarmanScore.textContent = `Starman: ${computerScore}`;
};

Rock.addEventListener("click", () => {
  playerSelection = "Rock";
  playRound();
  console.log(`Player choose ${playerSelection}!`);
  RandomRPS();
  rpsCondition();
  changeScore();
});

Paper.addEventListener("click", () => {
  playerSelection = "Paper";
  playRound();
  console.log(`Player choose ${playerSelection}!`);
  RandomRPS();
  rpsCondition();
  changeScore();
});

Scissors.addEventListener("click", () => {
  playerSelection = "Scissors";
  playRound();
  console.log(`Player choose ${playerSelection}!`);
  RandomRPS();
  rpsCondition();
  changeScore();
});
