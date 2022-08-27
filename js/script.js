const wordEl = document.querySelector(".word");
const txtEl = document.querySelector(".text");
const scoreEl = document.querySelector(".score");
const timeEl = document.querySelector(".time");
const endGameEl = document.querySelector(".end-game-container");
const containerEl = document.querySelector(".container");
const settingsFormEl = document.querySelector(".settingsForm");
const difficultyEl = document.querySelector(".difficulty");

//random numbers

const words = [
  "sad",
  "happy",
  "angry",
  "cop",
  "police",
  "bomber",
  "dragon",
  "mafia",
  "sonic",
  "magician",
  "spellbook",
  "striker",
  "cloud",
  "wolf",
  "hunter",
  "frog",
  "metal",
  "ayuda",
  "carniceria",
  "moose",
  "invoker",
  "megaman",
  "overwatch",
  "spider",
  "melissa",
  "euphoria",
  "porwer",
  "dog",
  "administrator",
  "query",
  "noir",
  "penelo",
  "penguin",
  "pilot",
  "train",
  "kimiko",
  "frenchie",
  "wrench",
  "github",
  "heroku",
  "saitama",
  "sister",
  "hashtag",
  "typescript",
  "ajajajaja",
  "no",
];

//init variables
let randomWord;
let score = 0;
let time = 10;

//init difficulty level

let difficultyLevel = "easy";

//generate random words
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//add to DOM

function addWordDOM() {
  randomWord = getRandomWord();
  wordEl.innerHTML = randomWord;
}

addWordDOM();

//update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//update time

function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timerInterval);

    //game over
    gameOver();
  }
}

updateTime();

//start counting down

const timerInterval = setInterval(updateTime, 1000);

//typing function
txtEl.addEventListener("input", function (e) {
  const insertedTxt = e.target.value;
  if (insertedTxt === randomWord) {
    //change the word
    addWordDOM();
    //update score
    updateScore();
    //update time
    updateTime();
    e.target.value = "";

    if (difficultyLevel === "easy") {
      //adds 5s to the time
      time += 5;
    } else if (difficultyLevel === "medium") {
      //adds 3s to the time
      time += 3;
    } else if (difficultyLevel === "hard") {
      //adds 2s to the time
      time += 2;
    }

    updateTime();
  }
});

//game over
function gameOver() {
  //hide the form
  settingsFormEl.style.display = "none";
  containerEl.style.display = "none";

  endGameEl.innerHTML = `
    <p class="over">Game Over</p>
    <p>Your Score: <span class="score">${score} points on  ${difficultyLevel}</span></p>
    <button onclick="location.reload()" class="play-again-btn">Play Again</button>    
    `;
}

//difficult level fn
difficultyEl.addEventListener("change", function (e) {
  difficultyLevel = e.target.value;
});
