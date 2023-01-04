export const RENDERERS = [
    () => REST,
    n => `${easyRunLength(n)}km easy run`,
    n => `${tempoRunLength(n)}km tempo run`,
    () => REST,
    n => `${easyRunLength(n)}km easy run`,
    () => CROSS_TRAIN,
    n => `${longRunLength(n)}km long run`,
];

const REST = 'Rest';
const CROSS_TRAIN = 'Cross-train';

function easyRunLength(n) {
    if (n < 2) return 4;
    if (n < 5) return 5;
    if (n < 10) return 6;
    return 7;
}

function tempoRunLength(n) {
    if (n <= 2) return 5;
    if (n < 5) return 6;
    if (n < 7) return 7;
    if (n < 9) return 8;
    return 9;
}

function longRunLength(n) {
    return 21 - n;
}
