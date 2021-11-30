$(document).ready(function (e) {
    $(".slider").owlCarousel({
        center: true,
        autoWidth: true,
        loop: true,
        nav: false,
        navSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
            }
        }
    });
})

$(".owl-prev").html("<i class='fas fa-chevron-left'></i>")
$(".owl-next").html("<i class='fas fa-chevron-right'></i>")