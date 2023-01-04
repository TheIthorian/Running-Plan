const LIGHT = 'light';
const DARK = 'dark';
const THEME = 'theme';

export function setupTheme() {
    const dark = document.getElementById('theme-dark');
    const light = document.getElementById('theme-light');

    function showDark() {
        light.classList.remove('hidden');
        dark.classList.add('hidden');
        localStorage.setItem(THEME, DARK);
        setDarkTheme();
    }

    function showLight() {
        light.classList.add('hidden');
        dark.classList.remove('hidden');
        localStorage.setItem(THEME, LIGHT);
        setLightTheme();
    }

    dark.addEventListener('click', showDark);
    light.addEventListener('click', showLight);

    const current = localStorage.getItem('theme') ?? DARK;

    if (current === DARK) showDark();
    else showLight();
}

function setLightTheme() {
    setColor('--background', 'var(--light-background)');
    setColor('--highlight-low', 'var(--light-highlight-low)');
    setColor('--highlight-med', 'var(--light-highlight-med)');
    setColor('--highlight-high', 'var(--light-highlight-high)');
    setColor('--font', 'var(--light-font)');
}

function setDarkTheme() {
    setColor('--background', 'var(--dark-background)');
    setColor('--highlight-low', 'var(--dark-highlight-low)');
    setColor('--highlight-med', 'var(--dark-highlight-med)');
    setColor('--highlight-high', 'var(--dark-highlight-high)');
    setColor('--highlight-high', 'var(--dark-highlight-high)');
    setColor('--font', 'var(--dark-font)');
}

function setColor(property, color) {
    document.documentElement.style.setProperty(property, color);
}
