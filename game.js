let currmario;
let currplant;
let score = 0;
let gameover = false;
// let audioele=new Audio('')
let theam = new Audio();

function start() {
  startgame();
  theam.src = "./audio/theme.mp3";
  theam.play();
}

function startgame() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    let board = document.getElementById("board");
    board.appendChild(tile);
    tile.addEventListener("click", setscore);
  }

  setInterval(setmario, 1500);
  setInterval(setplant, 2500);
  return;
}

function randNum() {
  let num = Math.floor(Math.random() * 9);
  return num;
}

function setmario() {
  if (gameover) {
    return;
  }
  if (currmario) {
    currmario.innerHTML = "";
  }
  let mario = document.createElement("img");
  mario.src = "./images/mario_PNG54.png";

  let num = randNum();
  if (currplant && currplant.id == num) {
    return;
  }
  currmario = document.getElementById(num);
  currmario.appendChild(mario);
}

function setplant() {
  if (gameover) {
    return;
  }
  if (currplant) {
    currplant.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src = "./images/piranha-plant.png";

  let num = randNum();
  if (currmario && currmario.id == num) {
    return;
  }
  currplant = document.getElementById(num);
  currplant.appendChild(plant);
}

// function play1() {
//   let audio;
//   audio.src = "./audio/";
//   audio.play();
//   return console.log("played");
// }

function setscore() {
  let audio = new Audio();
  if (gameover) {
    return;
  }
  if (this == currmario) {
    score += 10;
    let score1 = (document.getElementById("score").innerHTML =
      "Score: " + score.toString());
    audio.src = "./audio/jump.mp3";
  } else if (this == currplant) {
    let score2 = (document.getElementById("score").innerHTML =
      "GAME OVER: " + score.toString());
    audio.src = "./audio/gameOver.mp3";
    theam.pause();
    gameover = true;
  } else if (this != currmario) {
    let score3 = (document.getElementById("score").innerHTML =
      "GAME OVER: " + score.toString());
    audio.src = "./audio/gameOver.mp3";
    theam.pause();
    gameover = true;
  }
  audio.play();
}
