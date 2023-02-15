function openPopup() {
    history.pushState({},"",location.href);
    history.pushState({},"",location.href);
    window.onpopstate = ()=>{
        
        let exitPopup = document.getElementsByClassName('exit-popup')[0];
        let corpoPopup = document.getElementsByClassName('corpo-popup')[0];
        let body = document.querySelector('body');

            exitPopup.style.display = 'flex';
            corpoPopup.classList.remove('feacharPopup');
            corpoPopup.classList.add('abrirPopup');
            body.style.overflow = 'hidden';

        closedPopup(exitPopup, corpoPopup, body);
    };
}

function closedPopup(exitPopup, corpoPopup, body) {
    document.getElementById('close').addEventListener('click', ()=>{
        body.style.overflow = 'auto';
        corpoPopup.classList.remove('abrirPopup');
        corpoPopup.classList.add('feacharPopup');

        setTimeout(()=>{
            exitPopup.style.display = 'none';
        }, 500);
    });
}