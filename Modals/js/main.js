let mobile =  navigator.userAgentData.mobile;

if (mobile == true) {
    abrirModalMobile();
}else{
    setTimeout(() => {
        document.querySelector('body').setAttribute('onmousemove', 'abrirModal(event)');
    }, 3000);
}

function fecharModal(){
    document.querySelector('.btnClossed').addEventListener('click', (event)=>{
        event.preventDefault(event);
        
        document.querySelector('.modal').classList.remove('abrir-modal');
        document.querySelector('.modal').classList.add('fechar-modal');
        window.history.pushState({}, 'back',  '');

        setTimeout(() => {
            document.querySelector('.modal').hidden = true;
        }, 800);
    })
}

function abrirModalDesk(){
    document.querySelector('.modal').removeAttribute('hidden');
    document.querySelector('.modal').classList.remove('fechar-modal');
    document.querySelector('.modal').classList.add('abrir-modal');

    fecharModal();
}

function abrierModalDesckNovamente(){
    setTimeout(() => {
        document.querySelector('body').setAttribute('onmousemove', 'abrirModal(event)');
    }, 60000);

    fecharModal();
}

function abrirModalMobile(){
    history.pushState({},'',location.href);
    history.pushState({},'',location.href);
    window.onpopstate = ()=>{

        document.querySelector('.modal').removeAttribute('hidden');
        document.querySelector('.modal').classList.remove('fechar-modal');
        document.querySelector('.modal').classList.add('abrir-modal');

        fecharModal();
    };
}

function abrirModal(event){
    let y = event.clientY;

    if (y < 20) {
        abrirModalDesk();
        document.querySelector('body').removeAttribute('onmousemove');

        abrierModalDesckNovamente();
    }
}

document.getElementsByClassName("btn")[0].addEventListener("click", ()=>{
    document.querySelector('.modal').removeAttribute('hidden');
    document.querySelector('.modal').classList.remove('fechar-modal');
    document.querySelector('.modal').classList.add('abrir-modal');

    fecharModal();
})