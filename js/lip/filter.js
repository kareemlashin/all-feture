$("ul#filter li").click(function() {

    let filter = $(this).attr("filter");
    if (filter == "all") {
        $(".filter_all").slideDown(1000);
    } else {
        $('.filter_all').not("." + filter).slideUp(1000);
        $("." + filter).css("display", "block");
        $('.filter_all').filter("." + filter).slideDown(1000);

    }

});

$(".chose ul li").click(function() {
    $(this).addClass("activeX");
    $(this).siblings().removeClass("activeX")
})