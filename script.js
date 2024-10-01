// script.js
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        bar.style.width = bar.getAttribute('style').split(': ')[1];
    });
});
