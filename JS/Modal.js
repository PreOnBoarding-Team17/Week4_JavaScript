var lowIE = !window.addEventListener
var isIE = /*@cc_on!@*/false || !!document.documentMode;

var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.close');

function getCookie(key){
	key = new RegExp(key + '=([^;]*)');
	return key.test(document.cookie) ;
}

if(getCookie('kukka'))
{
    modal.style.display = 'none';
}
else {
    modal.style.display = 'block';
}


function handlerClick () {
    var inputCheck = document.querySelector('#modal-check').checked;
    var now =new Date();
    var date = new Date(now.setDate(now.getDate() + 1));  
    var expires = "expires=" + date.toGMTString();

    if(inputCheck) {
        document.cookie ="kukka = true; path=/; " + expires;         
    }

    modal.style.display = 'none';
}

if (window.addEventListener) {
    closeBtn.addEventListener('click',handlerClick )
}
else {
    closeBtn.attachEvent("onclick", handlerClick);
}
