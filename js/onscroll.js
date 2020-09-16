// scroll
$(window).scroll(() => {
    let x = $(window).scrollTop();
    let v = $("#v").offset().top;
    if (x >= v) {
        $(".navbar").addClass("bg-info");
        $(".navbar").removeClass("bg-light");
    } else {

        $(".navbar").removeClass("bg-info");
        $(".navbar").addClass("bg-light");
    }
});