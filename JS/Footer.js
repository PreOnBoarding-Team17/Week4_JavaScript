document.querySelector('.test').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://www.youtube.com', 'popup', 'width=800, height=600');
});