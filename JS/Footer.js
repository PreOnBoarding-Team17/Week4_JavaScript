var lowIE = !window.addEventListener
var screenWidth = document.documentElement.clientWidth;


if(lowIE) {
    document.querySelector('.footer__contact').style.paddingBottom = '20px';
    document.querySelector('.footer__contact-last').style.marginTop = '20px';
    document.querySelector('.footer__contact-pc').style.display = 'none';
}

if (lowIE && screenWidth >= 1024) {
    document.querySelector('.footer__tems').style.bottom = '40px';
    document.querySelector('.footer__contact-last').style.display = 'none';
    document.querySelector('.footer__contact-pc').style.display = 'inline-block';
    document.querySelector('.footer__contact-pc').style.marginLeft = '16px';
} 

if (lowIE) {
    window.attachEvent("onresize", function(e) {
        var screenWidth = document.documentElement.clientWidth;

        if(screenWidth < 1024) {
            document.querySelector('.footer__contact').style.paddingBottom = '20px';
            document.querySelector('.footer__contact-last').style.marginTop = '20px';
            document.querySelector('.footer__contact-last').style.display = 'block';
            document.querySelector('.footer__contact-pc').style.display = 'none';
        }
        else { 
            document.querySelector('.footer__tems').style.bottom = '40px';
            document.querySelector('.footer__contact-last').style.display = 'none';
            document.querySelector('.footer__contact-pc').style.display = 'inline-block';
            document.querySelector('.footer__contact-pc').style.marginLeft = '16px';
        } 
    })
}