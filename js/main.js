$(document).ready(function() {
    let h_nav = $("nav").height();
    let h_section = $(".bg-two").height();
    $("nav").css({ top: h_section })
    $(".logo-one").innerHeight(h_nav + h_section + 17);

    $(window).scroll(() => {
        let w_scroll = $(window).scrollTop();
        if (w_scroll < h_section) {
            $("nav").css({ top: h_section })
            $(".logo-one").innerHeight(h_nav + h_section + 17);

        } else {
            $("nav").css({ top: 0 })
            $(".logo-one").innerHeight(h_nav + 17);

        }
    });

    let h_w = $(window).height();

    let h_h = h_w - h_section - h_nav;
    $("header , .carousel-inner  ,.carousel-item").height(h_h + 50)
        /*
         *slick 
         */

    $('.your-class').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        nav: true,
        centerPadding: '60px',
        responsive: [{
                breakpoint: 1024
            },
            {
                breakpoint: 600,
            },
            {
                breakpoint: 480
            }
        ]
    });

    /*
     *owlCarousel
     */
    $('.owl-carousel').owlCarousel({
        rtl: false,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        items: 4,
        margin: 5,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    var x = setInterval(() => {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("days").innerHTML = days;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
});