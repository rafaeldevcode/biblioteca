function oppenMenu(){
    let menuCheck = document.getElementById('checkbox-menu');
    let menuAside = document.querySelector('.menu-aside');

        menuCheck.addEventListener('click', ()=>{

            if(menuCheck.checked === true){
                menuAside.classList.remove('closed-menu');
                menuAside.classList.add('oppen-menu');
            }else{
                menuAside.classList.remove('oppen-menu');
                menuAside.classList.add('closed-menu');
            }
        });

}