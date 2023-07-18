console.log("hello world");

const timerForm = document.getElementById("timerForm");
const timerRestH = document.getElementById("timerRestH");
const timerRestM = document.getElementById("timerRestM");
const timerRestS = document.getElementById("timerRestS");
let intervalId;
let newInterval;
let isPaused = false;

timerForm.addEventListener("submit", formHandler);

function formHandler(event) {
    event.preventDefault();
    const intervalValue = +document.getElementById("interval").value;

    if (Number.isInteger(intervalValue) && intervalValue > 0) {
        newInterval = intervalValue;
        timerRestH.style.display = "none";
        timerRestM.style.display = "none";
        timerRestS.style.display = "inline";

        intervalId = setInterval(updateTimer, 1000);
        toggleStartPauseButton();
    }
}

function updateTimer() {
    if (!isPaused) {
        if (newInterval > 0) {
            newInterval--;
            displayTime(newInterval);
            console.log("newInterval:", newInterval);
        } else {
            console.log("clearInterval");
            clearInterval(intervalId);
            toggleStartPauseButton();
        }
    }
}

function displayTime(interval) {
    const hours = Math.floor(interval / 3600);
    const minutes = Math.floor((interval % 3600) / 60);
    const seconds = interval % 60;

    timerRestH.style.display = hours > 0 ? "inline" : "none";
    timerRestM.style.display = minutes > 0 ? "inline" : "none";

    timerRestH.textContent = `${hours} h.`;
    timerRestM.textContent = `${minutes} m.`;
    timerRestS.textContent = `${seconds} s.`;
}

function toggleStartPauseButton() {
    const startButton = document.getElementById("startButton");
    const pauseButton = document.getElementById("pauseButton");

    if (isPaused) {
        startButton.style.display = "none";
        pauseButton.style.display = "inline";
    } else {
        startButton.style.display = "inline";
        pauseButton.style.display = "none";
    }
}

function toggleTimer() {
    isPaused = !isPaused;
    toggleStartPauseButton();
}

document.getElementById("startButton").addEventListener("click", toggleTimer);
document.getElementById("pauseButton").addEventListener("click", toggleTimer);
