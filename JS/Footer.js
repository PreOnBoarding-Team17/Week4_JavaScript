document.querySelector('.test').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://www.youtube.com', 'popup', 'width=800, height=600');
});

var isIE = /*@cc_on!@*/false || !!document.documentMode;
var m = matchMedia("screen and (min-width: 1024px)");
if (isIE && m.matches) {
    document.querySelector('.footer__tems').style.bottom = '40px';
} 