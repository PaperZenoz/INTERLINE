$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});


$(document).ready(function () {

    function sliders() {
        $('.general-category-slider').slick({
            slidesToShow: 2,
            dots: true,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        })


        $('.general-top-slider').slick({
            slidesToShow: 1,
            dots: true,
            asNavFor: '.general-top__advantage-list'
        })


        $('.product-card-slider').slick({
            slidesToShow: 3,
            dots: false
        })


        $('.product-analogue__slider').slick({
            slidesToShow: 3,
            dots: false
        })


        $('.general-top__advantage-list').slick({
            swipe: false,
            asNavFor: '.general-top-slider',
            arrows: false


        })

        // $('.general-top-slider').on('afterChange', function (currentSlide) {
        //     $('.general-top__column').addClass('active')
        //     $('.general-top__item').addClass('active')
        // });
        //
        // $('.general-top-slider').on('beforeChange', function (currentSlide) {
        //     $('.general-top__column').removeClass('active')
        //     $('.general-top__item').removeClass('active')
        // });


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

    function selects() {
        new SlimSelect({
            select: '#selectElement',
            settings: {
                showSearch: false
            }
        })

        new SlimSelect({
            select: '#selectElement2',
            settings: {
                showSearch: false
            }
        })
    }

    function category() {
        var $button = $('.general-category__nav-item'),
            $block = $('.general-category__list-item')


        setTimeout(function () {
            $block.hide()
            $block.eq(0).show()
        }, 1000)


        $button.on('click', function () {
            var $index = $(this).index()


            $button.removeClass('active')
            $(this).addClass('active')

            $block.hide()
            $block.eq($index).show()
        })
    }

    function category_types() {
        var $button = $('.general-category__types'),
            $nav = $('.general-category__nav')


        $button.on('click', function () {
            $(this).toggleClass('open')
            $nav.slideToggle()
        })
    }


    sliders()
    up_btn()
    selects()
    category()
    category_types() 

})
