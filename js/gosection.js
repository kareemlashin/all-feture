 // goto section
 $(".nav-item .nav-link , .links li a").click(function() {
     let LinkHref = $(this).attr("href");
     $("html,body").animate({ scrollTop: $(LinkHref).offset().top }, 1000)
 })