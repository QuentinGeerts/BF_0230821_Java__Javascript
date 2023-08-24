const startTimeOutBtn = document.getElementById("startTimeOut");
const stopTimeOutBtn = document.getElementById("stopTimeOut");
const dialogTimeOut = document.getElementById('dialogTimeOut');

const startIntervalBtn = document.getElementById("startInterval");
const stopIntervalBtn = document.getElementById("stopInterval");
const dialogInterval = document.getElementById('dialogInterval');

startTimeOutBtn.addEventListener('click', startTimeOut);
stopTimeOutBtn.addEventListener('click', stopTimeOut);

startIntervalBtn.addEventListener('click', startInterval);
stopIntervalBtn.addEventListener('click', stopInterval);

let countTimeOut = 0;
let countInterval = 0;

let timerTimeOut;
let timerInterval;

function startTimeOut () {
    if (timerTimeOut) return;

    timerTimeOut = setTimeout(() => { 
    
        dialogTimeOut.innerText = "Généré après une seconde. " + ++countTimeOut;
        timerTimeOut = undefined;
    }, 1000);

    console.log("Bouh !");
}

function stopTimeOut () {
    clearTimeout(timerTimeOut);
    timerTimeOut = undefined;
    dialogTimeOut.innerText = "Timer supprimé"; 
}

function startInterval () {
    if (timerInterval) return;

    timerInterval = setInterval(() => { 
    
        dialogInterval.innerText = "Généré après une seconde. " + ++countInterval; 
    }, 1000);

    console.log("Bouh !");
}

function stopInterval () {
    clearInterval(timerInterval);
    timerInterval = undefined;
    dialogInterval.innerText = "Timer supprimé"; 
}