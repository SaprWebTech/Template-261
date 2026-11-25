$(document).ready(function(){
    $('.slider-4').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive:[
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('#dev-arr-right').on('click', function() {
        $('.slider-4').slick('slickNext');
    });
    $('#dev-arr-left').on('click', function() {
        $('.slider-4').slick('slickPrev');
    });
});