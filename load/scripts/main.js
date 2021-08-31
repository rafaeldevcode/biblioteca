const createEl = ()=>{
    let textSpan = "Carregando seu post..."

    let section = document.createElement("section");
    section.setAttribute('class', 'section-load');

    let divOne = document.createElement("div");
    divOne.setAttribute('class', 'load');

    let span = document.createElement("span");
    span.setAttribute('class', 'load-span');

    let divTwo = document.createElement("div");
    divTwo.setAttribute('class', 'progress');

    let div = document.createElement("div");

    document.getElementsByClassName("postid-13513")[0].appendChild(section);
    document.getElementsByClassName("section-load")[0].appendChild(divOne);
    document.getElementsByClassName("section-load")[0].appendChild(span);
    document.getElementsByClassName("load-span")[0].innerHTML = textSpan;
    document.getElementsByClassName("section-load")[0].appendChild(divTwo);
    document.getElementsByClassName("progress")[0].appendChild(div);
}

window.onload = ()=>{
    createEl();

    const removeLoad = ()=>{
        let romoveLoad = document.getElementsByClassName("section-load")[0];
        romoveLoad.classList.add("remove-load");
    }
    
    setTimeout(()=>{removeLoad();}, 2600);
}