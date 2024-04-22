$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});


$(document).ready(function () {

    function sliders() {
        $('.general-category-slider').slick({
            slidesToShow: 2,
            dots: true
        })

        $('.general-top-slider').slick({
            slidesToShow: 1,
            dots: true
        })


        $('.product-card-slider').slick({
            slidesToShow: 3,
            dots: false
        })


        $('.product-analogue__slider').slick({
            slidesToShow: 3,
            dots: false
        })

        $('.general-top-slider').on('afterChange', function(currentSlide) {
           $('.general-top__column').addClass('active')
           $('.general-top__item').addClass('active')
        });

        $('.general-top-slider').on('beforeChange', function(currentSlide) {
            $('.general-top__column').removeClass('active')
            $('.general-top__item').removeClass('active')
        });




    }

    function up_btn() {
        var $up_btn = $('.up-btn')

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $up_btn.fadeIn();
            } else {
                $up_btn.fadeOut();
            }
        });

        $up_btn.click(function () {
            $("html, body").animate({scrollTop: 0}, 0);
            return false;
        });
    }


    sliders()
    up_btn()

})
