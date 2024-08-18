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
  displayNumber.textContent = input.value;
  if (trial === 0) {
    message.textContent = "🎉 Correct number";
    maxScore = Math.max(maxScore, trials);
    highScore.textContent = maxScore;
  } else if (trial < 0) {
    message.textContent = "📉 Too low";
    trials--;
  } else {
    message.textContent = "📈 Too high";
    trials--;
  }
  score.textContent = trials;
}
function reset() {
  target = Math.trunc(Math.random() * 20) + 1;
//   maxScore = Math.max(maxScore, trials);
  trials = 20;
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
