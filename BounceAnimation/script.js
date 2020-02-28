const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    if (!h1.classList.contains('animation-bounce')) {
        h1.classList.add('animation-bounce');
        setTimeout(() => {
            h1.classList.remove('animation-bounce');
        }, 1000);
    }
});
