export default 'timer.js';
import './howler.js';

let secondsSet; //время в сек. задает клиент в поле формы
let idInterval; //id временного интервала для его остановки
let secondsFinal; //время для отсчета таймера
//звук будильника
const alarmMain = new Howl({
    src: ['./sounds/alarm-clock-beep-1_zjgin-vd.mp3']
});
const ticTac = new Howl({
    src: ['./sounds/tikane.mp3']
});

//шаблон вставки таймера в hlml документ 
let templateTimer = `
    <div id="timerblock" class="header1 hidden">
        <div class="timer">
            <p>Задайте время в секундах и нажмите СТАРТ:</p>
            <input type="text" id="seconds">
            <p>обратите внимение, здесь предусмотрена примитивная проверка при вводе и не надо нажимать СТОП больше одного раза, пока я не даделаю отмену обработки события...</p>
            <button id="start" class="button button_green">СТАРТ</button>
            <button id="stop" class="hidden button button_red">СТОП</button>
            <p id="time-left"></p>
        </div>      
        <div class="clock">
            <div id="clock" class="arrow"></div>
            <div class="border"></div>
        </div>
    </div>
`;

//вставляем разметку в html
let timer = document.querySelector("body");
timer.insertAdjacentHTML("beforeend", templateTimer);

let arrow = document.querySelector("#clock");//стрелка
let timeLeft = document.querySelector("#time-left");//обратный отсчет

//задание времени таймера, отслеживаем форму
let seconds = document.querySelector("#seconds");
seconds.addEventListener("input", (e) => {
    secondsSet = e;
    //console.log(secondsSet.target.value);
});

//СТАРТ и СТОП таймера
let startTimer = document.querySelector("#start");
let stopTimer = document.querySelector("#stop");

startTimer.addEventListener("click", () => {
    if (secondsSet) {
        secondsFinal = parseInt(secondsSet.target.value)//без проверки на неправильный ввод!
        secondsSet.target.value = "";//очистка поля ввода секунд
        console.log('задано секунд', secondsFinal);
    }
    if (secondsFinal) {
        timeRun(); //таймер начинает отсчет
        startTimer.classList.add("hidden");
        stopTimer.classList.remove("hidden");
    }
});
stopTimer.addEventListener("click", (e) => {
    stopRun(idInterval);
});

/**
 * Функция поворота стрелки посекудно и показа оставшегося времени
 */
function timeRun() {
    let count = 0;
    idInterval = setInterval(() => {
        timeLeft.innerHTML = `${secondsFinal - count / 6}`;
        count += 6;
        let val = 'rotate: ' + count + 'deg';
        ticTac.play();
        arrow.setAttribute('style', val);
        if (count >= secondsFinal * 6) {
            stopRun(idInterval);
        }
    }, 1000);
}
/**
 * Функция остановки временного интервала
 * @param {*} id идентификатор интервала
 */
function stopRun(id) {
    alarmMain.play();
    clearInterval(id);
    setTimeout(() => {
        arrow.setAttribute('style', "rotate: 0deg");//установка стрелки в исходное положение
        timeLeft.innerHTML = "";//очистка поля обратного отсчета
        startTimer.classList.remove("hidden");
        stopTimer.classList.add("hidden");
    }, 2000);
}


