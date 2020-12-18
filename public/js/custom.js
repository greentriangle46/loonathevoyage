(function($) {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 130) {
            $('#index-nav').addClass('sticky-navbar');
        } else {
            $('#index-nav').removeClass('stickynavbar');
        }
    });
})(jQuery);