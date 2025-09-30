// targeting all HTML elememts in the documnet
let display = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");

//stopwatch state variables

let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;
let interval = null;

// updating timer
const updateTimer = () => {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
};

// start stopwatch
const startStopwatch = () => {
  startBtn.textContent = startBtn.textContent === "Start" ? "Stop" : "Start";

  // start timer
  if (!isRunning) {
    isRunning = true;
    // run the run repeatedly every 1sec
    interval = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateTimer();
    }, 1000);
  }

  // stop timer
  else {
    clearInterval(interval);
    isRunning = false;
  }
};

// reset timer
const resetTimer = () => {
  clearInterval(interval);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimer();
  startBtn.textContent = "Start";
};

// event listeners
startBtn.addEventListener("click", startStopwatch);
resetBtn.addEventListener("click", resetTimer);
