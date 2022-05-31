    document.querySelector(".btn-play").addEventListener("click", ()=>{

        let iframe = document.createElement("iframe");
        iframe.style.width = "560";
        iframe.style.heigth = "315";
        iframe.setAttribute('src', 'https://www.youtube.com/embed/TJ-wtt9xrYs?autoplay=1');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'autoplay; encrypted-media');
        document.querySelector(".btn-play").appendChild(iframe);
    });

