(function () {
    const parametros = new URLSearchParams(window.location.search);
    const utm_params = [];
    
    parametros.forEach(function (value, key) {
        if ((key.startsWith('utm_')) || (key.startsWith('fb')) || (key.startsWith('tt'))) {
            utm_params.push(`${key}=${value}`);
        }
    });

    let utm_search = utm_params.join('&');

    if(utm_search.length > 0){

        function aplicarUtms() {
            Array.from(document.querySelectorAll('a[href]')).forEach((item)=>{

                if (item.href.indexOf('#') === -1 && item.href.indexOf('mailto:') === -1 && item.href.indexOf('tel:') === -1) {
                    let newHref = item.href + (item.href.indexOf('?') === -1 ? '?' : '&');
                    
                    newHref += utm_search;
                    item.setAttribute('href', newHref);
                }
            });
        };

        if(document.readyState === 'complete'){
            aplicarUtms();
        }else{
            window.addEventListener('load', ()=>{
                aplicarUtms();
            });
        }
    };
})();