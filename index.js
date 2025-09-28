// all HTML elememts
let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");

let hrs = 0;
let mins = 0;
let secs = 0
let running = false;
let interval = undefined

// declaring all my functions


const timerFormat = ()=>{
    // returns the value
    return num < 10 ? "0" + num : num;

}

const timerUpdate = ()=>{
    timer.textContent = 
    `${timerFormat(hr)}: ${timerFormat(mins)} : ${timerFormat(secs)}}`

}
 

const handleStartBtn = () => {
  startBtn.textContent = startBtn.textContent === "Start" ? "Stop" : "Start";
   timer.textContent = "Started....";
};

// change text



const handleResetBtn = () => {
  timer.innerText = "00:00:00";
  startBtn.textContent = "Start";
};


startBtn.addEventListener("click", handleStartBtn);
resetBtn.addEventListener("click", handleResetBtn);
