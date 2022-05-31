jQuery('#preloader .progress-bar').width('27%');
var windowWidth = parseInt( jQuery(window).width() );
var enough = windowWidth * 0.8;
var inter = setInterval(function() {
	var width = jQuery('#preloader .progress-bar').width();
	width += 70;
	jQuery('#preloader .progress-bar').width(width);
	if( width >= enough ) {
		clearInterval( inter );
	}
}, 300);
document.onreadystatechange = function () {
	if( document.readyState === 'complete' ) {
		clearInterval( inter );
		jQuery('#preloader .progress-bar').width('100%');
		jQuery('#preloader').fadeOut(400, function() {
			if( typeof showPoup !== 'undefined' ) {
				showPoup();
			}
		});
	}
}