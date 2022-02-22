var lowIE = !window.addEventListener
var isIE = /*@cc_on!@*/false || !!document.documentMode;

function onResize() {
    var screenWidth = document.documentElement.clientWidth;
    console.log(screenWidth)
    var contact = document.querySelector('.footer__contact')
    var tems = document.querySelector('.footer__tems')
    var contactPc = document.querySelector('.footer__contact-pc')
    var contactLast = document.querySelector('.footer__contact-last')

    if(screenWidth < 1024) {
        contactLast.style.marginTop = '20px';
        contactLast.style.display = 'inline-block';
        contactPc.style.display = 'none';
        if(lowIE) contact.style.paddingBottom = '20px';
    }
    
    if(screenWidth >= 1024) { 
        tems.style.bottom = '40px';
        contactLast.style.display = 'none';
        contactPc.style.display = 'inline-block';
        contactPc.style.marginLeft = '16px';
    } 
}

if(isIE) {
    onResize()

    lowIE ? window.attachEvent("onresize", onResize) :  window.addEventListener("resize", onResize);
    
}