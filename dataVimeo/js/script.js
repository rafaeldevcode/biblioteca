// $(document).ready(function (t) {
//     t(".box-video .video a").on("click", function () {
//         var a = t(this).data("video");
//         t(".box-video .video").append('<iframe width="560" height="315" src="' + a + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
//     });
// });


// class DataVideo{
//     constructor(id){
//         this.video = document.querySelector(`[data-video="${id}"]`);
//     }

//     init(){
//         this.iframe = this.video.querySelector('.btn-play');
//         this.iframe.innerHtml = `<iframe width="560" height="315" src="" + a + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
//         this.iframe.children;
//     }

//     addIframe(){
//         const initPlay = this.video.querySelector('.btn-play');
//         initPlay.addEventListener('click', this.init);
//         console.log("ola mundo");
//     }
// }

// new DataVideo ('video');




    document.querySelector(".btn-play").addEventListener("click", ()=>{

        let iframe = document.createElement("iframe");
        // console.log("ola");
        iframe.style.width = "560";
        iframe.style.heigth = "315";
        iframe.setAttribute('src', 'https://www.youtube.com/embed/ktppGu3EDmU');
        iframe.setAttribute('autoplay', '1');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'autoplay; encrypted-media');
        document.querySelector(".btn-play").appendChild(iframe);
    });

