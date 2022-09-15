window.googletag = window.googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
  	googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      //console.log(event);
      if(event.slot.getAdUnitPath().includes('header')){ // mudar a palavra "header" para "top" depende de como chama o seu bloco 
        //console.log('Nome do slot: '+event);
        //console.log(event);
        if(event.isEmpty){
          document.getElementsByClassName("sticky-parent")[0].style.height = '1px';
          document.getElementsByClassName("sticky-parent")[0].style.minHeight	 = '1px';
          //console.log('1px');
        } else {
          document.getElementsByClassName("sticky-parent")[0].style.height = '420px';
          //console.log('420px');
        }
        var loading = document.getElementById('preloader');
        if(typeof loading !== 'undefined'){
          loading.style.display = 'none'; 
          //console.log('removi preloader')
        }
      }
    });
});