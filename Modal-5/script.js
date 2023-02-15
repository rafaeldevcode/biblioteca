function openPopup() {
    const doc = document.documentElement;

    window.addEventListener('scroll', ()=>{
        const perc = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))
        let cookieClosedPopup = getCookie('oppenPopup');

        if(!cookieClosedPopup){
            if(perc > 70){
                let exitPopup = document.getElementsByClassName('popup')[0];
                let corpoPopup = document.getElementsByClassName('popup-body')[0];
                let body = document.querySelector('body');
        
                    exitPopup.style.display = 'flex';
                    corpoPopup.classList.remove('close-popup');
                    corpoPopup.classList.add('open-popup');
                    body.style.overflow = 'hidden';
                    
                setCookie('oppenPopup', true, 300, 'mixme.com.br');
                closedPopup(exitPopup, corpoPopup, body);
            }
        }
    });
}

function closedPopup(exitPopup, corpoPopup, body) {
    document.getElementById('cta-close').addEventListener('click', ()=>{
        body.style.overflow = 'auto';
        corpoPopup.classList.remove('open-popup');
        corpoPopup.classList.add('close-popup');

        setTimeout(()=>{
            exitPopup.style.display = 'none';
        }, 500);
    });
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');

    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];

        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, expires, path = '/') {
    let cookie = `${cname}=${cvalue}`;
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 1000*expires;
        now.setTime(expireTime);

        document.cookie = `${cookie};expires=${now.toUTCString()};path=${path}`;
}