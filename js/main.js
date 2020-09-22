$(document).ready(function() {
    let nav_he = $(".nav-all ul").height();
    let w_h = $(window).height();
    if (nav_he < w_h) {
        $('.scrollbar').css({ overflow: 'auto' })
    }
});