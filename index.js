import { RENDERERS } from './public/data.js';

window.addEventListener('load', load);

const NUMBER_OF_WEEKS = 13;
const FIRST_DAY = new Date(2023, 0, 2);
const TARGET_DAY = new Date(2023, 3, 2);
const TODAY = new Date(2023, 0, 2);

function load() {
    const table = document.getElementById('table');
    table.innerHTML += getTableBody();
}

function getTableBody() {
    let html = '';
    for (let i = 0; i <= NUMBER_OF_WEEKS; i++) {
        const row = renderRow(i);
        html += row;
    }
    return html;
}

function renderRow(n) {
    const currentDay = daysBetween(FIRST_DAY, TODAY);
    const currentWeek = Math.floor(currentDay / 7);
    console.log(currentDay / 7);

    const rowClass = currentWeek === n ? ['current-week'] : [];

    const row = RENDERERS.map(renderer => renderer(n))
        .map((val, index) => {
            const cellClass = [];
            if (currentWeek === n && getDay(TODAY) === index) cellClass.push('current-day');

            return `<td class="${cellClass.join(' ')}">${val}</td>`;
        })
        .join('\n');

    return `<tr class="${rowClass.join(' ')}">
    <td>${n}</td>
        ${row}
    </tr>`;
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
