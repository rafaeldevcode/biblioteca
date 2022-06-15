function backRedirect() {
    history.pushState({},"",location.href);
    history.pushState({},"",location.href);
    window.onpopstate = ()=>{
        
        oppenPopup();

    };
}

function scroll(){
    window.addEventListener('scroll', ()=>{
        let cookieClosedPopup = getCookie('closedPopup');

        if(!cookieClosedPopup){
            let doc = document.documentElement;
            let percentPage = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight));

            if(percentPage === 75){
                oppenPopup();
            };
        }
    })
}

function oppenPopup(){
    console.log(getCookie('closedPopup'))
    let exitPopup = document.getElementsByClassName('exit-popup')[0];
    let bodyPopup = document.getElementsByClassName('body-popup')[0];

        exitPopup.style.display = 'flex';
        bodyPopup.classList.remove('closePopup');
        bodyPopup.classList.add('oppenPopup');

    closePopup(exitPopup, bodyPopup);
}

function closePopup(exitPopup, bodyPopup) {
    document.getElementById('close').addEventListener('click', ()=>{
        bodyPopup.classList.remove('oppenPopup');
        bodyPopup.classList.add('closePopup');
        document.cookie = 'closedPopup=true';

        setTimeout(()=>{
            exitPopup.style.display = 'none';
        }, 500);
    });
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');

    for(let i = 0; i <cookies.length; i++) {
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

// scroll();

// function scroll(){
//     // let leadboard = document.getElementById('formoney_mob_leaderboard');
//     // let coordenadas = leadboard.getBoundingClientRect();
//     // let totalHeigth = coordenadas.top + coordenadas.height;

//     window.addEventListener('scroll', ()=>{
//         let cookieClosedPopup = getCookie('closedPopup');

//         if(!cookieClosedPopup){
//             let iframe = document.querySelectorAll('.stc-video');
//             let leadboard = document.getElementById('formoney_mob_leaderboard');

//             if(iframe.length >= 1){
//                 if(leadboard && this.scrollY >= 1020){
//                     oppenPopup();
//                 };
//             }else{
//                 if(leadboard && this.scrollY >= 595){
//                     oppenPopup();
//                 };
//             }
//         }
//     });
// }

// function oppenPopup(){
//     let pg = new URLSearchParams(window.location.search).get('pg');
    
//     if(pg === '1'){
//         let exitPopup = document.getElementsByClassName('exit-popup')[0];
//         let bodyPopup = document.getElementsByClassName('body-popup')[0];
    
//             exitPopup.style.display = 'flex';
//             bodyPopup.classList.remove('closePopup');
//             bodyPopup.classList.add('oppenPopup');
    
//         closePopup(exitPopup, bodyPopup);
//     }
// }

// function closePopup(exitPopup, bodyPopup) {
//     document.getElementById('close').addEventListener('click', ()=>{
//         bodyPopup.classList.remove('oppenPopup');
//         bodyPopup.classList.add('closePopup');
//         document.cookie = 'closedPopup=true';

//         setTimeout(()=>{
//             exitPopup.style.display = 'none';
//         }, 500);
//     });
// }

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let cookies = decodedCookie.split(';');

//     for(let i = 0; i < cookies.length; i++) {
//         let cookie = cookies[i];

//         while (cookie.charAt(0) == ' ') {
//             cookie = cookie.substring(1);
//         }
//         if (cookie.indexOf(name) == 0) {
//             return cookie.substring(name.length, cookie.length);
//         }
//     }
//     return "";
// }