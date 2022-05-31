window.addEventListener("load", function(event) {
    setTimeout( function() {
        startSlickSliderFeeds();
    }, 0000 );

});

const startSlickSliderFeeds = function() {
    $(".center-slider").slick({
        cssEase: 'linear',
        arrows:false,
        dots: true,			
        slidesToShow: 3,
        // slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        swipe: true, 
        // fade: true,
        // infinite: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                }
            },{
                breakpoint: 767,
                settings: {
                    dots: true,
                    slidesToShow: 1
                }
            },
        ]
    }); 
}