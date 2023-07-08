const stopWatchStart = document.querySelector('.stopwatch #start');
const stopWatchStop = document.querySelector('.stopwatch #stop');
const stopWatchReset = document.querySelector('.stopwatch #reset');
const lapBtn = document.querySelector('.stopwatch #lap');
const stopWatch = document.querySelector('.stopwatch #stopwatch');

const lap = document.querySelector('.laps #laps');
const time = document.querySelector('.current-time');
//Clock
setInterval(() => {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString().slice(0, 5) + ' ' + date.toLocaleTimeString().slice(9, 11);
}, 1000);

//StopWatch
let started = false;
let intervalId = null;
let count = 0;
stopWatchStart.addEventListener('click', () => {
    if (started) return;
    started = true;
    intervalId = setInterval(() => {
        count++;
        stopWatch.value = count + "ms";
    }, 1);
});

stopWatchStop.addEventListener('click', () => {
    started = false;
    clearInterval(intervalId);
});

stopWatchReset.addEventListener('click', () => {
    started=false;
    clearInterval(intervalId);
    stopWatch.value = "0ms";
    count = 0;
    lap.innerHTML = "";
});

lapBtn.addEventListener('click', () => {
    const lapLi = document.createElement('li');
    lapLi.innerHTML = stopWatch.value;
    lap.appendChild(lapLi);
});

//Timer
const timerStart = document.querySelector('.timer #start');
const timerPause = document.querySelector('.timer #pause');
const timerReset = document.querySelector('.timer #reset');