$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});


$(document).ready(function () {
    function questions() {
        $('.questions__head').on('click', function () {
            $(this).toggleClass('open')
            $(this).siblings('.questions__body').slideToggle()

        })
    }

    function love_contacts() {
        var $contacts = $('.general-love__contacts'),
            $open = $contacts.find('.button-open'),
            $close = $contacts.find('.button-close')

        $open.on('click', function (e) {
            e.preventDefault()
            $contacts.addClass('open')
        })

        $close.on('click', function (e) {
            e.preventDefault()
            $contacts.removeClass('open')
        })
    }

    function header() {
        var $header = $('.header')
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $header.addClass('fixed')
            } else {
                $header.removeClass('fixed')
            }
        });
    }


    function sliders() {
        $('.general-category-slider').slick({
            slidesToShow: 2,
            dots: true
        })

        $('.general-top-slider').slick({
            slidesToShow: 1,
            dots: true
        })


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


    questions()
    sliders()
    header()
    up_btn()
    love_contacts()

})
