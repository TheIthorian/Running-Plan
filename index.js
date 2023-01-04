import { RENDERERS } from './public/data.js';

window.addEventListener('load', load);

const NUMBER_OF_WEEKS = 13;
const FIRST_DAY = new Date(2023, 0, 2);
const TARGET_DAY = new Date(2023, 3, 2);
// const TODAY = new Date(2023, 0, 2);
const TODAY = new Date();

function load() {
    const table = document.getElementById('table');
    table.innerHTML += getTableBody();
}

function getTableBody() {
    let html = '';
    for (let i = 0; i <= NUMBER_OF_WEEKS; i++) {
        html += renderRow(i);
    }
    return html;
}

function renderRow(rowNumber) {
    const currentCol = daysBetween(FIRST_DAY, TODAY);
    const currentRow = Math.floor(currentCol / 7);

    const rowClass = [];
    if (currentRow === rowNumber) rowClass.push('current-week');

    const row = RENDERERS.map(renderer => renderer(rowNumber))
        .map((val, weekDayNumber) =>
            renderCell(val, currentRow === rowNumber && getDay(TODAY) === weekDayNumber)
        )
        .join('\n');

    return `<tr class="${rowClass.join(' ')}">
    <td>${rowNumber}</td>
        ${row}
    </tr>`;
}

function renderCell(content, isToday) {
    const cellClass = [];
    if (isToday) cellClass.push('current-day');

    return `<td class="${cellClass.join(' ')}">${content}</td>`;
}

function treatAsUTC(date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}

function daysBetween(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

function getDay(date) {
    return (date.getDay() + 6) % 7;
}
