console.log("hello world");

const timerform = document.getElementById("timer form");
const timerRest = document.getElementById("timer RestS");

timerForm.addEventListener("submit", formHandler);

function formHandler() {
    event.preventDefault();
    const intervalValue = +document.getElementById("interval").value;
    let intervalId;
    let newInterval = intervalValue;
    if (typeof intervalValue === "number" && intervalValue > 0) {
        intervalId = setInterval(() => {
            if (newInterval > 0) {
                newInterval--;
                timerRest.innerText = `${newInterval} s.`;
                console.log("newInterval: ", newInterval);
            } else {
                console.log("clearInterval");
                clearInterval(intervalId);
            }
        }, 1000);
    }
}
