(function($) {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 130) {
            $('#index-nav').addClass('sticky-navbar');
        } else {
            $('#index-nav').removeClass('stickynavbar');
        }
    });
})(jQuery);

$(window).on('load', function() {
    removeLoader();
    //setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});

function removeLoader() {
    $(".preloader").fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $(".preloader").remove(); //makes page more lightweight 
    });
}