(function() {
    tinymce.create('tinymce.plugins.video', {
       init : function(ed, url) {
          ed.addButton('add_video_button', {
             title : 'Adicionar Video',
             image : url+'/video.png',
             onclick : function() {
               let codigo = prompt("Digite o número correspondente a plataforma\n 1 - Youtube\n 2 - Vimeo");
                  if(codigo == 1){
                     let src = prompt("Digite a URL do video.");
                     if (src != null && src != ''){
                        ed.execCommand('mceInsertContent', false, '[youtube src="'+src+'"]');
                     }else{
                        alert("Nenhuma URL foi digitada!");
                        // ed.execCommand('mceInsertContent', false, '[youtube src=""]');
                     }
                  }else if(codigo == 2){
                     let id = prompt("Digite o ID do video.");
                     if (id != null && id != ''){
                        ed.execCommand('mceInsertContent', false, '[vimeo id="'+id+'"]');
                     }else{
                        alert("Nenhum ID foi digitado!");
                        // ed.execCommand('mceInsertContent', false, '[vimeo id=""]');
                     }  
                  }else{
                     alert("Código inválido!");
                  }
             }
          });
       },
       createControl : function(n, cm) {
          return null;
       },
       getInfo : function() {
          return {
             longname : "Adicionar Video",
             author : 'Rafael Vieira',
             authorurl : 'http://github.com/rafa600rr',
             infourl : '',
             version : "1.0"
          };
       }
    });
    tinymce.PluginManager.add('add_video_button', tinymce.plugins.video);
 })();