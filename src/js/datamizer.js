export default 'datamizer.js';

import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";


//шаблон вставки датамайзера в hlml документ 
let templateData = `
    <form id="datecalc" class="header1">
        <h3 class="header1">Калькулятор дат</h3>
        <label>
            <strong>Первая дата:</strong>
            <input type="date" name="firstDate" />
        </label>
        <label>
            <strong>Вторая дата:</strong>
            <input type="date" name="secondDate" />
        </label>
        <button type="submit" class="button button_green">Расчитать промежуток</button>
        <p id="datecalc__result"></p>
    </form>
`;

//вставляем разметку в html
let dataSet = document.querySelector("body");
dataSet.insertAdjacentHTML("beforeend", templateData);




const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}
