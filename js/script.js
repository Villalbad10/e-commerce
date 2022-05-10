


document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('man')) {
        sessionStorage.setItem('categoria', "men's clothing");
        window.location.href = './pages/categoria.html';
    }
    if (target.classList.contains('women')) {
        sessionStorage.setItem('categoria', "women's clothing");
        window.location.href = './pages/categoria.html'
    }
})