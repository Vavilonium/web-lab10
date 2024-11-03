const firstElement = document.getElementById('firstHeader');
const secondElement = document.getElementById('secondHeader');

let isFirstElementPurple = false;
let isSecondElementLargeFont = false;

firstElement.addEventListener('click', () => {
    if (isFirstElementPurple) {
        firstElement.style.color = '';
        firstElement.style.textShadow = '';
    } else {
        firstElement.style.color = 'purple';
        firstElement.style.textShadow = '0 0 6px rgba(128, 0, 128, 0.6), 0 0 12px rgba(128, 0, 128, 0.4), 0 0 18px rgba(128, 0, 128, 0.2)';
    }
    isFirstElementPurple = !isFirstElementPurple;
});

secondElement.addEventListener('click', () => {
    if (isSecondElementLargeFont) {
        secondElement.style.fontSize = ''; 
    } else {
        const currentFontSize = window.getComputedStyle(secondElement).fontSize;
        secondElement.style.fontSize = `${parseFloat(currentFontSize) + 2}px`; 
    }
    isSecondElementLargeFont = !isSecondElementLargeFont;
});
