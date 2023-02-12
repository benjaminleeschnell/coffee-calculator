const fa = document.getElementById('fa');

fa.addEventListener('input', function (evt) {
    let fav = fa.value;
    let grounds = fav * 21 / 12;
    let wa = fav * 340 / 12;
    let pu = wa / 3;

    say(grounds, wa, pu);
});

function say(grounds, wa, pu) {
    const groundsparagraph = document.getElementById('grounds');
    groundsparagraph.innerText = grounds.toFixed(0);

    const water = document.getElementById('water');
    water.innerText = Math.round(wa / 10) * 10;

    const pulses = document.getElementById('pulses');
    let pu1 = Math.round(pu / 10) * 10;
    pulses.innerHTML = "<span>" + pu1 + "<br>" + pu1 * 2 + "<br>" + Math.round(wa / 10) * 10; 

}

// Get the elements for the start, pause, and reset buttons and the timer display
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");

let running = false;
let interval;
let time = 0;

// Function to format the time in minutes and seconds
function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return `${minutes}:${seconds}`;
}

// Function to start the timer
function startTimer() {
  if (!running) {
    running = true;
    interval = setInterval(() => {
      time++;
      timerDisplay.innerHTML = formatTime(time);
    }, 1000);
  }
}

// Function to pause the timer
function pauseTimer() {
  if (running) {
    running = false;
    clearInterval(interval);
  }
}

// Function to reset the timer
function resetTimer() {
  pauseTimer();
  time = 0;
  timerDisplay.innerHTML = time;
}

// Add event listeners to the buttons to call the start, pause, and reset functions
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
