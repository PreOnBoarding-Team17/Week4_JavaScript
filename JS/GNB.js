function scrollAction() {

    var header = document.querySelector('.header')
    var nav = document.querySelector('nav')

    var scrollY = window.pageYOffset
    var screenWidth = window.innerWidth

    if(scrollY === 0) {
        header.classList.remove('is-scroll');

        if(nav.style.display==='none') {
            nav.style.display='block'
        }

    }else if(header.classList.length === 1 ){
        header.classList.add('is-scroll');

        if(nav.style.display!=='none' && screenWidth <= 1024) {
            nav.style.display='none'
        }
    }  
}

function scrollActionInIE () {
    var header = document.querySelector('.header')
    var nav = document.querySelector('.nav-wrapper')

    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    var scrollY = isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    var screenWidth = document.documentElement.clientWidth;

    if(scrollY === 0) {
        header.style.boxShadow= '0px 0px 1px #000';
        header.style.borderBottom= 'none';
        
        if(nav.style.display==='none') {
            nav.style.display='block'
        }
        
    }else{
        header.style.borderBottom= '1px solid #ffc948';
        header.style.boxShadow= '0px 0px 1px #ffc948';

        if(screenWidth <= 1024) {
            nav.style.display='none'
        }
    }  

}

if (window.addEventListener) {
    window.addEventListener('scroll', scrollAction);
}
else {
    window.attachEvent("onscroll", scrollActionInIE);
}

