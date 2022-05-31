document.getElementById('btn').addEventListener('click', ()=>{
    let data = document.getElementById('data').value;
    let time = document.getElementById('time').value;

    let dataFinal = new Date();
        dataFinal = new Date(`${data} ${time}`).getTime();
    let dia = document.getElementById('dia');
    let hora = document.getElementById('hora');
    let minuto = document.getElementById('minuto');
    let segundo = document.getElementById('segundo');

    let coutdown = setInterval(()=>{
        let dataAtual = new Date().getTime();

        let regressiva = dataFinal - dataAtual;

        dia.innerHTML = formatarData(Math.floor(regressiva / (1000 * 60 * 60 * 24)));
        hora.innerHTML = formatarData(Math.floor((regressiva % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        minuto.innerHTML = formatarData(Math.floor((regressiva % (1000 * 60 * 60)) / (1000 * 60)));
        segundo.innerHTML = formatarData(Math.floor((regressiva % (1000 * 60)) / 1000));

        if (regressiva < 0) {
            clearInterval(coutdown);
            dia.innerHTML = '00';
            hora.innerHTML = '00';
            minuto.innerHTML = '00';
            segundo.innerHTML = '00';
            document.getElementById('expira'). innerHTML = "EXPIRADO"
            document.getElementById('texto-desc').innerHTML = 'Promoção expirada!';
        }
    }, 1000);
})

function formatarData(data){
    if (data.toString().length == 1) {
        return `0${data}`
    }else{
        return data
    }
}