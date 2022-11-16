// Método mais simples
(function () {
    const parameters = new URLSearchParams(window.location.search);
    const utm_params = [];
    
    parameters.forEach(function (value, key) {
        if ((key.startsWith('utm_')) || (key.startsWith('fb')) || (key.startsWith('tt'))) {
            utm_params.push(`${key}=${value}`);
        }
    });

    let utm_search = utm_params.join('&');

    if(utm_search.length > 0){
        function aplyUtms() {
            Array.from(document.querySelectorAll('a[href]')).forEach((item)=>{
                if (item.href.indexOf('#') === -1 && item.href.indexOf('mailto:') === -1 && item.href.indexOf('tel:') === -1) {
                    
                    let newHref = item.href + (item.href.indexOf('?') === -1 ? '?' : '&');
                        newHref += utm_search;
                        item.setAttribute('href', newHref);
                }
            });
        };

        if(document.readyState === 'complete'){
            aplyUtms();
        }else{
            window.addEventListener('load', ()=>{
                aplyUtms();
            });
        }
    };
})();

// Método mais complexo
(function () {
    const parametros = new URLSearchParams(window.location.search);
    const utm_params = [];
    let source = '';
    let content = '';
    let campaign = '';
    
    parametros.forEach(function (value, key) {
        if ((key.startsWith('utm_')) || (key.startsWith('fb')) || (key.startsWith('tt'))) {
            utm_params.push(`${key}=${value}`);

            source = key == 'utm_source' ? value : '';
            content = key == 'utm_content' ? value : '';
            campaign = key == 'utm_campaign' ? value : '';
        }
    });

    let utm_search = utm_params.join('&');

    if(utm_search.length > 0){
        function uuidv4() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        }

        function getCookies() {
            var c = document.cookie,
                v = 0,
                cookies = {};
            if (document.cookie.match(/^\s*\$Version=(?:"1"|1);\s*(.*)/)) {
                c = RegExp.$1;
                v = 1;
            }
            if (v === 0) {
                c.split(/[,;]/).map(function (cookie) {
                    var parts = cookie.split(/=/, 2),
                        name = decodeURIComponent(parts[0].trimLeft()),
                        value = parts.length > 1 ? decodeURIComponent(parts[1].trimRight()) : null;
                    cookies[name] = value;
                });
            } else {
                c.match(/(?:^|\s+)([!#$%&'*+\-.0-9A-Z^`a-z|~]+)=([!#$%&'*+\-.0-9A-Z^`a-z|~]*|"(?:[\x20-\x7E\x80\xFF]|\\[\x00-\x7F])*")(?=\s*[,;]|$)/g).map(function ($0, $1) {
                    var name = $0,
                        value = $1.charAt(0) === '"' ? $1.substr(1, -1).replace(/\\(.)/g, "$1") : $1;
                    cookies[name] = value;
                });
            }
            return cookies;
        }

        function aplyUtms() {
            Array.from(document.querySelectorAll('a[href]')).forEach((item)=>{

                if (item.href.indexOf('#') === -1 && item.href.indexOf('mailto:') === -1 && item.href.indexOf('tel:') === -1) {
                    let newHref = item.href + (item.href.indexOf('?') === -1 ? '?' : '&');
                    let uid = uuidv4();
                    let cookies = getCookies();
                    let data = { uid: uid, fbc: cookies._fbc, fbp: cookies._fbp, ga: cookies._ga };
                    // campaign = !campaign ? 'sem-campaign' : campaign
                    // let tracking = ((!source) || (!content)) ? 'conteudo' : `${source}-${content}`;
                    // let urlQuery = "aff_xtra=" + tracking + "_" + btoa(JSON.stringify(data));
                    // let urlQuery = "aff_sub=" + campaign + "&source="+source;
                    
                    if(newHref.indexOf('v2.afilio12.com.br') >= 0){
                        let urlQuery = `aff_xtra=${btoa(JSON.stringify(data))}`;

                        newHref = (newHref.indexOf('aff_xtra') >= 0) ? newHref.replace(/aff_ectra=([a-zA-Z0-9-_]*)/, urlQuery) : newHref+urlQuery;

                        item.removeAttribute('href');
                        item.setAttribute('onclick', `partnerRedirect("${newHref}", "${uid}")`);
                        item.setAttribute('style', 'cursor: pointer')
                    }else if((newHref.indexOf('tracking.offerbox123.com.br') >= 0) || (newHref.indexOf('igoal.go2cloud.org') >= 0)){
                        let urlQuery = 'aff_sub=&source=';

                        newHref = (newHref.indexOf('aff_sub') >= 0) ? newHref.replace(/aff_sub=([a-zA-Z0-9-_]*)/, urlQuery) : newHref+urlQuery

                        item.removeAttribute('href');
                        item.setAttribute('onclick', `partnerRedirect("${newHref}", "${uid}")`);
                        item.setAttribute('style', 'cursor: pointer')
                    }else{
                        
                        if((item.classList == 'maxbutton-2 maxbutton maxbutton-botao-2 extra-shadow')  || (item.id == 'teste')){

                            let utm_campaign = new URL(location.href).searchParams.get('utm_campaign');
                                new_utm_campaign = utm_campaign.indexOf('-teste') >= 0 ? utm_campaign : `${utm_campaign}-teste`;

                                newHref += utm_search.replace(utm_campaign, new_utm_campaign);
                                item.setAttribute('href', newHref);
                        }else{
                            newHref += utm_search;
                            item.setAttribute('href', newHref);
                        }
                    }
                }
            });
        };

        if(document.readyState === 'complete'){
            aplyUtms();
        }else{
            window.addEventListener('load', ()=>{
                aplyUtms();
            });
        }
    };
})();

function partnerRedirect(href, id) {
    fbq("trackCustom", "PartnerRedirect", { external_id: id });
    window.location.href = href;
}