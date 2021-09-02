import './datamizer.js';
import './timer.js';
import bigClock from '../img/1730296.jpeg';
import '../style/main.scss';

const pic = document.createElement('img');
pic.src = bigClock;
pic.classList.add("tictac", "header1");

pic.onload = () => {
    document.body.prepend(pic);
}


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

