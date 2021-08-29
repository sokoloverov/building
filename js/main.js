import './datamizer.js';
import './timer.js';


//выбор приложения
const TIMER = document.querySelector("#timer");
const DATAMIZER = document.querySelector("#calendar");

TIMER.addEventListener('click', () => {
    document.querySelector("#timerblock").classList.remove("hidden");
    document.querySelector("#datecalc").classList.add("hidden");
});
DATAMIZER.addEventListener('click', () => {
    document.querySelector("#datecalc").classList.remove("hidden");
    document.querySelector("#timerblock").classList.add("hidden");
});