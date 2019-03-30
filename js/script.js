const buttonTripSearch = document.querySelector('.trip-search-title');
const buttonSearch = document.querySelector('.trip-search');

buttonTripSearch.addEventListener('click', () => {
    if (buttonSearch.classList.contains('trip-search-hidden')) {
        buttonSearch.classList.remove('trip-search-hidden');
        buttonSearch.querySelector('input').focus();
    } else {
        buttonSearch.classList.add('trip-search-hidden');
    }
});

const formCounters = document.querySelectorAll('.form-counter');

formCounters.forEach(formCounter => {
    const dec = formCounter.querySelector('.form-counter-button');
    const inc = formCounter.querySelector('.form-counter-button:last-child');
    const input = formCounter.querySelector('.form-counter-field');

    inc.addEventListener('click', () => {
        input.value = parseInt(input.value, 10) + 1;
    });

    dec.addEventListener('click', () => {
        input.value = Math.max(parseInt(input.value, 10) - 1, 0);
    });
});

const mapClickHandler = document.querySelector('.map-click-handler');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.trip-search');

mapClickHandler.addEventListener('click', () => {
    overlay.classList.remove('overlay-hidden');
});

overlay.addEventListener('click', () => {
    overlay.classList.add('overlay-hidden');
});

form.addEventListener('click', (e) => e.stopPropagation());