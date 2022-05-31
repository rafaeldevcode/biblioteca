function backRedirect() {
    history.pushState({},"",location.href);
    history.pushState({},"",location.href);
    window.onpopstate = ()=>{
        
        oppenPopup();

    };
}

function scroll(){
    window.addEventListener('scroll', ()=>{
        let doc = document.documentElement;
        let percentPage = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight));

        if(percentPage === 75){
            oppenPopup();
        };
    })
}

function oppenPopup(){
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

        setTimeout(()=>{
            exitPopup.style.display = 'none';
        }, 500);
    });
}