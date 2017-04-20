$(document).ready(function() {
    //Init home-slider
    if ($('#home-slider')) {
        $('#home-slider').slick({
            arrows: false,
            dots: true
        });
    }

    //Init gallery-slider
    if ($('#gallery-slider')) {
        $('#gallery-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 542,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});