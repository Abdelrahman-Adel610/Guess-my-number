"use strict";
/**********BUTTONS**********/
let againBtn = document.querySelector(".again-btn");
let checkBtn = document.querySelector(".check-btn");
/**********STATUS**********/
let displayNumber = document.querySelector(".ques-mark");
let message = document.querySelector(".message");
let input = document.querySelector("input");
/**********SCORE**********/
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
/**********INTERFACE**********/
let body = document.querySelector("body");
let displayNumberBox = document.querySelector(".ques-mark");
/**********VARIABLES**********/
let target = Math.trunc(Math.random() * 20) + 1;
let maxScore = 0;
let trials = 20;
/*******************************************/
/****************UTILITIES*****************/
function checkTrial() {
  return +input.value - target;
}
function updateInertface(trial) {
  if (trials) {
    if (trial === 0) {
      displayNumber.textContent = input.value;
      message.textContent = "🎉 Correct number";
      body.style.backgroundColor = "#22c55e";
      input.disabled = true;
      displayNumberBox.style.padding = "1.5rem 4.5rem";
      maxScore = Math.max(maxScore, trials);
      highScore.textContent = maxScore;
    } else if (trial < 0) {
      message.textContent = "📉 Too low";
      body.style.backgroundColor = "#e11d48";
      trials--;
    } else {
      message.textContent = "📈 Too high";
      body.style.backgroundColor = "#e11d48";
      trials--;
    }
    score.textContent = trials;
  }
  if (!trials) {
    message.textContent = "💥 You lost the game";
  }
}
function reset() {
  target = Math.trunc(Math.random() * 20) + 1;
  trials = 20;
  body.style.backgroundColor = "#222222";
  input.disabled = false;
  input.value = "";
  displayNumber.textContent = "?";
  message.textContent = "Start guessing...";
  highScore.textContent = maxScore;
  score.textContent = trials;
}
/*****************************************/
checkBtn.addEventListener("click", function () {
  if (!input.value) {
    message.textContent = "⛔ No input yet";
  } else {
    updateInertface(checkTrial());
  }
});
againBtn.addEventListener("click", function () {
  reset();
});
