$(document).ready(function (t) {
    t(".box-video .video a").on("click", function () {
        var a = t(this).data("video");
        t(".box-video .video").append('<iframe width="560" height="315" src="' + a + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    });
});
