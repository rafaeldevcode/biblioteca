function loadArticlesInJson(){
    const doc = document.documentElement;
    const url = document.URL;
    let indice = 0;
    let lastScrollTop = 0;
    let lastId = document.getElementById('124587').getAttribute('id');

    window.addEventListener('scroll', (event)=>{
        const perc = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))
        const scroll = this.scrollY < lastScrollTop ? "up" :  "down"; // Verificar se o scroll é para cima ou para baixo

        // Realizar uma nova requisição para um arquivo json para adicinar mais um artigo
        if(perc > 70){
            fetch('/js/articles.json')
            .then((response) => { return response.json() })
            .then((response) => {
                // Criando articlo caso exista no json
                if(indice <= response.total-1){
                    const article = document.getElementById(response[indice].id);

                    if(isVisible(article)){
                        const publicity = article.querySelectorAll('.publicity');
                        const title = document.createElement('h2');
                            title.innerHTML = response[indice].title;

                        const content = document.createElement('div');
                            content.innerHTML = response[indice].content;

                        article.prepend(content);
                        article.prepend(title);
                        publicity.forEach((pub) => {
                            pub.classList.remove('d-none');
                        });

                        lastId = response[indice].id; // Definir o ID do último artigo
                        indice++;
                    }
                }
            });

            // Alterando a url
            alterState(lastId, url);
        }

        // Alterar url e remover o último artigo quando o scroll for para cima
        if(scroll == 'up'){
            const article = document.getElementById(lastId);

            // Caso exista o último article executar script para remover e alterar a url
            if(article && !isVisible(article)){
                // document.getElementById(lastId).remove();

                fetch('/js/articles.json')
                .then((response) => { return response.json() })
                .then((response) => {
                    if(response[indice-1]){
                        lastId = response[indice-1] && response[indice-1].id; // Definir o ID do último artigo
                    }else{
                        lastId = document.getElementById('124587').getAttribute('id'); // Definir o ID do último artigo
                    }
                });
            }

            // Alterando a url
            alterState(lastId, url);
        }

        // Definir a última posição do scroll
        lastScrollTop = this.scrollY;
    }, true);
}

function isVisible(el) {
    const positions = el.getBoundingClientRect();
    const start = positions.top.toFixed(0);
    const width = positions.width.toFixed(0);
    const top = start-width;
    
    return top <= 0 ? true : false;   
}

function alterState(lastId, url){
    let path = url.split('?');

    if(path.length = 2){
        path = path.join(`${lastId}?`)
    }else{
        path = path[0]+lastId
    }

    window.history.pushState({urlPath: url+lastId}, '', path);
}