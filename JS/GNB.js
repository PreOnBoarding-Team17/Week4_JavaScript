function scrollAction(y) {
    var header = document.querySelector('header')
    var nav = document.querySelector('nav')

    var screenWidth = window.innerWidth !== undefined ? window.innerWidth : document.documentElement.clientWidth;

    if(y === 0) {
        header.classList.remove('is-scroll');

        if(nav.style.display==='none') {
            nav.style.display='block'
        }

    }else if(header.classList.length ===0 ){
        header.classList.add('is-scroll');

        if(nav.style.display!=='none' && screenWidth <= 1024) {
            nav.style.display='none'
        }
    }  
}

window.addEventListener('scroll', function(e) {
    var supportPageOffset = window.pageYOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    scrollAction(y)
});

window.addEventListener('beforeunload', function(event) {
    this.window.opener.location('https://www.youtube.com/watch?v=N0dc-idpwoE', 'popup', 'width=800, height=600');
    event.preventDefault();
    // Chrome에서는 returnValue 설정이 필요함
    event.returnValue = '';
   
  });
  window.addEventListener('unload', function(event) {
    console.log('I am the 3rd one.');
    this.alert('123')
  });